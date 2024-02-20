// To access an HTML element with a given id name, you can use the getElementById() method.

const calorieCounter = document.getElementById("calorie-counter");
const budgetInput = document.getElementById("budget");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryBtn = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");

let isError = false;
addEntryBtn.addEventListener('click', addEntry);
calorieCounter.addEventListener('submit', calculateCalories);

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
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
  const HTMLString = `<label for="${targetId}-${entryNumber}-name">Entry ${entryNumber} Name</label>
                      <input id="${targetId}-${entryNumber}-name" placeholder="Name" type="text" />
                      <label for="${targetId}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
                      <input type="number" id="${targetId}-${entryNumber}-calories" placeholder="Calories" min="0" />
                      `;
  targetInputContainer.insertAdjacentElement('beforeend', HTMLString);
}

function getCaloriesFromInputs(list) {
  let calories = 0;
  for (const item of list) {
    const currVal = cleanInputString(item.value);
    const invalidInputMatch = isInvalidInput(currVal);
    if (invalidInputMatch) {
      alert(`Invalid Input: ${invalidInputMatch[0]}`)
      isError = true;
      return null;
    }
    calories += Number(currVal);
  }
return calories;
}

function calculateCalories(e) {
  e.preventDefault();
  isError = false;

  const breakfastNumberInputs = document.querySelectorAll(`#breakfast input[type=number]`);
  const lunchNumberInputs = document.querySelectorAll(`#lunch input[type=number]`);
  const dinnerNumberInputs = document.querySelectorAll(`#dinner input[type=number]`);
  const snacksNumberInputs = document.querySelectorAll(`#snacks input[type=number]`);
  const exerciseNumberInputs = document.querySelectorAll(`#exercise input[type=number]`);

  const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
  const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
  const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
  const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
  const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);

  if (isError) {
    return;
  }

  const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
  const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
  const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Deficit';

  output.innerHTML = `<span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
                      <hr>
                      <p>${budgetCalories} Calories Budgeted</p>
                      <p>${consumedCalories} Calories Consumed</p>
                      <p>${exerciseCalories} Calories burned</p>
                     `;
  output.classList.remove('hide');
}

function clearForm() {
  const inputContainers = Array.from(document.querySelectorAll('.input-container'));

  for (const container of inputContainers) {
    container.innerHTML = '';
  }
  budgetInput.value = '';
  output.innerText = '';
  output.classList.add('hide');
}