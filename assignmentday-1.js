// 1)What is variable in JavaScript?
// A variable is a container used to store data values.

// 2)How do you declare a variable using var? Give an example.
// Wecan declare a variable using var keyword followed by the variable name and assign it to a value.
// Example: var name ="Tarun";
//          console.log(name)

// 3)What is the difference between let and const?
// The difference between 'let' and 'const' is:
// ->We can reassign the 'let' but we cannot redeclare
// ->In 'const' we cannot reassign and redeclare.

// 4)Can you reassign a value to a variable declare with const? Explain.
// We cannot reassign a value to a variable declare with 'const'. Because when we assign a value to a
//  variable declared with 'const' the value is fixed to that variable so we cannot reassign a value.

// 5)What will happen if you use a variable before declaring it with let?
// if we use a variable before declaring it with 'let' we will get a Reference error.
// Because variables declared with 'let' are hoisted but not initialized.

// 6)What is variable hoisting? How does it work with var.
// ->Variable hoisting is Java Script behaviour where variable and function declarations are moved to the top of their scope during the compilation phase.
// ->When you declare a variable using 'var' JavaScript hoists the declaration to the top of its function or global scope.


// 7)Write a code snippet that shows the block scope of let?
// let name = "Tarun";
// {
// let name = "venkat";
// console.log("Inside Block: ",name);
// }
// console.log("Outside Block: ",name);

// Output: Indise Block: venkat
//         Outside Block: Tarun


// 8)Is it possible to declare multiple variables in single line? show how.
// We can declare multiple variables in a single line using commas(,)
// Example:
// let a=1,b=2,c=3;
// console.log(a,b,c);


// 9)What is the default value of uninitialized variable in JavaScript?
// Undefined


// 10)What is the diffrence between global variable and local variable? Give examples.
// ->Global variables are accessible to entire program.
// ->Local variables are accessible to a particular function or block
// Example: Global variable
// let global = "global";
// function showglobal{
// console.log(global);
// }
// Output:global

// Local variable
// function Hello(){
// let local = "local";
// console.log(local);
// }
// Hello();
// Output: local

