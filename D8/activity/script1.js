// Calculate the square root of a given number
const squareRoot = number => Math.sqrt(number);

const squareRootOfFour = squareRoot(4);

console.log(`The square root of 4 is: ${squareRootOfFour}`);

// Generate a random number between 1 and 10

const generateRandomNumber = () => Math.floor(Math.random() * 10 + 1);

console.log("Random Numbers from 1-10: ----");

console.log("Random Number 1: ", generateRandomNumber());
console.log("Random Number 2: ", generateRandomNumber());
console.log("Random Number 3: ", generateRandomNumber());

// Convert a string representation of a number to an actual number

const convertToInt = numberString => parseInt(numberString);

const testConvertToInt = convertToInt("-2");
console.log(
  `-2 Converted to int is ${testConvertToInt}. Its type is ${typeof testConvertToInt}`
);

// Check if a value is not a number

const checkIfNum = n => !isNaN(n);

const testCheckIfNum = checkIfNum("abcde");
console.log("Is abcde a number? ", testCheckIfNum);

const testCheckIfNum2 = checkIfNum(2.88);
console.log("Is 2.88 a number? ", testCheckIfNum2);

// Convert a number to a string

const convertToString = n => `${n}`;

const testConvertToString = convertToString(2);
console.log(
  "Type of number 2 Converted to String is:",
  typeof testConvertToString
);
