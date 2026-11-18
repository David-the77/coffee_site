const menu = [
  { name: "espresso", price: 3.0, prepSeconds: 1 },
  { name: "latte", price: 4.5, prepSeconds: 2 },
  { name: "mocha", price: 4.75, prepSeconds: 3 },
  { name: "cold brew", price: 4.75, prepSeconds: 2 },
];


// 1. Use forEach to print each drink
menu.forEach(function(drink) {
  console.log(`${drink.name}: $${drink.price.toFixed(2)} (${drink.prepSeconds} s)`);
});


const drinkNames = menu.map(drink => drink.name);
console.log(drinkNames); // ["espresso", "latte", "mocha", "cold brew"]
//4
const cheapDrinks = menu.filter(drink => drink.price < 4.75).map(drink => drink.name);
console.log(cheapDrinks);// cheapp drinks under 4.75

//Use find to get the mocha, and print its prepSeconds
const mocha = menu.find(drink => drink.name === "mocha");
console.log("Mocha prep time:", mocha.prepSeconds);

//5
const sortedMenu = [...menu].sort((a, b) => b.price - a.price);
console.log(sortedMenu.map(d => d.name)); 
// arrange in decending order of price and print the names of the drinks

// Prove the original menu did not change
console.log(menu.map(d => d.name)); 
s
const totalPrice = menu.reduce((sum, drink) => sum + drink.price, 0);
console.log(`The total price is $${totalPrice.toFixed(2)}`); 


const fastDrinksCount = menu.filter(drink => drink.prepSeconds <= 2).length;
console.log(`Number of fast drinks (2 seconds or less): ${fastDrinksCount}`);





// formatTime: returns time as "HH:MM" (24-hour format, 2 digits each)
function formatTime(date) {

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
}

//  getDayName: returns the name of the day
function getDayName(date) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[date.getDay()];
}

// formatDate: returns the date like "Wednesday 11 November 2026"
function formatDate(date) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

// isShopOpen: returns true if hour is from 8 up to, but not including, 16
function isShopOpen(date) {
  const hour = date.getHours();
  return hour >= 8 && hour < 16;
}

// secondsBetween: returns whole number of seconds between two dates
function secondsBetween(start, end) {

  return Math.round((end.getTime() - start.getTime()) / 1000);
}

// daysUntil: returns whole number of days from one date to another
function daysUntil(target, from) {
  const msInDay = 1000 * 60 * 60 * 24; // Milliseconds in one day
  return Math.round((target.getTime() - from.getTime()) / msInDay);
}

// TESTS FOR PART 3

console.log(formatTime(new Date(2026, 10, 11, 9, 5)), formatTime(new Date(2026, 10, 11, 14, 30)));
//  09:05 14:30

console.log(getDayName(new Date(2026, 10, 11)), getDayName(new Date(2026, 11, 25)));
//  Wednesday Friday

console.log(formatDate(new Date(2026, 10, 11)));
//  Wednesday 11 November 2026

console.log(isShopOpen(new Date(2026, 10, 11, 9, 0)), isShopOpen(new Date(2026, 10, 11, 16, 0)), isShopOpen(new Date(2026, 10, 11, 7, 59)));
//  true false false

console.log(secondsBetween(new Date(2026, 10, 11, 9, 0, 0), new Date(2026, 10, 11, 9, 2, 30)));
//  150

console.log(daysUntil(new Date(2026, 11, 25), new Date(2026, 10, 11)));
//  44



// PART 5: THE ORDER BOOK


function createOrderBook() {
  // PRIVATE VARIABLES: These are locked inside the function's scope.
  // Nothing outside this function can access or modify them directly.
  let orders = [];
  let nextId = 1;

  return {
    //  addOrder
    addOrder: function(customer, drink, quantity) {
      // Check if the drink exists on the menu
      const drinkInfo = menu.find(d => d.name === drink);
      
      // If not found, return null immediately
      if (!drinkInfo) {
        return null;
      }

      // Create the new order object
      const newOrder = {
        id: nextId,
        customer: customer,
        drink: drink,
        quantity: quantity,
        placedAt: new Date(),
        status: "waiting"
      };

      // Add to our private array and increment the ID for the next order
      orders.push(newOrder);
      nextId++;
      
      return newOrder;
    },

    // 2. markReady
    markReady: function(id) {
      const order = orders.find(o => o.id === id);
      if (order) {
        order.status = "ready";
        return true;
      }
      return false; // Order not found
    },

    //  getWaiting
    getWaiting: function() {
      return orders.filter(order => order.status === "waiting");
    },

    // getSummary
    getSummary: function() {
      const total = orders.length;
      const waiting = orders.filter(o => o.status === "waiting").length;
      const ready = orders.filter(o => o.status === "ready").length;
      
      // Use reduce to calculate total revenue
      const revenue = orders.reduce((sum, order) => {
        const drinkInfo = menu.find(d => d.name === order.drink);
        const price = drinkInfo ? drinkInfo.price : 0;
        return sum + (price * order.quantity);
      }, 0);

      return { total, waiting, ready, revenue };
    }
  };
}

// TESTS FOR PART 5


const book = createOrderBook();
const first = book.addOrder("Amina", "latte", 2);
book.addOrder("Kofi", "espresso", 1);

console.log(book.addOrder("Lea", "tea", 1)); 
//  null (because "tea" is not on the menu)

console.log("Current Order:", first.id, first.status, first.placedAt instanceof Date); 
//  1 waiting true

console.log(book.markReady(1), book.markReady(99)); 
//  true false

console.log("Number of waiting orders:", book.getWaiting().length); 
//  1 (Only Kofi's espresso is still waiting)

console.log("Order Summary:", book.getSummary()); 
//  { total: 2, waiting: 1, ready: 1, revenue: 12 } 


console.log(book.orders); 
//  undefined



const stretch = createOrderBook();
stretch.addOrder("Amina", "mocha", 1);   // Takes 3 seconds
stretch.addOrder("Kofi", "espresso", 1); // Takes 1 second
stretch.addOrder("Lea", "latte", 1);     // Takes 2 seconds

console.log(stretch.getWaiting().length); 

setTimeout(function () { 
  console.log(stretch.getWaiting().length, stretch.getSummary()); 
}, 3500);

