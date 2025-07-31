// Exercise 4)
// Given two arrays of integers. Add up each element in the same position and
// create a new array containing the sum of each pair. Assume both arrays are of the same length.

let arr_3 = [4, 6, 7];
let arr_4 = [8, 1, 9];
// Example output:
// [12, 7, 16]
let newSum = [];
for (let i = 0; i < arr_3.length; i++) {
  newSum.push(arr_3[i] + arr_4[i]);
}
console.log(newSum);
