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
console.log(names); // ["espresso", "latte", "mocha", "cold brew"]