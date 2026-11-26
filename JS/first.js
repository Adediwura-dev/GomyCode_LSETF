let greeting = "hello";
greeting = greeting.toUpperCase();
console.log(greeting);

let firstName = "Ibraheem";
let newGreeting = "Hello";
let template = `${newGreeting}, my name is ${firstName} `;
console.log(template);

const rawInput = "  buShraGbadegesin@gmail.com  ";
const email = rawInput.trim().toLowerCase();

console.log(firstName.length);
console.log(email);

// Boolean
let isLoggedIn = true;
let isAdmin = false;

//Object is the only non-primitive data type in Javascript
//Arrays, functions, dates, maps, sets - are all specialized kinds of objects

//An object is a collection of key-value pairs(properties)

const user = {
  name: "Bushra",
  age: 28,
  isAdmin: false,
  hobbies: ["writing code", "collecting money from her siblings"],
  address: {
    city: "Lagos",
    zip: "1001",
  },
};

console.log(user["age"]);

//Deleting, updating, adding
user.email = "bgbadege@gmail.com";
user.age = 26;
delete user.isAdmin;

console.log(user);

// ^ Common Object methods
const person = { name: "Ibraheem", age: "26" };
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

// * Concept of Entries
const newUser = {
  name: "Fatiah",
  age: 25,
  role: "admin",
};

const entries = Object.entries(newUser);
console.log(entries);

for (const [key, value] of Object.entries(user)) {
  console.log(`${key} : ${value}`);
}
