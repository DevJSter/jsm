// const employe = {
//  calcTax() {
//   console.log('Tax rate is 10%');
//  }
// }


// const karanArjun = {
//  salary :50000,
// }


// karanArjun.__proto__ = employe;


// karanArjun.calcTax(); // Tax rate is 10%

//Classes


// TemplateBlueprint


// class ToyotaCar {
//  start (){
//   console.log('start');
//  }
//  stop(){
//   console.log('stop');
//  }

//  setBrandName(brand) {
//   this.brand = brand; //this is a keyword which is used to access the current object }
// }


// let fortuner = new ToyotaCar();
// let sexcy = new ToyotaCar();

// fortuner.setBrandName('Toyota');


//Inheritance

// class Parent {
//  hello() {
//   console.log('Hello');
//  }
// }

// class Child extends Parent {
// }
// let obj = new Child();

// class Person {
//  sleep () {
//   console.log('sleep');
//  }        

//  eat() {
//   console.log('eat');
//  }

//  work() {
//   console.log('work');
//  }

// }
// //If parent and child both has same function even then the child function will be called
// //It is known as overriding
// class Engineer extends Person {}

//Super keyword

class Person {
 constructor(name) {
  this.name = name;

 }
 eat() {
  console.log('eat');
 }

 work() {
  console.log('work');
 }

}

class Engineer extends Person {
 constructor(name, branch) {
  super(name);
  this.branch = branch;
 }
 work() {
  console.log('work smarter');
 }
}


//Error handling

try {
 console.log('hello');
}
catch (err) { 
 console.log(err);
}
finally {
 console.log('finally');
}


