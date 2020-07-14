let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// array
let colors: string[] = ['rojo', 'verde'];
let myNumbers: number[] = [1, 2, 3, 4, 4];
let truths: boolean[] = [true, false, true];

// clases
class Car {}
let car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log('logNumber -> i', i);
};

// When to use anotations
// 1) Function that return the any type
const json = '{"x": 20, "y": 23}';
const coord: { x: number; y: number } = JSON.parse(json);
console.log('coord', coord);

// 2) when we declare a variable on one line and initalizate it later
let words = ['red', 'greee', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3 variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
