// Step 1: Declare a function named isEven that takes a number as a parameter and returns true if the number is even and false otherwise.

const isEven = function (number) {
  return number % 2 === 0;
};

// Step 2: Use a for loop to iterate from 0 to 10. Call the isEven function for each iteration and log the result to the console.

for (let i = 0; i <= 10; i++) {
  const result = isEven(i);
  console.log(`${i}: ${result}`);
}

// Step 3: Declare a function named multiply that takes two numbers as parameters and returns their product.

const multiply = function (number1, number2) {
  return number1 * number2;
};

// Step 4: Use a while loop to repeatedly prompt the user to enter two numbers and calculate their product using the multiply function. Log the result to the console. Terminate the loop when the user enters a negative number as any of the inputs.

let number1 = 1,
  number2 = 1;

while (number1 > 0 && number2 > 0) {
  number1 = parseInt(prompt("Enter first number: "));
  number2 = parseInt(prompt("Enter second number: "));
  const product = multiply(number1, number2);
  console.log(`Product: ${product}`);
}

// Step 5: Declare a function named reverseString that takes a string as a parameter and returns the reversed version of the string.

const reverseString = function (word) {
  return word.split("").reverse().join("");
};

// Step 6: Call the reverseString function with the string 'hello' and log the result to the console.

console.log(reverseString("hello"));

// Step 7: Declare a function named countVowels that takes a string as a parameter and returns the number of vowels in the string.

const countVowels = function (word) {
  return word.match(/[aeiou]/gi).length;
};

// Step 8: Call the countVowels function with the string 'JavaScript' and log the result to the console.

console.log("Vowels", countVowels("JavaScript"));

// Step 9: Declare a function named findMax that takes an array of numbers as a parameter and returns the maximum value in the array.

const findMax = function (arr) {
  return Math.max(...arr);
};

// Step 10: Call the findMax function with the array [4, 9, 2, 7, 5] and log the result to the console.

console.log("Maximum Value: ", findMax([4, 9, 2, 7, 5]));

// Step 11: Declare a function named calculateFactorial that takes a number as a parameter and returns its factorial value.

const calculateFactorial = function (number) {
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  return factorial;
};

// Step 12: Call the calculateFactorial function with the number 5 and log the result to the console.

console.log(`Factorial of 5: ${calculateFactorial(5)}`);

// Step 13: Declare a function named isPalindrome that takes a string as a parameter and returns true if the string is a palindrome and false otherwise.

const isPalindrome = function (word) {
  return word === reverseString(word);
};

// Step 14: Call the isPalindrome function with the string 'level' and log the result to the console.

console.log("Is level a Palindrome: ", isPalindrome("level"));

// Step 15: Declare a function named sumArray that takes an array of numbers as a parameter and returns the sum of all the numbers in the array.

const sumArray = function (numbers) {
  const sum = numbers.reduce((number, next) => {
    return number + next;
  });
  return sum;
};

// Step 16: Call the sumArray function with the array [1, 2, 3, 4, 5] and log the result to the console.

console.log("Sum of Array: ", sumArray([1, 2, 3, 4, 5]));

// Step 17: Declare a function named capitalizeFirstLetter that takes a string as a parameter and returns the string with the first letter capitalized.

const capitalizeFirstLetter = function (word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

// Step 18: Call the capitalizeFirstLetter function with the string 'javascript' and log the result to the console.

console.log("First Letter Capital: ", capitalizeFirstLetter("javascript"));

// Step 19: Declare a function named filterEvenNumbers that takes an array of numbers as a parameter and returns a new array with only the even numbers.

const filterEvenNumbers = function (numbers) {
  return numbers.filter(number => number % 2 === 0);
};

// Step 20: Call the filterEvenNumbers function with the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and log the result to the console.
console.log(
  "Filtered Array",
  filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
);
