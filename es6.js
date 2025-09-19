const arrow = (a, b) => a + b;


const person = {
name: "Ananta",
greetRegular: function () {
console.log("Hello, " + this.name);
},
greetArrow: () => {
console.log("Hello, " + this.name);
}
};

// person.greetRegular();
// person.greetArrow();

