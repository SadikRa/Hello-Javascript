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
console.log(pattern.test(sentence));

// set

const mySet = new Set([1, 2, 3, 4, 5]);
// console.log(mySet);

const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = new Set(numbers);
// console.log(uniqueNumbers);

const numberSet = [2, 2, 3, 3, 4, 4, 5, 6];
const uniqueSet = new Set(numberSet);
console.log(uniqueSet);
