// Task A: a countdown to opening

let count = 3; // Counter lives outside the function

const countdownId = setInterval(function () {
  if (count > 0) {
    console.log(`Opening in ${count}`);
    count--; // Decrease the counter
  } else {
    console.log("We are open!");
    clearInterval(countdownId); // Stop the timer so the program ends
  }
}, 1000); // 1000 milliseconds = 1 second


