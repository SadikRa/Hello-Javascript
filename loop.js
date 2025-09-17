/**  for (declare loop variable; loop condition ; change loop variable){
One or more lines of code that will be repeated
}
*/

for (let num = 0; num < 5; num++) {
  //   console.log(Number);
}

for (let i = 1; i < 10; i++) {
  // console.log(i);
}

for (let i = 50; i <= 100; i++) {
  // console.log(i);
}

let sum = 0;

for (let i = 50; i <= 100; i++) {
  sum = sum + i;
}

// console.log(sum);

for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    // console.log(i);
  }
}

for (let i = 0; i <= 10; i++) {
  if (i % 2 == 1) {
    // console.log(i);
  }
}

for (let i = 1; i < 20; i = i + 2) {
  // console.log(i);
}

for (let i = 2; i < 20; i = i + 2) {
  // console.log(i);
}

for (let i = 0; i < 30; i++) {
  if (i % 5 == 0) {
    // console.log(i);
  }
}

for (let i = 1; i <= 30; i++) {
  if (i % 3 == 0) {
    // console.log(i);
  }
}

for (let i = 1; i <= 30; i++) {
  if (i % 5 == 0 || i % 3 == 0) {
    // console.log(i);
  }
}

for (let i = 1; i <= 30; i++) {
  if (i % 5 == 0 && i % 3 == 0) {
    // console.log(i);
  }
}

for (let i = 20; i <= 50; i++) {
  if (i % 7 == 0) {
    // console.log(i);
  }
}

for (let i = 0; i < 15; i++) {
  // console.log(i);
  if (i >= 7) {
    break;
  }
}

for (let i = 0; i < 10; i++) {
  if (i == 6) {
    continue;
  }
  // console.log(i);
}

for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    continue;
  }
  // console.log(i);
}

for (let i = 0; i < 10; i++) {
  if (i % 2 == 1) {
    continue;
  }
  // console.log(i);
}

const phone = {
  brand: "apple",
  price: 80000,
  color: "solver",
  version: 20,
};

const users = [
  { id: 1, name: "Sadik", age: 22 },
  { id: 2, name: "Aisha", age: 25 },
  { id: 3, name: "Rahim", age: 28 },
];

const subject = {
  name: "biology",
  teacher: "rasheda",
  examDate: "30 dec",
  chapters: ["first", "second", "third"],
  nextExam: {
    name: "Final Exam",
    marks: 100,
  },
};

const person = {
  name: "sodor uddain",
  age: 25,
  profession: "developer",
  salary: 25000,
  married: true,
  "fav places": ["bandarban", "saintmartin", "kuakata"],
};

// console.log(person['fav places']);

// console.log(Object.keys(person));
// console.log(Object.values(person));

if (person.hasOwnProperty("name")) {
  // console.log('yah name asa');
} else {
  // console.log('nah nam ni');
}

// console.log(Object.entries(person));

const profile = {
  name: "Rahim",
  age: 28,
  city: "Dhaka",
};

for (const key in profile) {
  const value = profile[key];
  // console.log(key, value);
}

const perso1 = { name: "Alice", age: 25, country: "Bangladesh" };
delete perso1.age;
// console.log(perso1);

const adminUser = {
  username: "admin",
  email: "admin@example.com",
  role: "superadmin",
};

Object.freeze(adminUser);

// Attempt to modify the object
adminUser.role = "user";
adminUser.password = "123456";
delete adminUser.email;

// console.log(adminUser);

const user = {
  username: "johndoe",
  email: "john.doe@example.com",
  password: "oldpassword",
};

Object.seal(user);

// Attempt to modify the object
user.password = "newpassword"; // Allowed
user.age = 30; // adding new property is not allowed
delete user.email; // deleting property is not allowed

// console.log(user);
