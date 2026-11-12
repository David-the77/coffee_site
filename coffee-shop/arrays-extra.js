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