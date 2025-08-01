// 1)let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }


// 2)let n = parseInt(prompt("Enter a number:"));
// let sum = 0;
// let i = 1;
// while (i <= n) {
//   sum += i;
//   i++;
// }
// console.log("Sum:", sum);

// 3)let num = parseInt(prompt("Enter a number:"));
// let i = 1;
// while (i <= 10) {
//   console.log(num + " x " + i + " = " + (num * i));
//   i++;
// }

// 4)let str = prompt("Enter a string:");
// let reversed = "";
// let i = str.length - 1;
// while (i >= 0) {
//   reversed += str[i];
//   i--;
// }
// console.log("Reversed string:", reversed);

// 5)let str = prompt("Enter a string:").toLowerCase();
// let vowels = "aeiou";
// let count = 0;
// let i = 0;
// while (i < str.length) {
//   if (vowels.includes(str[i])) {
//     count++;
//   }
//   i++;
// }
// console.log("Number of vowels:", count);

// 6)let i = 1;
// while (i <= 4) {
//   let j = 1;
//   let line = "";
//   while (j <= i) {
//     line += "*";
//     j++;
//   }
//   console.log(line);
//   i++;
// }

// 7)let n = parseInt(prompt("Enter the size of the square:"));
// let i = 1;
// while (i <= n) {
//   let j = 1;
//   let line = "";
//   while (j <= n) {
//     if (i === 1 || i === n || j === 1 || j === n) {
//       line += "*";
//     } else {
//       line += " ";
//     }
//     j++;
//   }
//   console.log(line);
//   i++;
// }

// 8)let str = prompt("Enter a string:");
// let count = 0;
// let i = 0;
// while (i < str.length) {
//   if (str[i] >= '0' && str[i] <= '9') {
//     count++;
//   }
//   i++;
// }
// console.log("Number of digits:", count);

// 9)let str = prompt("Enter a string:");
// let i = 0;
// let j = str.length - 1;
// let isPalindrome = true;
// while (i < j) {
//   if (str[i] !== str[j]) {
//     isPalindrome = false;
//     break;
//   }
//   i++;
//   j--;
// }
// console.log("Palindrome:", isPalindrome);

// 10)let str = prompt("Enter a string:").trim();
// let count = 0;
// let i = 0;
// while (i < str.length) {
//   if (str[i] === " ") {
//     count++;
//     while (i < str.length && str[i] === " ") {
//       i++;
//     }
//   } else {
//     i++;
//   }
// }
// if (str.length > 0) {
//   count++;
// }
// console.log("Number of words:", count);


