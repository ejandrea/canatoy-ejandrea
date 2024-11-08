const secretNumber = Math.floor(Math.random() * 10 + 1);

let attempts = 0;
let guessedNumber = null;

console.log("Welcome to the Guess the Secret Number Game!");

do {
  guessedNumber = parseInt(prompt("Enter a guess from 1 to 10: "));

  attempts++;
  console.log("Guess: ", guessedNumber);

  if (guessedNumber < secretNumber) {
    console.log("Too low! Try again.");
  } else if (guessedNumber > secretNumber) {
    console.log("Too high! Try again.");
  } else {
    console.log(
      "Congratulations! You guessed the correct number: ",
      secretNumber
    );
    console.log(`It took you ${attempts} attempts.`);
  }
} while (guessedNumber !== secretNumber);
