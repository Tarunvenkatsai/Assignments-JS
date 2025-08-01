// 1)function sum(a, b) {
//   return a + b;
// }

// console.log("Sum:", sum(8, 12));

// 2)function greet(name) {
//   return "Hello, " + name + "!";
// }

// console.log(greet("Ram"));

// 3)function isEven(num) {
//   return num % 2 === 0;
// }

// console.log(isEven(6));
// console.log(isEven(9));

// 4)function firstElement(arr) {
//   return arr[0];
// }

// console.log(firstElement([10, 20, 30, 40]));

// 5)function findSmallest(arr) {
//   let min = arr[0];
//   let i = 1;
//   while (i < arr.length) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//     i++;
//   }
//   return min;
// }

// console.log(findSmallest([12, 5, 8, 3, 17]));

// 6)function outer() {
//   function square(num) {
//     return num * num;
//   }
//   return square(6);
// }

// console.log(outer());

// 7)function checkNumber(num) {
//   function evaluate(n) {
//     if (n > 0) {
//       return "Positive";
//     } else if (n < 0) {
//       return "Negative";
//     } else {
//       return "Zero";
//     }
//   }
//   return evaluate(num);
// }

// console.log(checkNumber(10));
// console.log(checkNumber(-5));
// console.log(checkNumber(0));

// 8)function reverseString(str) {
//   function reverse(s) {
//     let reversed = "";
//     let i = s.length - 1;
//     while (i >= 0) {
//       reversed += s[i];
//       i--;
//     }
//     return reversed;
//   }
//   return reverse(str);
// }

// console.log(reverseString("hello"));

// 9)function addNumbers(a, b) {
//   function add(x, y) {
//     return x + y;
//   }
//   return add(a, b);
// }

// console.log(addNumbers(15, 25));

// 10)function multiplier() {
//   return function(num) {
//     return num * 10;
//   };
// }

// let multiplyByTen = multiplier();
// console.log(multiplyByTen(7));

// 11)function sumArray(arr) {
//   let sum = 0;
//   let i = 0;
//   while (i < arr.length) {
//     sum += arr[i];
//     i++;
//   }
//   return sum;
// }

// console.log(sumArray([3, 6, 9, 12]));

// 12)let students = ["Tarun", "Anjali", "Rahul", "Sneha", "Vikram"];
// let i = 0;
// while (i < students.length) {
//   console.log(students[i]);
//   i++;
// }

// 13)function containsElement(arr, element) {
//   let i = 0;
//   while (i < arr.length) {
//     if (arr[i] === element) {
//       return true;
//     }
//     i++;
//   }
//   return false;
// }

// console.log(containsElement([1, 3, 5, 7, 9], 5));
// console.log(containsElement([1, 3, 5, 7, 9], 2));

// 14)function removeLast(arr) {
//   arr.length = arr.length - 1;
//   return arr;
// }

// console.log(removeLast([10, 20, 30, 40]));

// 15)function arrayLength(arr) {
//   return arr.length;
// }

// console.log(arrayLength([1, 2, 3, 4, 5]));

// 16)function countVowels(str) {
//   let vowels = "aeiouAEIOU";
//   let count = 0;
//   let i = 0;
//   while (i < str.length) {
//     if (vowels.includes(str[i])) {
//       count++;
//     }
//     i++;
//   }
//   return count;
// }

// console.log(countVowels("Hello World"));

// 17)function toUpperCase(str) {
//   return str.toUpperCase();
// }

// console.log(toUpperCase("hello world"));

// 18)function isPalindrome(str) {
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

// console.log(isPalindrome("madam"));
// console.log(isPalindrome("hello"));

// 19)function joinStrings(str1, str2) {
//   return str1 + " " + str2;
// }

// console.log(joinStrings("Hello", "World"));

// 20)function countWords(sentence) {
//   sentence = sentence.trim();
//   if (sentence === "") {
//     return 0;
//   }
//   let count = 1;
//   let i = 0;
//   while (i < sentence.length) {
//     if (sentence[i] === " ") {
//       while (i < sentence.length && sentence[i] === " ") {
//         i++;
//       }
//       count++;
//     } else {
//       i++;
//     }
//   }
//   return count;
// }

// console.log(countWords("This is a sample sentence"));

// 21)let car = {
//   make: "Toyota",
//   model: "Camry",
//   year: 2021,
//   color: "Blue"
// };

// console.log(car);

// 22)let book = {
//   title: "The Alchemist",
//   author: "Paulo Coelho",
//   numberOfPages: 197
// };

// console.log(book.title);
// console.log(book.author);
// console.log(book.numberOfPages);

// 23)let movie = {
//   name: "Inception",
//   director: "Christopher Nolan",
//   releaseYear: 2010
// };

// movie.releaseYear = 2012;

// console.log(movie);

// 24)let phone = {
//   brand: "Samsung",
//   model: "Galaxy S21",
//   price: 799
// };

// phone.color = "Phantom Black";

// console.log(phone);

// 25)let city = {
//   name: "Hyderabad",
//   population: "10 million",
//   country: "India"
// };

// console.log(city.name + " is a city in " + city.country + " with a population of " + city.population + ".");
