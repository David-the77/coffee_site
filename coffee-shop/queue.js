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

const cheapDrinks = menu.filter(drink => drink.price < 4.75).map(drink => drink.name);
console.log(cheapDrinks);// cheapp drinks under 4.75

//Use find to get the mocha, and print its prepSeconds
const mocha = menu.find(drink => drink.name === "mocha");
console.log(mocha.prepSeconds);

const sortedMenu = [...menu].sort((a, b) => b.price - a.price);
console.log(sortedMenu.map(d => d.name)); 
// arrange in decending order of price and print the names of the drinks

// Prove the original menu did not change
console.log(menu.map(d => d.name)); 

const totalPrice = menu.reduce((sum, drink) => sum + drink.price, 0);
console.log(`The total price is $${totalPrice.toFixed(2)}`); 


const fastDrinksCount = menu.filter(drink => drink.prepSeconds <= 2).length;
console.log(`Number of fast drinks (2 seconds or less): ${fastDrinksCount}`);



// PART 5: THE ORDER BOOK


function createOrderBook() {
  // PRIVATE VARIABLES: These are locked inside the function's scope.
  // Nothing outside this function can access or modify them directly.
  let orders = [];
  let nextId = 1;

  return {
    // 1. addOrder
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

    // 3. getWaiting
    getWaiting: function() {
      return orders.filter(order => order.status === "waiting");
    },

    // 4. getSummary
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

console.log(first.id, first.status, first.placedAt instanceof Date); 
//  1 waiting true

console.log(book.markReady(1), book.markReady(99)); 
//  true false

console.log(book.getWaiting().length); 
//  1 (Only Kofi's espresso is still waiting)

console.log(book.getSummary()); 
//  { total: 2, waiting: 1, ready: 1, revenue: 12 } 
// (latte 4.50 * 2 = 9.00 + espresso 3.00 * 1 = 3.00 -> Total revenue: 12)

console.log(book.orders); 
//  undefined

