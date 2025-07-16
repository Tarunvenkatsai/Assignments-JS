// 1)List all the primitive data types available in JavaScript. Give one example for each.
// In JavaScript, there are 7 primitive data types.
// ->Number
// Example: let age = 21;
// ->String
// Example: let name = "Tarun";
// ->Boolean
// Example: let isLoggedIn = true;
// -> Undefined
// Example: let score;
//          console.log(score);
// ->Null
// Example: let selectedItem = null;
// ->BigInt
// Example:let bigNumber = 12345678901234567890123456789012345;  
// ->Symbol

// 2)What is the difference between var, let, and const when declaring variables in JavaScript? Provide an example for each.
// The main differences between var, let, and const in JavaScript are:
// ->var:
// Scope: Function-scoped.
// Hoisted: Yes 
// Re-declarable: Yes.
// Re-assignable: Yes.
// Example: 
// var city = "Hyderabad";
// console.log("Initial city:", city);
// city = "Delhi"; 
// console.log("Updated city:", city);

// ->let
// Scope: Block-scoped.
// Hoisted: Yes.
// Re-declarable: No.
// Re-assignable: Yes.
// Example:
// let age = 25;
// console.log("Initial age:", age);
// age = 26; 
// console.log("Updated age:", age);

// ->const
// Scope: Block-scoped.
// Hoisted: Yes.
// Re-declarable: No.
// Re-assignable: No.
// Example:
// const greeting = "Hello, Tarun!";
// console.log(greeting);

// 3)Explain the difference between undefined and null in JavaScript.
// ->Undefined: In JavaScript, undefined means a variable has been declared but has not been assigned a value yet. It is automatically set by JavaScript when a variable is missing a value. 
// ->Null: Null is a special value in JavaScript that represents an intentional absence of any value. It is assigned manually by the programmer when you want to clear a variable or indicate that it should be empty. 


// 4)What will be the output of the following code? Explain your answer.
// let x = 10;
// let y = "10";
// console.log(x == y);
// console.log(x === y);
// Output: 
// true
// false
// Explaination: 
// ->In the first comparison x == y, JavaScript uses the loose equality operator (==), which performs type coercion. Since x is a number (10) and y is a string ("10"), the string is converted to a number, so the comparison becomes 10 == 10, which is true.
// ->In the second comparison x === y, the strict equality operator (===) is used. It checks for both value and type without converting types. Here, x is a number and y is a string, so they are not of the same type, and the result is false.


// 5)Write a JavaScript statement to declare a variable that cannot be reassigned. What happens if you try to change its value?
// const pi = 3.14;
// pi = 3.1415;
// The const keyword is used to declare a variable that cannot be reassigned. In the example, pi is declared as a constant with the value 3.14. When we try to change its value to 3.1415, JavaScript throws a TypeError because constants are read-only after their initial assignment.


// 6)How do you check the data type of a variable in JavaScript? Write a code example.
// In JavaScript, the typeof operator is used to check the data type of a variable. In the example, name holds a string value, so typeof name returns "string". This is helpful for debugging and validating variable types in your code.
// Example:
// let name = "Tarun";
// console.log(typeof name);


// 7)What is an object in JavaScript? Give an example of how to create and access its properties.
// An object in JavaScript is a collection of key-value pairs used to store related data and functionality. It can hold properties (data) and methods (functions).
// Example:
// let person = {
//   name: "Tarun",
//   age: 22,
//   city: "Hyderabad"
// };
// console.log(person.name);   
// console.log(person["city"]);


// 8)Differentiate between an array and an object in JavaScript with an example for each.
// ->An array is best for storing a list of values where order matters, like a list of fruits.
// ->An object is used to represent an entity with properties, like a car with a brand and color.
// ->Example:
// let fruits = ["apple", "banana", "mango"];
// console.log(fruits[1]); 

// let car = {
//   brand: "Toyota",
//   color: "Red"
// };
// console.log(car.brand);


// 9)What will be the value and type of the variable a after executing the following code?
// let a;
// Explain your answer.
// Value: undefined
// Type: undefined
// Explaination:
// When a variable is declared using let but not assigned any value, JavaScript automatically assigns it the value undefined. Since no value is given to a, it holds undefined, and its type is also undefined. This indicates that the variable exists but has no value yet.


// 10)Write a JavaScript code snippet that demonstrates how to store and print a student's name (string), age (number), and pass status (boolean) using variables.
// let studentName = "Tarun";
// let age = 21;
// let isPassed = true;
// console.log("Name: " + studentName);
// console.log("Age: " + age);
// console.log("Passed: " + isPassed);



