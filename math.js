const min = Math.min(45, 21, 65, 99, 126, 5, -99);
// console.log(min);

const max = Math.max(45, 21, 65, 99, 126, 5, -99);
// console.log(max);

// console.log("Value of PI is:", Math.PI);

// console.log(Math.abs(-7));
// console.log(Math.abs(7));

// console.log(Math.floor(4.7));
// console.log(Math.floor(4.2));

//   console.log(Math.ceil(4.7))
//   console.log(Math.ceil(4.2))

// console.log(Math.random());
// console.log(Math.random());

const specificDate = new Date("2032-05-21");
// console.log(specificDate);

const date1 = new Date("2002-06-21");
const date2 = new Date("2025-09-25");

const diffInMiliSeconds = date2 - date1;
const diffInDays = diffInMiliSeconds / (1000 * 60 * 60 * 24);
// console.log(diffInDays);

const sentence = "i have a apple";

const pattern1 = /apple/;
const pattern = new RegExp("apple");
// console.log(pattern.test(sentence));

// set

// const mySet = new Set([1, 2, 3, 4, 5]);
// console.log(mySet);

const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = new Set(numbers);
// console.log(uniqueNumbers);

const numberSet = [2, 2, 3, 3, 4, 4, 5, 6];
const uniqueSet = new Set(numberSet);
// console.log(uniqueSet);

const numbers2 = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [...new Set(numbers2)];
// console.log(uniqueArray);

const mySet = new Set();
mySet.add(10);
mySet.add(20);
mySet.add(10);
mySet.add(30);
// console.log(mySet);

// console.log(mySet.has(20));

mySet.delete(10);
// console.log(mySet);

function multiply(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Please provide a number";
  }
  const mult = num1 * num2;
  return mult;
}

const result = multiply(5, 7);
// console.log(result);

function fullName(first, second) {
  if (typeof first !== "string") {
    return "First name should be a String";
  } else if (typeof second !== "string") {
    return "Second name should be a String";
  }
  const full = first + " " + second;
  return full;
}

const full = fullName("Rahan", 5);
//   console.log(full);

//   for (Let i = 0; i < 5; i++){
//    console.log(i)
//   }

// const num = 1;
// num.toFixed(101);


// yah you lost again