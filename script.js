// To access an HTML element with a given id name, you can use the getElementById() method.

const calorieCounter = document.getElementById("calorie-counter");
const budgetInput = document.getElementById("budget");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryBtn = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");

let isError = false;

function cleanInputString(str) {
  // const strArray = str.split('');
  // const cleanStrArray = [];
    
  // for (let i = 0; i < strArray.length; i++) {
  //   if (!["+", "-", " "].includes(strArray[i])) { //I'm still confused on how args are passed. The array is being checked if split array char is present?
  //     cleanStrArray.push(strArray[i])
  //   }
  // }
  const regex = /[+-\s]/g; // \s = shorthand for white space [] = character set g = global search
  return str.replace(regex, "");
}
// Note that you need to use the \ to escape the +, because a + has a special meaning in regular expressions.
// ".replace" takes two arguments. The first is the character sequence to replace – this can either be a string or a regex pattern. 
// The second is the string to replace that sequence with. "example".replace(regex, "") = replace with nothing
