// Exercise 10)
// This is a code wars kata. click here to train on “Grasshopper – Summation” on
// code wars. Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

let num1 = 2;
let num2 = 8;
// Example output:
// 1 + 2 = 3
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36
let summation = 0;
for (let i = 1; i <= num1; i++) {
  summation += i;
}
console.log(summation);
