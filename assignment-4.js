//1) Write a JavaScript program that declares a variable of each of the following types: string, number, boolean, object, and undefined. Print the datatype of each variable to the console using typeof.
// let myString = "Hello, JavaScript";       
// let myNumber = 42;                        
// let myBoolean = true;                     
// let myObject = { name: "Tarun", age: 22 };
// let myUndefined;  
// console.log("Type of myString:", typeof myString);       
// console.log("Type of myNumber:", typeof myNumber);       
// console.log("Type of myBoolean:", typeof myBoolean);     
// console.log("Type of myObject:", typeof myObject);       
// console.log("Type of myUndefined:", typeof myUndefined);

//2)Write a JavaScript program to ask the user for two numbers using prompt(), add them, and display the result using alert().
// let num1 = prompt("Enter the first number:");
// let num2 = prompt("Enter the second number:");
// num1 = Number(num1);
// num2 = Number(num2);
// let sum = num1 + num2;
// alert("The sum of the two numbers is: " + sum);

//3)Declare a variable counter with value 10. Use shorthand assignment operators to:
// Add 5 to it,
// Subtract 2,
// Multiply by 3,
// Divide by 2,
// After each operation, log the value to the console.
// let counter = 10;
// counter += 5;
// console.log("After adding 5:", counter);  
// counter -= 2;
// console.log("After subtracting 2:", counter);  
// counter *= 3;
// console.log("After multiplying by 3:", counter);  
// counter /= 2;
// console.log("After dividing by 2:", counter);  

//4)Write code to compare two numbers using each of the following: ==, ===, !=, !==, >, <, >=, <=. For each comparison, print the result.
// let x = 10;
// let y = "10";  

// console.log("x == y:", x == y);     
// console.log("x === y:", x === y);   

// console.log("x != y:", x != y);     
// console.log("x !== y:", x !== y);   

// console.log("x > y:", x > y);       
// console.log("x < y:", x < y);       
// console.log("x >= y:", x >= y);     
// console.log("x <= y:", x <= y);     

//5)Given three variables a = true, b = false, c = true, use all three logical operators (&&, ||, !) to create and log at least three unique expressions.
// let a = true;
// let b = false;
// let c = true;
// console.log("a && c:", a && c);   
// console.log("a || b:", a || b);   
// console.log("!b && a:", !b && a); 
// console.log("!(a && b) || c:", !(a && b) || c);

//6)Write a program that takes a number input from the user and checks if it is even or odd using the modulo operator %. Display the result.
// let num = prompt("Enter a number:");
// num = Number(num);
// if (num % 2 === 0) {
//   alert(num + " is Even");
// } else {
//   alert(num + " is Odd");
// }

//7)Write code to swap values of two variables x and y (initially, x = 5, y = 7) using only a third variable and assignment operators. Print values before and after swapping.
// let x = 5;
// let y = 7;
// console.log("Before swapping:");
// console.log("x =", x);
// console.log("y =", y);
// let temp = x;
// x = y;
// y = temp;
// console.log("After swapping:");
// console.log("x =", x);
// console.log("y =", y);

//8)Ask the user for their age with prompt(). Write an if-else statement that uses comparison and logical operators to categorize the user as:
// Minor (age < 18)
// Adult (age 18 - 59)
// Senior (age 60+)
// Display their category.
// let age = prompt("Enter your age:");
// age = Number(age);
// if (age < 18) {
//     alert("You are a Minor.");
// } else if (age >= 18 && age <= 59) {
//     alert("You are an Adult.");
// } else if (age >= 60) {
//     alert("You are a Senior.");
// } else {
//     alert("Invalid age entered.");
// }

//9)What will the following expression return? console.log("5" == 5); and console.log("5" === 5);
// Explain why.
// console.log("5" == 5);     // true
// console.log("5" === 5);    // false
// The double equals (==) compares values after doing type coercion.
// "5" (a string) is converted to a number before comparison.
// The triple equals (===) compares both value and type.
// "5" is a string and 5 is a number.
// Since the types are different, no coercion happens.








