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

function isInvalidInput(str) {
  // const regex = /[0-9]+e[0-9]+/i;
  const regex = /\d+e\d+/i; // \d = shorthand for digit, sub for [0-9]
  return str.match(regex);
}

function addEntry() {
  const targetId = '#' + entryDropdown.value;
  const targetInputContainer = document.querySelector(`${targetId} .input-container`);
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length;
  const HTMLString = `<label for="${targetId}-${entryNumber}-name">Entry ${entryNumber} Name</label>
                      <input id="${targetId}-${entryNumber}-name" placeholder="Name" type="text" />
                      <label for="${targetId}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
                      <input type="number" id="${targetId}-${entryNumber}-calories" placeholder="Calories" min="0" />
                      `;
  targetInputContainer.innerHTML += HTMLString;
}