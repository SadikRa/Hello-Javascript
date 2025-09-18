// step 1
function sumOfNumbers() {}

const result = sumOfNumbers();
// console.log(result);

//step 2
function sumOfNumbers2(numbers) {
  //   console.log(numbers);
}

const result2 = sumOfNumbers2([1, 23, 3, 4, 5, 5, 6]);
// console.log(result2);

// step 3
function sumOfNumbers3(numbers) {
  for (number of numbers) {
    // console.log(number);
  }
}

// const result3 = sumOfNumbers3([1, 23, 3, 4, 5, 5, 6]);

//step 4
let sum = 0;

function sumOfNumbers4(numbers) {
  for (const number of numbers) {
    sum = sum + number;
    // console.log(sum);
  }
}
// const result4 = sumOfNumbers4([1, 23, 3, 4, 5, 5, 6]);

// step 5
function sumOfNumbers5(numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum = sum + number;
  }
  return sum;
}
const nums = [54, 62, 12, 6];
// const total = sumOfNumbers5(nums);
// console.log("Sum of Numbers is", total);

// advanced
function sumOfNumbersA(numbers) {
  let sum = 0;
  for (const number of numbers) {
    if (number % 2 == 0) {
      sum = sum + number;
    }
  }
  return sum;
}

const numss = [12, 23, 20];

// console.log(sumOfNumbersA(numss));


function inchToFeet(inch){
    const feet = inch / 12;
    return feet
}

// console.log(inchToFeet(68));