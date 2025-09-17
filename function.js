function first() {
  console.log(2 + 2);
}

// first()

function sum(sum1, sum2) {
  console.log(sum1 + sum2);
}

// sum(2, 3);

function sayHello(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
// sayHello(); // Output: "Hello, Guest!"
// sayHello("Bob"); // Output: "Hello, Bob!"

function doubleIt(number) {
  const doubled = number * 2;
  console.log(doubled);
}

// doubleIt(12)

function addNumbers(a, b) {
  console.log(arguments);
  return a + b;
}
const result = addNumbers(5, 8, 9, 6);
// console.log(result);

function addAll(a, b, c, d, e, f) {
  return a + b + c + d + e + f;
}

const result1 = addAll(1, 2, 3, 4, 5, 6);
console.log(result1);
