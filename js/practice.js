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

Third is using Backticks eg ``  (Backticks are most used in JS)
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

// for (let i=0 ; i<10000 ; i++) {
//  console.log(i)
// }

// Functions excutable reusable nlocks of code
// Three types of funstions are there

// First is function name (params){};  this keyword can be used in here 
// function sum(a,b){
//  return a+b;
// }

// const result = sum(10000,2558);

// console.log(result);



// Anonymous function

// const sum = function(a, b) {
//  return a + b;
// };

// console.log(sum(256,145));

// Arrow Function

// const sum =  (a,b) => {
//   return a+b
// };

// console.log(sum(256,145));

// // Falsy values to use in conditional statements and and in loops
// false
// 0
// ''(empty string)
// null
// undefined
// NaN


// Everything else is true

 
// const age  = 19;
// const isCool = true;

// if (isCool && age > 118) {
//   console.log("You may enter");
// }else {
//   console.log("Fuck off");
// }

// console.log('Shubham' && 'Arjita' && 1 && 'Tiwari' && 1);


//Switch statements
// const superHero = '11Iron man ';

// switch (superHero) {
//   case 'Iron man' :
//     console.log ('I am iron man.....');
//     break;
  
//     case 'thor':
//       console.log('Mjolnir come back to me');
//       break;
    
//     case 'Black widow':
//       console.log("Natasha Romonofffffff");
//       break;
    
//     default : console.log('The name is batman');

// }

// Ternary Operator

// eg
// if (condition) {
//   //block of code
// } else {
//   // block of code
// }

//condition ? true : false ; // Ternary Operator 



// Functions returns undefined i.e if one return comes first it is going to be retuned!!
// Arrow Function use cases


// function add(a,b) {
  // return a + b ;
// }
// If there's nothing inside the function block it will just return undefined
// console.log(add( 1,3));

// if there are more than one retun statements inside the fuunction the first will be the executed and after first "return" the pointer of the code will be moved out the function block


//Arrow functions (they do not have their own 'this' keyword which is not the case with normal function declaration and with the anonymous function declaration) 
// const square = (number) => {
//    return number*number ;
// };

// console.log(square(789));




//if the statemnets looks like the above function it  can also look like 

// const sq1 = (number) => number*number;


// console.log(sq1(789))

// Parametere and arguments in javascript

// parameteres are used when defining a function (they wont be used out of the function)

// Arguments are tpassed when a func call happens

//for eg

// const sayhii = (name) => {
//   console.log(`hii , ${name} and he is ${age} years old`);
// }

//  // so here shubham and 20 are arguments and name and age are parameters
// sayhii('shubham',20);

// // if we do not pass enough arguments it will return undefined whatever the parameters will be empty


// const add = (a,b) => {
//   return a+b;
// }
// // for eg if no two parameters are passed we can set default values of them in the function declaration like this const add = (a=0 , b=0)  so even if the time of function call the program wont retuen values like undefined and Nan(not a number) just like we do in the switch cases PS: Javascript Programming is amzing

// console.log(add(1));

// Fundaments like scope , Hoisting and Closures (named as tricky trios)


// Global Scope and local scopes

// Scope provides security to our code

// Function defined scope are local and otside the function are global scopes

// Global Scope for eg const name = shubham it is accesible throughout the code 
// reusable and good but the memory management and the vars can also be chnaged by any function
//so global scope are accesible to all and can be changed at any time

// Local scope are defined in the function
//for eg const name = () => [
//  const name - 'shubham';
// the name const can only br used in the function only 
// }


//  Inner function can see the outside of the function 

// There can be variables with same name it can keep running ~~!!

// Block scope
// Today is 21st October
// 

// The most Confusing things of JS
// 5+5 = 10
// but 5+ '5' = 55 // this is because of the type coercion 
// 5+ Number('5') = 10 // this is because of the type coercion
// 5+ parseInt('5') = 10 // this is because of the type coercion
// 5+ parseFloat('5') = 10 // this is because of the type coercion
// 5+ +'5' = 10 // this is because of the type coercion
// 5+ -'5' = 0 // this is because of the type coercion
// GitHub Copilot: Type coercion is the process of converting a value from one data type to another in JavaScript. It happens implicitly or explicitly. Implicit coercion happens when JavaScript automatically converts a value from one type to another, while explicit coercion happens when a developer manually converts a value from one type to another. 
// In the provided code excerpt, the plus operator is used to add a number and a string. JavaScript implicitly coerces the string into a number, resulting in the concatenation of the two values instead of their addition.Type coercion is the process of converting a value from one data type to another in JavaScript. It happens implicitly or explicitly. Implicit coercion happens when JavaScript automatically converts a value from one type to another, while explicit coercion happens when a developer manually converts a value from one type to another. 
// In the provided code excerpt, the plus operator is used to add a number and a string. JavaScript implicitly coerces the string into a number, resulting in the concatenation of the two values instead of their addition.
// '5'--'5' =10 // this is because of the type coercion
// NaN === NaN // false // this is because of the type coercion

// {} + [] === 0 // true // this is because of the type coercion
// [] + {} === '[object Object]' // true // this is because of the type coercion
// [] + [] === '' // true // this is because of the type coercion
// [] * 1 === 0 // true // this is because of the type coercion
// false + 1 === 1 // true // this is because of the type coercion

// typeof NaN === 'number' // true // this is because of the type coercion
// ({}) == '[object Object]' // true // this is because of the type coercion
// [] == '' // true // this is because of the type coercion

// hoisting
// console.log(name);
// var name = 'shubham';
// console.log(name);

// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase, before the code has been executed. It's important to note that only the declarations are hoisted, not initializations. 
// If a variable is declared and initialized after using it, the value will be undefined.

// Here's a simple example of hoisting:
// console.log(myVar); // Output: undefined
// var myVar = 5;
// console.log(myVar); // Output: 5
// In the above code, the variable myVar is hoisted during the compile phase. When console.log(myVar); is executed the first time, 
// myVar is undefined because only the declaration was hoisted, not the initialization. After myVar is initialized with the value 5,
// the second console.log(myVar); outputs 5.
// Hoisting also works with function declarations:
// myFunction(); // Output: Hello, World!
// function myFunction() {
//  console.log("Hello, World!");
// }

// Closures
// function outer() {
//   const name = 'Shubham';
//   function inner() {
//     console.log(name);
//   }
//   return inner;
// }

// const innerFunction = outer();
// innerFunction();
// A closure is a function that has access to its outer function's scope even after the outer function has returned. This means a closure can remember and access variables and arguments of its outer function even after the function has finished.
// In the above example, the inner function has access to the variables in the outer function even after the outer function has returned. This is because the inner function forms a closure around the variables in the outer function's scope.
// Closures are useful in hiding implementation details and organizing code. For example, a counter function can be implemented using closures:

// function counter() {
//   let count = 0;
//   return function() {
//     count++;
//     console.log(count);
//   };
// }

// const counter1 = counter();
// counter1(); // Output: 1
// counter1(); // Output: 2
// counter1(); // Output: 3

// const counter2 = counter();
// counter2(); // Output: 1
// counter2(); // Output: 2
// counter2(); // Output: 3
// In the above example, the counter function returns a function that increments and logs the count variable. The counter function forms a closure around the count variable, which is why the count variable is accessible even after the counter function has returned.
// The counter function can be called multiple times to create multiple counters that are independent of each other. This is because each time the counter function is called, a new closure is created.
// Closures are also useful in implementing partial applications and currying in JavaScript. For example:

// function multiply(a, b) {
//   return a * b;
// }

// const multiplyByTwo = multiply.bind(this, 2);
// console.log(multiplyByTwo(4)); // Output: 8
// console.log(multiplyByTwo(5)); // Output: 10
// console.log(multiplyByTwo(6)); // Output: 12
// In the above example, the multiply function is partially applied to create a new function that always multiplies by 2. This is achieved by using the bind method, which creates a new function that, when called, has its this keyword set to the provided value and arguments provided beforehand.
// The bind method is used to create a new function with the same body and scope as the original function, but with a different this value. The first argument to the bind method is the this value, and the subsequent arguments are the arguments to the original function.
// // The bind method is also useful in implementing function currying in JavaScript. For example: 

// hoist();

// const hoist = () => {
//   console.log("Hoisted");
// };
// In the above example, the hoist function is called before it is declared. This is possible because of hoisting. During the compile phase, the function declaration is hoisted to the top of the scope, which is why the function call doesn't throw an error.

//Closures are also useful in implementing partial applications and currying in JavaScript. For example:
// const outer = () => {
//   const name = "Shubham";
//   console.log(name);
//   const inner = () => {
//     console.log(name);
//   };
//   return inner;
// }

// console.log(name);
// const innerFunction = outer();
// innerFunction();
// In the above example, the inner function has access to the variables in the outer function even after the outer function has returned. This is because the inner function forms a closure around the variables in the outer function's scope.

// Closures are useful to access the variables of the parent scope
// Closures are useful in hiding implementation details and organizing code
// Closures are useful in implementing partial applications and currying in JavaScript
// Closures are useful in implementing function composition in JavaScript
// Closures are useful in implementing memoization in JavaScript
// Closures are useful in implementing the module pattern in JavaScript
// Closures are useful in implementing iterators in JavaScript
// Closures are useful in implementing asynchronous JavaScript
// Closures are useful in implementing callbacks, promises, and async/await in JavaScript
// Closures are useful in implementing event handlers/listeners in JavaScript
// Closures are useful in implementing the observer pattern in JavaScript
// Closures are useful in implementing the mediator pattern in JavaScript
// Closures are useful in implementing the singleton pattern in JavaScript
// Closures are useful in implementing the factory pattern in JavaScript
// Closures are useful in implementing the decorator pattern in JavaScript
// Closures are useful in implementing the command pattern in JavaScript
// Closures are useful in implementing the strategy pattern in JavaScript
// Closures are useful in implementing the state pattern in JavaScript
// Closures are useful in implementing the proxy pattern in JavaScript
// Closures are useful in implementing the flyweight pattern in JavaScript
// Closures are useful in implementing the adapter pattern in JavaScript
// Closures are useful in implementing the iterator pattern in JavaScript
// Closures are useful in implementing the composite pattern in JavaScript
// Closures are useful in implementing the facade pattern in JavaScript
// Closures are useful in implementing the bridge pattern in JavaScript
// Closures are useful in implementing the builder pattern in JavaScript

// Closures are useful in implementing the chain of responsibility pattern in JavaScript
// Closures are useful in implementing the interpreter pattern in JavaScript

// Closures are useful in implementing the memento pattern in JavaScript
// Closures are useful in implementing the visitor pattern in JavaScript
// Closures are useful in implementing the template method pattern in JavaScript
// Closures are useful in implementing the observer pattern in JavaScript

//Closures are created every time a function is created, at function creation time

// const init = () => {
//   const hobby = "Coding"; //local variable created when init is run

  // const displayHobby = () => {  //displayHobby is the inner function, a closure
  //   console.log(hobby); //using variable declared in the parent function
//   }
//   return displayHobby();
// }

// console.log(init()); //run the function

//Coding undefined (Why??)
// Strings

// `` //Backtick {Provide way more functionalities than single and double quotes}
// '' //Single Quotes 
// "" //Double Quotes

// const sum = (a,b) => {
//   return a+b;
// }

// console.log(`The sum is ${sum(10,12)}`); 

// const greeet = 'Hii I\'m John Doe';
// WE can use backslash to escape the single quotes inside the string
// console.log(greeet); // 15

// const greeet = "Hii I'm John Doe";
// // console.log(greeet); // 15
// const multiplyByTwo = multiply.bind(this, 2);
// console.log(multiplyByTwo(4));
// console.log(multiplyByTwo(5));
// console.log(multiplyByTwo(6));

// const hoist = () => {
//   console.log("Hoisted");
// };

// hoist();

// const outer = () => {
//   const name = "Shubham";
//   console.log(name);
//   const inner = () => {
//     console.log(name);
//   };
//   return inner;
// }

// console.log(name);
// const innerFunction = outer();
// innerFunction();

// const init = () => {
//   const hobby = "Coding";
//   const displayHobby = () => {
//     console.log(hobby);
//   }
//   return displayHobby();
// }

// console.log(init());

// const sum = (a,b) => {
//   return a+b;
// }

// console.log(`The sum is ${sum(10,12)}`); 

// const greeet = 'Hii I\'m John Doe';
// console.log(greeet);

// const greeet = "Hii I'm John Doe";
// console.log(greeet);


// console.log(name.length); // 8
// console.log(name1[name1.length - 1]);

// // console.log(name.toUpperCase()); // JOHN

// const name1 = "John";
// console.log(name1.toUpperCase()); //john

// Searching for a substring in a string
// const hobbies = 'I love HTML CSS  JavaScript';
//Indexof
// hobbies.indexOf('love'); // 2

// Returns the position of the first occurrence of a substring.

// @param searchString — 
// The substring to search for in the string

// @param position — 
// The index at which to begin searching the String object. 
// If omitted, search starts at the beginning of the string.

// const index = hobbies.indexOf('JavaScript');
// console.log(index);

// IndexOf is case sensitive
// LastIndexOf
// hobbies.lastIndexOf('love'); // 2
// LastIndexOf is case sensitive

// Includes() Returns true or false
// hobbies.includes('love'); // true

//startsWith() Returns true or false
// console.log(hobbies.startsWith('I')); // true

//endsWith() Returns true or false
// hobbies.endsWith('JavaScript'); // true
//Slice() Returns a substring of the string based on the arguments passed.
// const wx = hobbies.slice(7, 11);

// console.log(wx);//HTML

// const wx = hobbies.slice(-10, -6);

//Split a string
// const ex = "dog";

// console.log(ex.split('')); // ["d", "o", "g"]
// Split is a method in JavaScript which can convert a string into an array.(Frankly saying it is a method which can convert a string into an array)

// const ex1 = "The quick brown fox jumps over the lazy dog.";
// const words = ex1.split(' ');
// console.log(words); //It will only split the string where it finds the space and will convert it into an array

//But 
// const w1 = ex1.split('');
// console.log(w1); //It will split the string into an array of characters

// const ex = "Shawty like a melody in my head";  
// const words = ex.split(' ').reverse().join(' ');
// console.log(words); //It will split the string into an array of characters
//Repeat() Returns a new string with a specified number of copies of an existing string.

// const gogSays = "Gog says ";

// console.log(gogSays.repeat(3)); // Gog says Gog says Gog says


//Trim() Removes whitespace from both ends of a string.
// const ex = "   dog   ";
// console.log(ex.trim()); // dog

// const email = '    contact@codecademy.com      ';
// console.log(email.trim()); // 'contact@codecademycom'

// Guests

const guestList = 'Our Guests names are : emma , jacob, isabella ,ethan';
// 1. Get a lengh of the string . Store it in a variable callled length
// 2. Convert the string to lowercase and store it into the lowercaseGuestList and log it to the console
// 3. Convert the string to uppercase and store it into the uppercaseGuestList log it to the console
// 4. Check whether 'ETHAN' is on the uppercaseGuestList.
// Store the answer in a variable called isEthanOnTheList and log it to the console
//The datatype of the variable should be boolean
// Create a substring that only contains the following
//'EMMA, JACOB, ISABELLA' and store it in a variable called substringGuests"
// Log it to the console

//5. Out of the substring you create create an array of names of the people that are on the List. Store that array in a variable called guests and log it to the console

