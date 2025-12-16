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

/// TO DO https://www.youtube.com/watch?v=bAUMuuRH99o

const price = [12, 2, 3, 4, 5, 5, 6, 55, 33];
const sum3 = price.reduce((s1, s2) => {
  return s1 + s2;
}, 0);

// console.log(sum3);

price.map((value) => {
  // console.log(value);
});

const fil = price.filter((p) => {
  return p == 12;
});
// console.log(fil);

for (let i = 0; i < 10; i++) {
  // console.log(i);
}


// for of loop
for (key of price) {
  // console.log(key);
}

let sum4 = 0;

for (sum4; sum4 < 10; sum4++) {
  // console.log(sum4);
}

// let sum5 = 0;
// let n = prompt("give me a value n");
// n = Number.parseInt(n);

// for (let i = 0; i < n; i++) {
//   sum5 += (i + 1);
// }
// console.log("sum first" + n + "natural number" + sum5);

let companion = {
  AbuBkar: 1,
  Omar: 2,
  Utsman: 3,
  Ali: 4,
};


// for of loop
for (let value in companion) {
  // console.log(" status of " + value + " is " + companion[value]);
}

///promise  

let p = new Promise((resolve , reject) => {
  let a = 1 + 1 
  if(a== 2){
    resolve('success')
  }else{
    reject('failed')
  }
})

// console.log(p);

