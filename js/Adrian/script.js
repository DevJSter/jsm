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

const person = {
    name: 'Adrian',
    walk() {
        console.log(this);
    }
};

class Person {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log("walk");
    }
}
//Asynchronous JavaScript

// Intervals and timers
//setInterval()
//clearInterval()
//setTimeout()
//clearTimeout()

const myInterval = setInterval(() => {
    console.log("Hello World");
}, 1000);


clearInterval(myInterval);

//setTimeout()
const myTimeout = setTimeout(() => {
    console.log("Hello World");
}, 6000);

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
