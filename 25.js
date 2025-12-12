const numbers = [12, 23, 4, 4, 55, 56, 40, 23, 32, 32, 3, 2, 3];

const filters = numbers.filter((numbers) => numbers < 40);

// console.log(filters);

const finds = numbers.find((numbers) => numbers == 40);

// console.log(finds);

let sum = 0;

for (let n of numbers) {
  sum += n;
}
// console.log(sum);

const sum1 = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
// console.log(sum1);

const sum2 = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

// console.log(sum2);