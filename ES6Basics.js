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






