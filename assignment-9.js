// 1)let str = prompt("Enter a string:");
// let reversed = "";
// let i = str.length - 1;
// while (i >= 0) {
//   reversed += str[i];
//   i--;
// }
// console.log("Reversed string:", reversed);

// 2)let str = prompt("Enter a string:").toLowerCase();
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

// 3)function isPalindrome(str) {
//   let i = 0;
//   let j = str.length - 1;
//   while (i < j) {
//     if (str[i] !== str[j]) {
//       return false;
//     }
//     i++;
//     j--;
//   }
//   return true;
// }

// let input = prompt("Enter a string:");
// console.log("Palindrome:", isPalindrome(input));

// 4)let arr = [5, 12, 7, 22, 3, 18];
// let max = arr[0];
// let i = 1;
// while (i < arr.length) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
//   i++;
// }
// console.log("Largest value:", max);

// 5)let arr = [4, 8, 15, 16, 23, 42];
// let sum = 0;
// let i = 0;
// while (i < arr.length) {
//   sum += arr[i];
//   i++;
// }
// console.log("Sum of array elements:", sum);

// 6)let arr = [2, 3, 4, 2, 5, 3, 6];
// let uniqueArr = [];
// let i = 0;
// while (i < arr.length) {
//   if (!uniqueArr.includes(arr[i])) {
//     uniqueArr.push(arr[i]);
//   }
//   i++;
// }
// console.log("Array without duplicates:", uniqueArr);

// 7)let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let combined = [];
// let i = 0;
// while (i < arr1.length) {
//   combined.push(arr1[i]);
//   i++;
// }
// i = 0;
// while (i < arr2.length) {
//   combined.push(arr2[i]);
//   i++;
// }
// console.log("Combined array:", combined);

// 8)let arr = [10, 20, 30, 40, 50];
// let element = parseInt(prompt("Enter the element to search:"));
// let index = -1;
// let i = 0;
// while (i < arr.length) {
//   if (arr[i] === element) {
//     index = i;
//     break;
//   }
//   i++;
// }
// console.log("Index position:", index);

// 9)function sortArray(arr) {
//   let i = 0;
//   while (i < arr.length - 1) {
//     let j = 0;
//     while (j < arr.length - i - 1) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//       j++;
//     }
//     i++;
//   }
//   return arr;
// }

// let numbers = [29, 10, 14, 37, 13];
// console.log("Sorted array:", sortArray(numbers));

// 10)let str = prompt("Enter a string:");
// let target = prompt("Enter the character to replace:");
// let replacement = prompt("Enter the replacement character:");
// let result = "";
// let i = 0;
// while (i < str.length) {
//   if (str[i] === target) {
//     result += replacement;
//   } else {
//     result += str[i];
//   }
//   i++;
// }
// console.log("Modified string:", result);
