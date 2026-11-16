// it will print both inside and outside because the function was called 
// and the print was also done
let message = "outside";
function show() {
  let message = "inside";
  console.log(message);
}
show();
console.log(message);



function makeCounter() {
  let count = 0;
  return function () {
    count = count + 1;
    return count;
  };
}
const c1 = makeCounter();
const c2 = makeCounter();
console.log(c1(), c1(), c2());
// it prints 1, 2, 1 because c1 and c2 are different instances of the counter function

// Part 2: `let` is block-scoped, while `var` is not.

if (true) {
  let a = 1;
  var b = 2;
}

console.log(b); // 2; `a` is only accessible inside the block.


// piece 4
for (var i = 1; i <= 3; i++) {
  setTimeout(function () { console.log("var:", i); }, 100);
}
for (let j = 1; j <= 3; j++) {
  setTimeout(function () { console.log("let:", j); }, 200);
}
