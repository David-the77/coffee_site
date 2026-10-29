// Functions 

function isOpen(hour) {
    return hour >= 8 && hour < 16;
}

function getDrinkPrice(drink) {
    if (drink === "espresso") return 3;
  if (drink === "latte") return 4.5;
  if (drink === "mocha") return 4.75;
  if (drink === "cold brew") return 4.75;
  return null;
}

function getSizeChange(size) {
  if (size === "small") return -0.5;
  if (size === "medium") return 0;
  if (size === "large") return 0.75;
  return 0;
}

function calculateTotal(drink, size, quantity, isMember) {
  const basePrice = getDrinkPrice(drink);
  if (basePrice === null) return null;
  if (!isValidQuantity(quantity)) return null;



  let total = (basePrice + getSizeChange(size)) * quantity;


  if (quantity >= 3) {
    total = total * 0.10;
  }

  if (isMember) {
    total = total * 0.15;
  }

  total = total * 1.08; //8% tax

  return total ;

}

function formatPrice(amount) {
    return "$" + amount.toFixed(2);
}

//tests
console.log(isOpen(8), isOpen(15), isOpen(16), isOpen(7));

console.log(getDrinkPrice("latte"), getDrinkPrice("tea"));
// 4.5 null

console.log(getSizeChange("small"), getSizeChange("medium"), getSizeChange("large"));
// -0.5 0 0.75


//Strings

function formatName(name) {
    return name.charAt(0).toUpperCase()+ name.slice(1).toLowerCase;
}