// Exercise 6)
// Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.

let str2 = "don't know why";
// Example output:
// “yes”
let found = false;
for (let i = 0; i < str2.length; i++) {
  if (str2[i] === "y") {
    found = true;
    break;
  }
}
console.log(found ? "yes" : "no");
