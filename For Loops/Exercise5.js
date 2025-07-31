// Exercise 5)
// Given a string change the every second letter to an uppercase ‘Z’. Assume
// there are no space.

let str1 = "javascript";
// Example output:
// jZvZsZrZpZ OR each letter on a new line
// HINT: You can use  if((i+1) % 2 == 0) to check for even indexes
let result = "";
for (i = 0; i < str1.length; i++) {
  result += (i + 1) % 2 == 0 ? "Z" : str1[i];
}
console.log(result);
