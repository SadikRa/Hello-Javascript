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

