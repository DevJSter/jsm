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
//     name: 'Adrian',
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
//     name: 'Adrian',
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

// fetUser("Adrian", (user) => {
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

