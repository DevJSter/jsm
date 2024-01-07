// The 'new'  keyword 
// 1. It creates a new empty object {}


// const perosn  = {};
// const oerson1 = new Object();

// const Date = new Date();
// console.log(Date); 


// the this  kewyword 
// 1. Gives methods access to their object
// 2. Execute the same code for multiple objects

// const perosn  = {
//     name: 'Shubham',
//     walk() {
//         console.log(this);
//     }

// }; 

// perosn.walk();

// const walk = perosn.walk.bind(perosn);
// walk();

// const square = function(number) {
//     return number * number;
// }

// const square = number => number * number;
// console.log(square(5));

// const jobs = [
//     { id: 1, isActive: true },
//     { id: 2, isActive: true },
//     { id: 3, isActive: false },
// ];

//classes

// const person = {
//     name: 'Shubham',
//     walk() {
//         console.log(this);
//     }
// };

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     walk() {
//         console.log("walk");
//     }
// }
//Asynchronous JavaScript

// Intervals and timers
//setInterval()
//clearInterval()
//setTimeout()
//clearTimeout()

// const myInterval = setInterval(() => {
//     console.log("Hello World");
// }, 1000);


// clearInterval(myInterval);

//setTimeout()
// const myTimeout = setTimeout(() => {
//     console.log("Hello World");
// }, 6000);

// clearTimeout(myTimeout);

//Promises

// What is Syncronous code?
// What is Asyncronous code?

// Syncronous code is code that is executed line by line in the order that it is written.
// Asyncronous code is code that is executed after a task that runs in the "background" finishes.

// Syncronous code example
// console.log("Hello");
// console.log("World");

// Asyncronous code example
// setTimeout(() => {
//     console.log("Hello");
// }, 1000);
// console.log("World");

// What is a Promise?
// A promise is an object that represents the eventual completion or failure of an asynchronous operation.


// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Hello");
//     }, 1000);


//Callbacks

// What is a callback?

// A callback is a function that is passed as an argument to another function and is executed after some operation has been completed.

//Data fetching with callbacks using API

// const fetUser = (username, callback) => {
//     setTimeout(() => {
//         console.log("Now we have the data!");
//         callback({ user: username });
//     }, 3000);
// }

// const getRepositories = (username, callback) => {
//     setTimeout(() => {
//         console.log("Calling GitHub API...");
//         callback(["repo1", "repo2", "repo3"]);
//     }, 2000);
// }

// const getCommits = (repo, callback) => {
//     setTimeout(() => {
//         console.log("Calling GitHub API...");
//         callback(["commit"]);
//     }, 2000);
// }

// callback hell

// fetUser("Shubham", (user) => {
//     console.log(user);
//     getRepositories(user.user, (repos) => {
//         console.log(repos);
//         getCommits(repos[0], (commits) => {
//             console.log(commits);
//         });
//     });
// });

// why is callback hell bad?
// 1. Hard to read
// 2. Hard to maintain
// 3. Hard to debug
// 4. Hard to scale
// for eg if we want to add another function to the chain we have to add another callback to the chain

//Promises
//They are objects that either return the result of an asynchronous operation or the failure of the operation.
//They have 3 states: pending, resolved, rejected
//They are chainable
//They are consumable

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello");
    }, 2000);
});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err.message);
    });


//Async and Await
//Async and Await are syntactic sugar for promises
//They make asynchronous code look like synchronous code
//They make asynchronous code easier to read and maintain
//They are consumable

const fetchNum =  async () => {
    return 25;
}

const consoleNum = async () => {
    const num = await fetchNum();
    console.log(num);
}

consoleNum();
// why this is better than promises?
// 1. Easier to read
// 2. Easier to maintain
// 3. Easier to debug
// 4. Easier to scale
// 5. Easier to write

// Modern JavaScript EcmaScript 6 or ES6
// 1. let and const
// 2. Arrow functions
// 3. Template literals
// 4. Enhanced object literals
// 5. Default parameters
// 6. Rest and spread operators
// 7. Destructuring
// 8. Classes
// 9. Modules
// 10. Promises
// 11. Async and Await

// let and const
// let and const are block scoped
// var is function scoped
// const cannot be reassigned
// let can be reassigned
// var can be reassigned
// const and let are not hoisted
// var is hoisted

// Arrow functions
// const square = function(number) {
//     return number * number;
// }

// const square = (number) => {
//     return number * number;
// }

// const square = number => number * number;

// const jobs = [
//     { id: 1, isActive: true },
//     { id: 2, isActive: true },
//     { id: 3, isActive: false },
// ];

// const activeJobs = jobs.filter(function(job) { return job.isActive; });
// const activeJobs = jobs.filter(job => job.isActive);

// Template literals
// const name = "Shubham";
// const message = "Hi " + name + ",\n";

// const another = `Hi ${name} ${2 + 3},

// Thank you for joining my mailing list.

// Regards,
// Shubham`;

// Enhanced object literals
// const name = "Shubham";
// const walk = function() {
//     console.log("walk");
// }

// const person = {
//     name,
//     walk,
//     talk() {
//         console.log("talk");
//     }
// };

// person.talk();

// Default parameters
// const interestRate = 0.3;
// const interestRate = 0;
// const interestRate = null;
// const interestRate = false;
// const interestRate = undefined;
// const interestRate = NaN;
// const interestRate = "";
// const interestRate = "0";
// const interestRate = " ";
// const interestRate = "Hello";
// const interestRate = [];
// const interestRate = {};
// const interestRate = function() {};

// const calculatePayment = (amount, interestRate = 0.1, years = 1) => {
//     return amount * interestRate * years;
// }

// console.log(calculatePayment(100000));

// Rest and spread operators
// const numbers = [1, 2, 3, 4, 5];

// const max = Math.max(numbers);
// const max = Math.max(...numbers);

// const numbers1 = [1, 2, 3];
// const numbers2 = [4, 5, 6];

// const combined = numbers1.concat(numbers2);
// const combined = [...numbers1, ...numbers2];

// const clone = [...numbers];

// console.log(combined);
// console.log(clone);

// const person = { name: "Shubham" };
// const job = { job: "Developer" };

// const combined = { ...person, ...job, location: "India" };

// console.log(combined);

// Destructuring
// const person = {
//     name: "Shubham",
//     age: 21,
//     address: {
//         country: "India",
//         city: "Mumbai"
//     }
// };

// const { name, age } = person;
// const { country, city } = person.address;q

// console.log(name, age);
// console.log(country, city);

// Classes
// const person = {
//     name: "Shubham",
//     walk() {
//         console.log("walk");
//     }
// };

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     walk() {
//         console.log("walk");
//     }
// }

// const person = new Person("Shubham");

// Modules
// import { Person } from "./person.js";

// const person = new Person("Shubham");
// person.walk();

// Promises
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Hello");
//     }, 2000);
// });

// promise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err.message);
//     });


