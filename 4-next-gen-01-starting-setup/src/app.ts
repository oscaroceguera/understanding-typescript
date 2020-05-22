const add = (a: number, b: number = 1) => a + b;

const printOutput: (a: number | string) => void = output => console.log(output)

const btn = document.querySelector('button')

if (btn) {
  btn.addEventListener('click', event => console.log(event))
}

printOutput(add(5))

const hobbies = ['sports', 'cooking']

const activeHobbies = ['hiking']

activeHobbies.push(...hobbies);
console.log("activeHobbies", activeHobbies)

const person = {
  name: 'oscar',
  age: 35
}

const copiedPerson = { ...person }

const addNum = (...numbers: number[]) => {
  return numbers.reduce((currentResult, currentValue) => {
    return currentResult + currentValue;
  }, 0);
}

const addedNumbers = addNum(5, 6, 34, 223, 55, 34.23, 233.554, 643, 5);
console.log("addedNumbers", addedNumbers)
