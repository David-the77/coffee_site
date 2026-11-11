// Functions 

function isOpen(hour) {
    return hour >= 8 && hour < 16;
}

function getDrinkPrice(drink) {
      switch (drink) {
         case "espresso":
            return 3.00;
         case "latte":
            return 4.50;
         case "mocha":
            return 4.75;
         case "cold brew":
            return 4.75;
         default:
            console.log("Not on the menu.");
            return 0;
      }
}

function isValidQuantity(quantity) {
  return Number.isInteger(quantity) && quantity > 0;
}

function getSizeChange(size) {
  if (size === "small") return -0.5;
  if (size === "medium") return 0;
  if (size === "large") return 0.75;
  return 0;
}

function calculateTotal(drink, size, quantity, isMember) {
  const basePrice = getDrinkPrice(drink);
  if (basePrice === 0) return 0;
  if (!isValidQuantity(quantity)) return 0;



  let total = (basePrice + getSizeChange(size)) * quantity;

  if (quantity >= 3) {
    total = total * 0.90; //10% discount for 3 or more drinks
  }

  if (isMember) {
    total = total * 0.95; // 5% discount for members
  }

  total = total * 1.08; //8% tax

  return total ;

}

function formatPrice(amount) {
    return "$" + amount.toFixed(2);
}





//Strings

function formatName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
} //to make the first letter of each name capital


function makeOrderCode(name, drink, quantity) {
  return name.slice(0, 3).toUpperCase() + "-" + drink.slice(0, 3).toUpperCase() + "-" + quantity;
}// to create a unique name with the first 3 letters of the name and drink and the quantity of drinks ordered

function receiptLine(label, amount) {
  return label.padEnd(16) + formatPrice(amount).padStart(8);
}// pad the rigjt side so that it is 16 characters long and pad the left side of the price so that it is 8 characters long


function printReceipt(name, drink, size, quantity, isMember) {
  // Calculate subtotal dynamically so it's always correct for any order
  let pricePerDrink = getDrinkPrice(drink) + getSizeChange(size);
  let subtotal = pricePerDrink * quantity;
  let total = calculateTotal(drink, size, quantity, isMember);

  console.log("EMBER & OAK");
  console.log("");
  console.log("Customer: " + formatName(name));
  console.log("Order code: " + makeOrderCode(name, drink, quantity));
  console.log(receiptLine("Subtotal:", subtotal));
  console.log(receiptLine("Total:", total));
  console.log("=".repeat(24));
}

// Print the receipt for Amina
printReceipt("amina", "latte", "large", 2, true);


//part 3
//  Opening hours for the whole day
console.log("== Opening hours");
for (let hour = 0; hour <= 23; hour++) {
  let timeStr = String(hour).padStart(2, "0") + ":00";
  let status = isOpen(hour) ? "Open" : "Closed";
  console.log(timeStr + "  " + status);
}



//Sales for the day
console.log("== Sales for the day");
let totalSales = 0;
for (let qty = 1; qty <= 5; qty++) {
  totalSales += calculateTotal("mocha", "medium", qty, false);
}
console.log("Sales for 5 orders: " + formatPrice(totalSales));

let openHoursCount = 0;
for (let hour = 0; hour <= 23; hour++) {
  if (isOpen(hour)) {
    openHoursCount++;
  }
}
console.log("We are open for " + openHoursCount + " hours a day.");

// Task B: A price table for 1 to 6 drinks
console.log("== Price table");
for (let qty = 1; qty <= 6; qty++) {
  let label = (qty + " x large latte").padEnd(18);
  let total = calculateTotal("latte", "large", qty, false);
  console.log(label + formatPrice(total).padStart(8));
}

// Number check
console.log("== Number check");
console.log(formatPrice(calculateTotal("latte", "large", 2, false))); // null



console.log( formatPrice(calculateTotal("espresso", "large", 3, true))); // null;




function countdownToClose(hour) {
  if (!isOpen(hour)) {
    console.log("We are closed.");
  } else {
    let hoursLeft = 16 - hour;
    for (let i = hoursLeft; i >= 1; i--) {
      let word = i === 1 ? "hour" : "hours";
      console.log(i + " " + word + " until we close");
    }
  }
}

console.log("== Countdown to close");
countdownToClose(new Date().getHours());