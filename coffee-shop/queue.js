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