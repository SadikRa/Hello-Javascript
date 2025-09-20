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
console.log(arrayMax);
