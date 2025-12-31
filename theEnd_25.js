/// okh let start ;
const numbers = [12, 23, 4, 4, 55, 56, 40, 23, 32, 32, 3, 2, 3];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
// console.log(sum);

const promise = new Promise((resolve, reject) => {
  let i = 1 + 1;
  if (i == 2) {
    resolve("success");
  } else {
    reject("failed");
  }
});

// console.log(promise);

for (let i = 0; i < 10; i++) {
  //   console.log(i);
}

function hello() {
  //   console.log(hello);
}

// console.log("1");
// setTimeout(() => {
//   console.log("object");
// }, 4000);
// console.log("2");

