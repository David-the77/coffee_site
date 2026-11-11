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
