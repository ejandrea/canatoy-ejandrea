// Step 1: Create an array called 'students' with three objects representing student information.

// Each student object should have properties: 'name', 'age', and 'grade'.

const students = [
  {
    name: "John Smith",
    age: 21,
    grade: 90,
  },
  {
    name: "Ellie Jackson",
    age: 20,
    grade: 91,
  },
  {
    name: "Ray Swift",
    age: 25,
    grade: 85,
  },
];

// Step 2: Access the name of the second student in the 'students' array and log it to the console.

console.log(students[1].name); // Logs Ellie Jackson

// Step 3: Add a new student object to the 'students' array.
// The new student should have properties: 'name', 'age', and 'grade'.

students.push({
  name: "Marie White",
  age: 22,
  grade: 80,
});

// Step 4: Loop through the 'students' array and log each student's name and grade to the console.

students.forEach(student => {
  console.log(`${student.name}'s grade is ${student.grade}`);
});

// Step 5: Create an object called 'book' with properties 'title', 'author', and 'year'.

const book = {
  title: "Kafka on the Shore",
  author: "Haruki Murakami",
  year: 2002,
};

// Step 6: Access the title of the 'book' object and log it to the console.

console.log(`Book Title: ${book.title}`);

// Step 7: Update the 'year' property of the 'book' object to 1930.

book.year = 1930;
console.log(`Updated year (book): ${book.year}`);

// Step 8: Create a method called 'getSummary' for the 'book' object.
// The method should return a string summarizing the book's title, author, and year.

const getSummary = function () {
  return `The book ${book.title}, written by ${book.author}, was published in ${book.year}`;
};

// Step 9: Call the 'getSummary' method of the 'book' object and log the result to the console.

console.log(getSummary());

// Step 10: Create an array called 'library' and add the 'book' object to it.

const library = book;

// Step 11: Log the 'library' array to the console to verify the book is stored in the array.

console.log("Library Array", library);

// Step 12: Create an object called 'car' with properties 'brand', 'model', and 'year'.

const car = {
  brand: "Audi",
  model: "A3",
  year: 2024,
};

// Step 13: Access the 'model' property of the 'car' object and log it to the console.

console.log(`Car model: ${car.model}`);

// Step 14: Update the 'year' property of the 'car' object to 2023.

car.year = 2023;
console.log(`Updated year (car): ${car.year}`);

// Step 15: Create a method called 'startEngine' for the 'car' object.
// The method should log a message to the console indicating that the car's engine is starting.

car["startEngine"] = function () {
  console.log(`${this.brand} ${this.model}'s engine is starting.`);
};

// Step 16: Call the 'startEngine' method of the 'car' object.

car.startEngine();

// Step 17: Create an array called 'garage' and add the 'car' object to it.

const garage = car;

// Step 18: Log the 'garage' array to the console to verify the car is stored in the array.

console.log("Garage Array: ", garage);

// Step 19: Create an object called 'person' with properties 'name', 'age', and 'city'.

const person = {
  name: "Ana Cruz",
  age: 21,
  city: "Manila",
};

// Step 20: Access the 'age' property of the 'person' object and log it to the console.

console.log(`${person.name}'s age is ${person.age}`);

// Feel free to add more steps or customize the activity according to your needs.
