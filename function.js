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
  //   console.log(arguments);
  return a + b;
}
const result = addNumbers(5, 8, 9, 6);
// console.log(result);

function addAll(a, b, c, d, e, f) {
  return a + b + c + d + e + f;
}

const result1 = addAll(1, 2, 3, 4, 5, 6);
// console.log(result1);

function isGreaterThanTen(number) {
  if (number > 10) {
    return true;
  } else {
    return false;
  }
}

// Example use:
// console.log(isGreaterThanTen(5));
// console.log(isGreaterThanTen(15));

function thirtin(number) {
  if (number % 13 == 0) {
    return true;
  } else {
    return false;
  }
}

// console.log(thirtin(26));
// console.log(thirtin(27));

function thirtin(number) {
  return number % 13 === 0; // Simplified version, same result
}

// console.log(thirtin(26)); // Output: true (correct)
// console.log(thirtin(27)); // Output: false (correct)

function evenSizedString(str) {
  const size = str.length;

  return size % 2 === 0;
}
// console.log(evenSizedString("Dhaka"));


function evenSizedString(str) {
const size = str.length;

if (size % 2 === 0) {
console.log('Even Size');
} else {
console.log('Odd Size');
}
}
// evenSizedString('Dhaka');


