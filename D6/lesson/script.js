// Introduction to Arrays

// Creating an Array - group related elements together
let fruits = ["apple", "banana", "orange"];

// Accessing Array Elements
console.log("First fruit: ", fruits[0]);
console.log("Second fruit: ", fruits[1]);
console.log("Third fruit: ", fruits[2]);

// Topic: Modifying Arrays
fruits[1] = "grape";
console.log(fruits);
fruits.push("strawberry"); // Adds strawberry as the last element
fruits.pop(); // Removes the last element
console.log("Modified Array: ", fruits);

// Array Iteration
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Array ForEach method
let colors = ["red", "green", "blue"];
colors.forEach(function (color) {
  console.log(color);
});

// Methods and Properties

//length
console.log("Array length numbers: ", numbers.length);

// indexOf
console.log("Index of number 3: ", numbers.indexOf(3));

// includes
console.log("Includes 5: ", numbers.includes(5));

// join
console.log("Joined Array", numbers.join(" - "));

// slice
let slicedArray = numbers.slice(1, 4);
console.log(slicedArray);
