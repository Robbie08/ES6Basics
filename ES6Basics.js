// -----------------  ES6 Basics  -----------------

// ----------------- let vs const------------------
// let variables can be changed later on in code
// while const variables are a one and done deal
// 
// IMPORTANT!!!
// They are both block scoped, meaning they cant be
// accessed outside of its block scope
// 
// Takeaway: 
// If you need a value that should not be changed, 
// then use a const. For everything else generally 
// use let

var name="Robert";

console.log(name);
if(name == "Robert") {
 	let fullName = "Robert Ortiz";
  	const age = 21;
  	console.log(fullName);
  
  	fullName = "Just changed it!"; 
  	
	console.log(fullName);
	console.log(age);
}

// ---------- const vs let (objects) -----=----
// We can update the properties of the object
// We cant however change the entire value of an 
// object but we can change its properties
// 
// If we use let instead of const then we can then
// change the entire value of an object
const person = {
  name: "Robert",
  gender: "male"
};

person.name = "Robert Ortiz"

console.log(person.name);
console.log(person.gender);


//--------------- Map function ---------------
// will go through every element and update it
// with whatever we want it to be
const integers = [1,2,3,4];

// this will increment the value inside of each
// element by 1.
// NOTE: This function is ES5, usually functions that
// 		 function in the parameter are ES5
// 		 
// const updateIntegers = integers.map(function(number){
//		return number +=1 
// });

// -------------- Arrow function ----------------
// This is called an implisit return. We can remove
// the curly braces use the fat arrow to return the
// value.
// This is helpful when we are returning only one
// value
// 
// if we are passing in one value only, we can 
// remove the parantheses from (number) to number
// 
// in this case number is the value of each
// element in the integer array
// this is an ES6 function
const updateInteger = integer.map((number) => number +=1);

console.log(integers);  // [1,2,3,4]
console.log(updateIntegers);  // [2,3,4,5]

// another example of arrow function

const ages = [23,4,21,5,19]

// filter an array with ages greater than 20
// 
// ES5 function
// const adults = ages.filter(function(age) {
//   		return age > 20; // include in current array
// });

// explisit return arrow function
const adults = ages.filter((age) => {
 		return age > 20;
}); 

console.log(adults);


// ------------------ Template String ---------------

const name = "Robert";
const age = 24;

// we can use template strings
// in ES5 we would have to use concatonation to like
// const sentence = "My name is " +name + ", and I am " +age +" years old."
// 
// In ES6 we can use the ${} syntax
const sentence = "My name is ${name}, and I am ${age} years old "

console.log(sentence);


// ------------ Protoype Methods & Classes--------------

// constructor function to create a new object of person
// function Person(name, age){
// 	this.name = name;
//  	this.age = age;
// }

// const robert = new Person("Robert",24);
// console.log(robert); // object Robert

// this is ES5 syntax
// Person.prototype.speak = function(){
//  	console.log('Hi, my name is ${this.name}'); 
// }

// robert.speak(); // call a Method prototype


//------------------ ES6 Example --------------
class Person {
    constructor(name, age,children){
         this.name = name;
        this.age = age;
          this.children = children; 
   }
 speak(){ 
   console.log('Hi, my name is ${this.name}'); 
 }
 
 birth(child){
     this.children.push(child);
   return this.children;
 }
}

const robert = new Person("Robert", 24, ["Shawn","steph"]); 

robert.speak();
robert.birth("jess");
console.log(robert.children);


// ---------------- Spread Operator -----------------
// Always going to see it with anything we can loop
// through, generally arrays and lists

const name = ["Robert", "Bill", "Sam"]
const moreNames = ["Will","Paul","Mike"]

// take every element and expands array into elements
// destructuring the array
// console.log(...name);  // Robert Bill Sam

// if we want to concatonate the arrays and add Geo
// in the center like ["Robert", "Bill", "Sam", "Geo","Will","Paul","Mike"]

// this is the ES5 way of doing it
// let allNames = [];
// allNames = allNames.concat(name);
// allNames.push("Gio");
// allNames = allNames.concat(moreNames);


// this is the ES6 way of using spread operator
const allNames = [...names,"Geo",...moreNames]; 

console.log(allNames);
