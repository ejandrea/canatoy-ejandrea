// Variables

let name = "John";
name = "Paul";

const temp = 100;

// Outputting Variables
// console.log(name);
// console.log(temp);

// Basic Syntax
let x = 5;
let y = 10;
let sum = x + y;
// console.log(sum);

/**Primitive types: Most basic types
 * 
 * Number: Represents numeric values. For example, 5, 3.14, -10.

String: Represents textual data enclosed in single ('') or double ("") quotes. For example, "Hello", 'JavaScript'.

Boolean: Represents either true or false (logical values).

Null: Represents the intentional absence of any object value.

Undefined: Represents an uninitialized or missing value.
 **/

let userName = "John"; //string
let age = 25; //number
let isStudent = true; //boolean
let car = null; //null
let city; //undefined

// Outputting Data Types
console.log("Type of name: ", typeof name);
console.log("Type of age:", typeof age);
console.log("Type of isStudent:", typeof isStudent);
console.log("Type of car:", typeof car);
console.log("Type of city:", typeof city);

// Operators and Expressions
// Arithmetic Operators

let num1 = 5;
let num2 = 2;

let numberSum = num1 + num2;
console.log("Sum: ", numberSum);

let difference = num1 - num2;
console.log("Difference:", difference);

let product = num1 * num2;
console.log("Product:", product);

let quotient = num1 / num2;
console.log("Quotient:", quotient);

let remainder = num1 % num2;
console.log("Remainder:", remainder);

// Assignment Operator
let a = 10;
let b = 5;

a += b;
console.log("a: ", a); // 15

a -= b;
console.log("a: ", a); // 10

a *= b;
console.log("a:", a); // 50

a /= b;
console.log("a:", a); // 10

// Comparison operators
let p = 3;
let q = 6;

console.log("p > q:", p > q); // false

console.log("p >= q:", p >= q); // false

console.log("p < q:", p < q); // true

console.log("p < q:", p <= q); // true

console.log("p == q:", p == q); // false

console.log("p === q:", p === q); // false

console.log("p !== q:", p !== q); // true

// Logical Operators
let sunny = true;
let warm = false;

console.log("True and False: ", sunny && warm); // false
console.log("True and True: ", sunny && sunny); // false
console.log("True or False: ", sunny || warm); // true
console.log("Not True: ", !sunny); // false
