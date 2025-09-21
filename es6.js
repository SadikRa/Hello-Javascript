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
