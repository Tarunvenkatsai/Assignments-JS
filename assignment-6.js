// 1)Write a program that takes a number as input and prints "Even" if the number is even, otherwise prints "Odd".
// let number = parseInt(prompt("Enter a number:"));

// if (number % 2 === 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }

// 2)Given a student's marks (0-100), write a script that outputs the grade:
// Marks ≥90: "A"
// Marks ≥80: "B"
// Marks ≥70: "C"
// Marks ≥60: "D"
// Marks <60: "F"
// let marks = parseInt(prompt("Enter student's marks (0-100):"));

// if (marks >= 90) {
//   console.log("Grade: A");
// } else if (marks >= 80) {
//   console.log("Grade: B");
// } else if (marks >= 70) {
//   console.log("Grade: C");
// } else if (marks >= 60) {
//   console.log("Grade: D");
// } else {
//   console.log("Grade: F");
// }

// 3)Ask the user for a year. Print "Leap Year" if it is a leap year, otherwise print "Not a Leap Year".
// let year = parseInt(prompt("Enter a year:"));

// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   console.log("Leap Year");
// } else {
//   console.log("Not a Leap Year");
// }

// 4)Write code to input three numbers and print the largest using nested if-else.
// let a = parseFloat(prompt("Enter first number:"));
// let b = parseFloat(prompt("Enter second number:"));
// let c = parseFloat(prompt("Enter third number:"));

// if (a > b) {
//   if (a > c) {
//     console.log("The largest number is: " + a);
//   } else {
//     console.log("The largest number is: " + c);
//   }
// } else {
//   if (b > c) {
//     console.log("The largest number is: " + b);
//   } else {
//     console.log("The largest number is: " + c);
//   }
// }


// 5)Implement a calculator using switch that takes two numbers and an operator (+, -, *, /) as input and prints the result.
// let num1 = parseFloat(prompt("Enter the first number:"));
// let num2 = parseFloat(prompt("Enter the second number:"));
// let operator = prompt("Enter operator (+, -, *, /):");

// let result;

// switch (operator) {
//   case "+":
//     result = num1 + num2;
//     console.log("Result: " + result);
//     break;
//   case "-":
//     result = num1 - num2;
//     console.log("Result: " + result);
//     break;
//   case "*":
//     result = num1 * num2;
//     console.log("Result: " + result);
//     break;
//   case "/":
//     if (num2 !== 0) {
//       result = num1 / num2;
//       console.log("Result: " + result);
//     } else {
//       console.log("Error: Division by zero");
//     }
//     break;
//   default:
//     console.log("Invalid operator");
// }

// 6)Use a for loop to print the multiplication table of a given number up to 10.
// let number = parseInt(prompt("Enter a number:"));

// console.log("Multiplication Table of " + number);

// for (let i = 1; i <= 10; i++) {
//   console.log(number + " x " + i + " = " + (number * i));
// }

// 7)Input a word and count how many vowels and consonants it contains. Print both counts.
// let word = prompt("Enter a word:").toLowerCase();

// let vowels = 0;
// let consonants = 0;

// for (let i = 0; i < word.length; i++) {
//   let char = word[i];
//   if (/[a-z]/.test(char)) {
//     if ("aeiou".includes(char)) {
//       vowels++;
//     } else {
//       consonants++;
//     }
//   }
// }

// console.log("Vowels:", vowels);
// console.log("Consonants:", consonants);

// 8)Using a for loop from 1 to 50, print:
// "Fizz" for numbers divisible by 3,
// "Buzz" for numbers divisible by 5,
// "FizzBuzz" for numbers divisible by both 3 and 5,
// The number itself otherwise.
// for (let i = 1; i <= 50; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// 9)Input the month number (1-12) and print the number of days in the month using a switch statement.
// let month = parseInt(prompt("Enter the month number (1-12):"));
// let days;

// switch (month) {
//   case 1:  // January
//   case 3:  // March
//   case 5:  // May
//   case 7:  // July
//   case 8:  // August
//   case 10: // October
//   case 12: // December
//     days = 31;
//     break;

//   case 4:  // April
//   case 6:  // June
//   case 9:  // September
//   case 11: // November
//     days = 30;
//     break;

//   case 2:  // February
//     days = "28 or 29 (leap year)";
//     break;

//   default:
//     days = "Invalid month number";
// }

// console.log("Days in month:", days);

// 10)Write a program that uses a for loop to find the sum of all even numbers between 1 and 100 (inclusive) and print the result.
// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
// }

// console.log("Sum of all even numbers from 1 to 100 is:", sum);
