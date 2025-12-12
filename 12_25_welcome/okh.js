let name = "abu bakr";
var name1 = "omar";
const name2 = "utsman";
const name3 = "ali";

const array = [10, "sadik", undefined];

// console.log(array);

// const age = 23;

// if (age == "23") {
//   console.log("you are now grown you have to do something");
// } else {
//   console.log("okh do what ever you wish");
// }

// types
// string Boolean
// Number undefined
// null NaN

function test() {
  console.log(x);
  var x = "test";
  console.log(test);
}

// test();

// operator

const x = 6;
const y = "3";

// console.log(x+ y);

// if(x === y){
//     const sum = x + y
//     console.log(sum);
// }else{
//     console.log('nah you can not do that');
// }
const int = parseInt(y);
const float = parseFloat(y);
const string = String(x);

//  console.log(typeof(string));

// conditional

const cond = true ? "sadik" : "nah sadik";

const arr2 = new Array(5);

const list = ["quran", "hadith", "fiqh", "arabic grammar"];
list.push("mustalah hadith");
list.pop();
list.shift("quran");
list.unshift();

// console.log(list.indexOf('hadith'));

const slice = list.slice(1, 3);
const splice = list.splice(0, 0);

const [a, z, ...b] = [1, 2, 3, 4, 5, 6];

// do{
//     console.log('run');
//     break
// }while(true){

// }

// while(true){
//     console.log('object');
// }

for (let i = 0; i < 10; i++) {
  // console.log(i);
  return;
}

for (let value of list) {
  // console.log(value);
}

const objects = { name: "Quran", explanation: "Hadith" };
objects.name = "QURAN";

for (let key in objects) {
  // console.log(key);
}

const myMap = new Map();

const numberMap = new Map([1, 2, 3, 4, 5]);

myMap.set(4, "four");
myMap.delete(4);
myMap.get("four");
myMap.has(1);

for (const [key, value] of myMap) {
  // console.log(value);
}

const newFun = (num, num1) => {
  // console.log(num + num1);
};

const mapArr = [12, 3, 4, 5, 6, 6];
const mapMulti = mapArr.map((num) => num * 2);

// #TO DO  reduce, promise

const numbers = [12, 23, 4, 4, 55, 56, 40, 23, 32, 32, 3, 2, 3];

const filters = numbers.filter((numbers) => numbers < 40);

console.log(filters);

const numbers1 = [10, 20, 30, 40, 50];
const allGreater = numbers1.filter((number) => number > 25);
console.log(allGreater);
