// Exercise 9)
// Write a program that will check if two strings are palindromes. A palindrome is a word that spells the same forward and backward.
// Palindrome: a word, phrase, or sequence that reads the same backward as
// forward, e.g., madam or nurses run.

let str3 = "racecar";
let str4 = "Java";
// Example output:
// string1 palindrome?:
// Yes
// string2 palindrome?:
// No
let strings = [str3, str4];

for (let i = 0; i < strings.length; i++) {
  let str = strings[i];
  let reversed = str.split("").reverse().join("");
  console.log(`string${i + 1} palindrome?:`);
  if (str === reversed) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
