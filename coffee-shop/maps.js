const orders = [
  { customer: "Amina", drink: "latte", quantity: 2 },
  { customer: "Kofi", drink: "espresso", quantity: 1 },
  { customer: "Lea", drink: "mocha", quantity: 1 },
  { customer: "Amina", drink: "mocha", quantity: 1 },
  { customer: "Zed", drink: "latte", quantity: 3 },
  { customer: "Kofi", drink: "latte", quantity: 1 },
  { customer: "Lea", drink: "cold brew", quantity: 2 },
];
 
const prices = new Map([
  ["espresso", 3.0],
  ["latte", 4.5],
  ["mocha", 4.75],
  ["cold brew", 4.75],
]);


console.log(prices.get("latte")), prices.has("tea"), prices.size ;
