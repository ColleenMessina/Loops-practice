// Exercise 8)
// Write a program that will allow someone to guess a four digit pin exactly 4
// times. If the user guesses the number correctly. It prints “That was
// correct!” Otherwise it will print “Sorry that was wrong.” Program stops after the 4th attempt of if they got it right.

let pin = 1704;
// Example output:
// Please make your guess:
// 4544
// Sorry that was wrong.
// Please make your guess:
// 4444
// Sorry that was wrong.
// Please make your guess:
// 0704
// That was correct!
let guesses = [4544, 4444, 1704, 1234];
for (let i = 0; i < guesses.length && i < 4; i++) {
  if (guesses[i] === pin) {
    console.log("That was correct!");
    break;
  } else {
    console.log("Sorry that was wrong.");
  }
}
