// Task 1: Use arrow functions to calculate the square of a given number and log the result to the console.

const squareOfNum = num => num * num;
const squareOfFour = squareOfNum(4);
console.log(`The square of four is: ${squareOfFour}`);

// Task 2: Use template literals to create a welcome message that includes the name and age of a person.
const userName = prompt("What is your name? ");
const userAge = prompt("How old are you?");
console.log(`Hello ${userName}, you are ${userAge} years old.`);

// Task 3: Use destructuring to extract the first and last name from a person object and log them to the console.
const person = {
  firstName: "John",
  lastName: "Maxwell",
};
const { firstName, lastName } = person;
console.log(`Full Name is: ${firstName} ${lastName}`);

// Task 4: Use the spread operator to merge two arrays into a single array.
const fruits = ["apple", "orange", "mango"];
const vegetables = ["Cabbage", "Eggplant", "Onion"];

const merged = [...fruits, ...vegetables];
console.log("Merged Array: ", merged);

// Task 5: Use default parameters to create a function that calculates the area of a rectangle.

const areaOfRectangle = (length = 1, width = 1) => length * width;
console.log("Area of rectangle using default values: ", areaOfRectangle());

// Task 6: Create a class called "Person" with properties for name and age, and a method to introduce the person. Instantiate an object of the class and call the introduce method.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greetUser = () => `Hello ${this.name}! You are ${this.age} years old.`;
}

const person1 = new Person("Perry Smith", 22);
console.log(person1.greetUser());
