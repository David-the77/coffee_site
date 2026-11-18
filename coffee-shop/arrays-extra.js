// Copy of the menu 
const menu = [
  { name: "espresso", price: 3.0, prepSeconds: 1 },
  { name: "latte", price: 4.5, prepSeconds: 2 },
  { name: "mocha", price: 4.75, prepSeconds: 3 },
  { name: "cold brew", price: 4.75, prepSeconds: 2 },
];

// Add a new drink with push
menu.push({ name: "matcha", price: 5.25, prepSeconds: 2 });

//  price of the latte to 4.75
menu[1].price = 4.75;

// Extract names to check if it includes "matcha"
const namesList = menu.map(drink => drink.name);

// Print whether the list includes "matcha", the length of the menu, and the price of menu[1]
console.log(namesList.includes("matcha"), menu.length, menu[1].price);

