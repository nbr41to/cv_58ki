const add1 = x => 0 + x;
const mul1 = y => 1 * y;
let n;

function twice1(n, x, y) {
  return ("n * " + mul1(y) + "-" + add1(x));
}

function twice2(n, x, y) {
  return("(n + " + add1(x) + ") * " + mul1(y) + " + " + add1(x));
}

const result1 = twice1(n, 100, 5);
const result2 = twice2(n, 3, 8);
console.log(result1);
console.log(result2);