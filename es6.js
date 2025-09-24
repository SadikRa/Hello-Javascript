const arrow = (a, b) => a + b;

const person = {
  name: "Ananta",
  greetRegular: function () {
    console.log("Hello, " + this.name);
  },
  greetArrow: () => {
    console.log("Hello, " + this.name);
  },
};

// person.greetRegular();
// person.greetArrow();

const [first, second, ...rest] = [10, 20, 30, 40, 50];
// console.log(first);
// console.log(second);
// console.log(rest);

const numbers = [3, 5, 2, 45, 5, 43, 90, 32, 15];
const arrayMax = Math.max(...numbers);
// console.log(arrayMax);

function doubleAll(numbers) {
  const doubled = [];
  for (const num of numbers) {
    const value = num * 2;
    doubled.push(value);
  }
  return doubled;
}

const numbers1 = [3, 5, 2, 45, 5, 43, 90, 32, 15];
// console.log(doubleAll(numbers1));

const numbers2 = [3, 5, 2, 45, 5, 43, 90, 32, 15];

const result = numbers2.map((num) => num * 2);

// console.log(result);

const friends = ["Tom", "Jhon", "Micheal", "Oliver"];
const lengths = friends.map((frnd) => frnd.length);
const firstLetters = friends.map((friend) => friend[0]);
// console.log(lengths);
// console.log(firstLetters);

// Output: [3, 4, 7, 6][("T", "J", "M", "O")];

const friends1 = ["tom", "john", "micheal", "oliver", "tim", "joshna"];
const oldFriends = friends1.filter((friend) => friend.length > 4);
// console.log(oldFriends);

const players = [75, 65, 67, 60, 71, 55, 59];
const selected = players.find((player) => player > 70);
// console.log(selected);

const scores = [30, 45, 55, 80, 90];
const hasPassed = scores.some((score) => score >= 50);
// console.log(hasPassed);

const scores1 = [60, 70, 55, 80, 90];
const allPassed = scores1.every((score) => score >= 50);
// console.log(allPassed);

const nested = [1, 2, [3, 4, [5, 6]]];
const flattened = nested.flat(2);
// console.log(flattened);

const numbers4 = [4, 5, 7, 1, 2, 66];
let sum = 0;
for (const num of numbers4) {
  sum = sum + num;
}
// console.log(sum);

// reduce
//   numbers.reduce((accumulator, currentValue) => doSomeWork, initialValue)

const numbers6 = [32, 34, 73, 13, 22, 5];
const total = numbers6.reduce((p, c) => p + c, 0);
// console.log(total);

const result2 = numbers6.reduce((s, n) => s + n, 0);
// console.log(result2);

const friendsS = ["abu bakar", "omar", "utman", "ali"];
friendsS.sort();
// console.log(friendsS);

const numbersss = [30, 5, 100, 12];
numbersss.sort((a, b) => a - b);
// console.log(numbersss);

const friendse = [
  { name: "Zara", age: 25 },
  { name: "Bob", age: 20 },
  { name: "Anna", age: 30 },
];

friendse.sort((a, b) => a.age - b.age);
// console.log(friendse);

const names = ["Alice", "Bob", "Charlie", "David"];
names.reverse();
// console.log(names);

const slices = names.slice(2, 3);
// console.log(slices);

const pizzaSlices = ["Bread", "Cheese", "Veggie", "BBQ", "Meet"];
// const selectedSlices = pizzaSlices.slice(1, 4);

// console.log(selectedSlices);
// console.log(pizzaSlices);

const selectedSlices = pizzaSlices.slice(2);
// console.log(selectedSlices);

const movies = ["Jaws", "Rocky", "Alien", "Avatar", "Coco", "Up", "It"];
// const removed = movies.splice(2, 3);
// console.log(removed);
// console.log(movies);

const numbersa = [54, 98, 78, 21, 65];
numbers[1] = 11;
// console.log(numbersa);

// console.log(movies.length);

const subject = "Chemistry";
const book = "chemistry";

if (subject === book) {
  console.log("i am reading book");
} else {
  console.log("hudai prista ultai");
}

const namee = "noMAD d MAD";
const lower = namee.toLowerCase();
// console.log(lower);

const namef = "noman d MAN";
const upper = namef.toUpperCase();
//   console.log(upper);

const drink = " water";
const liquid = "water ";

if (drink === liquid) {
  // console.log("pani hani dami jani");
} else {
  // console.log("somudre pani dekhte valo khaite kalo");
}

if (drink.trim() === liquid.trim()) {
  // console.log("pani hani dami jani");
} else {
  // console.log("somudre pani dekhte valo khaite kalo");
}

const sentence = "i am a good and hardworking person";
// console.log(sentence.split(" "));
