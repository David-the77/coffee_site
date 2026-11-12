// Copy of the menu from Part 2
const menu = [
  { name: "espresso", price: 3.0, prepSeconds: 1 },
  { name: "latte", price: 4.5, prepSeconds: 2 },
  { name: "mocha", price: 4.75, prepSeconds: 3 },
  { name: "cold brew", price: 4.75, prepSeconds: 2 },
];

// Task B: Make three orders as objects
const orders = [
  { id: 1, customer: "Amina", drink: "mocha", placedAt: new Date() },
  { id: 2, customer: "Kofi", drink: "espresso", placedAt: new Date() },
  { id: 3, customer: "Lea", drink: "latte", placedAt: new Date() }
];

// Task C: Progress ticker variable
let waiting = 3

// Task C: Progress ticker interval
const tickerId = setInterval(function () {
  if (waiting === 0) {
    console.log("All orders ready");
    clearInterval(tickerId); // Stop the ticker so the program ends
  } else {
    console.log(`Still waiting: ${waiting}`);
  }
}, 1000); // Runs every 1 second (1000 milliseconds)

// Task B: Loop through orders and set timeouts
orders.forEach(function (order) {
  // Find the drink details in the menu
  const drinkInfo = menu.find(function (d) {
    return d.name === order.drink;
  });
  
  // Convert prepSeconds to milliseconds for setTimeout
  const delayMs = drinkInfo.prepSeconds * 1000;

  setTimeout(function () {
    // Calculate how many seconds it actually waited
    const now = new Date();
    const waitTimeSeconds = Math.round((now.getTime() - order.placedAt.getTime()) / 1000);
    
    console.log(`Order #${order.id} for ${order.customer} is ready (${waitTimeSeconds} s)`);
    
    // Task C: Subtract 1 from waiting when an order becomes ready
    waiting--;
  }, delayMs);
});