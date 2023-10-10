// const shubham="Hello ji Kaise ho saare";
// const shubham1="\tShubham here";
// const shubham2=" from Thane";
// console.log(shubham);
// console.log(shubham.concat(shubham1,shubham2));
// cost=shubham.toUpperCase;

// let VariableName = "Welcome";

// console.log("Hello",VariableName);
// console.log("Test");

// String methods :: Defining strings can be done by three ways in JS
/* First is using  singleQuotes eg ''  
const singleQuotes = 'Single Quotes only';
console.log(singleQuotes); //The output will be Single Quotes only

2nd way is using  doubleequotesQuotes eg  ""
const doubleQuotes = "Double Quotes only";
console.log(doubleQuotes); //The output will be Double Quotes Only

Third is using Backticks eg ``  

const backticks = `Back Ticks`;
console.log(backticks);  //The output will be Back Ticks


Backticks is most use because we can add javascript i.e we can embedded method i.e embed any else variable inside of it(Reusability of any variable) even when we are declaring any Variable for eg

For eg:
const var1 = `Shubham`;

const var2 = `Hello ${var1}`;

console.log(var2);  //The output will be Hello Shubham

more uses like

const var2 = `2+2`;

console.log(var2); //output = 2+2
but 

const var2 = `${2+2}`;

console.log(var2); //output = 4

*/

/*
Booleans
true = yes ,correct ,1
false = no ,incorrect ,0

for eg
*/
// const isCool = false;

// if(isCool){
//  console.log("Hello Dude you're cool");
// }else{
//  console.log("Try Later");
// }

//Null

// const age = null;
// console.log(age);
// It is an object basically bug in whole javascript language but still there are larger codebases working on the value of null itself. It's so infuriating

//undefined

// let x;
// console.log(x);

//Objects
// const name = 'Shubham';
// const age = 25;

// const person = {
//  name: 'Shubham',
//  age : 25,
// };

// console.log(person.name); //Shubham

// const arr = [1,2,3,4];
// console.log(arr);

// const date = new Date();

// console.log(date); //2023-10-10T13:23:13.649Z


// Statically Typed
// Dynamically Typed
// let message = 'Hello'; // JS is dynamically typed we can change them whenever we want it too!!
// message = true; We've defined it first it is a string but then assigned a new value to it that is Boolean


// Comparison Operators Return True or False <> ==  ;

// Strict Equality 
// a=10;
// b=10;
// console.log(a === b);

// console.log( 5 == "5" ) the ooutput is false because the '===' Compares values and data types 
// Return true only if both are true
// Loose Equality

// console.log( 5 == "5" ) // the output is true which is strange because the datatypes are different that is why we use strict equality


//Logical Operators

//AND &&  All OPERANDS ARE TRUE => RETURNS TRUE
//OR || => AT LEAST ONE OPERAND IS TRUE => RETURNS TRUE
//NOT ! 

// Functions:
/* Functions in JavaScript allow you to define reusable blocks of code. They can take parameters and return values.
For example: */

// const greet = function(name) {
//  return `Hello, ${name}!`;
// };

// console.log(greet("Shubham")); // Output: Hello, Shubham!

// // Conditional Statements:
// /* Conditional statements help in making decisions in your code. 
// For example: */

// let age = 20;

// if (age >= 18) {
//  console.log("You are an adult.");
// } else {
//  console.log("You are a minor.");
// }

// // Loops:
// /* Loops are used for repeated execution of code blocks.
// For example: */

// for (let i = 1; i <= 5; i++) {
//  console.log(`Iteration ${i}`);
// }

// // Arrays and Array Methods:
// /* Arrays allow you to store multiple values. JavaScript provides various methods for array manipulation.
// For example: */

// let numbers = [1, 2, 3, 4, 5];

// console.log(numbers.length); // Output: 5
// console.log(numbers.push(6)); // Output: 6 (new length of the array)
// console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]

// // Error Handling:
// /* JavaScript supports error handling through try, catch, and finally blocks.
// For example: */

// try {
//  // Code that might throw an error
//  throw new Error("This is an error message.");
// } catch (error) {
//  console.error(error.message); // Output: This is an error message.
// } finally {
//  console.log("This block always executes.");
// }

// // Object-Oriented Programming (OOP):
// /* JavaScript supports object-oriented programming concepts like classes and objects.
// For example: */

// class Person {
//  constructor(name, age) {
//      this.name = name;
//      this.age = age;
//  }

//  greet() {
//      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//  }
// }

// let person = new Person("Shubham", 25);
// person.greet(); // Output: Hello, my name is Shubham and I am 25 years old.


// The while loop

// while (condition) {
//  //Statements
// }

for (let i=0 ; i<10000 ; i++) {
 console.log(i)
}