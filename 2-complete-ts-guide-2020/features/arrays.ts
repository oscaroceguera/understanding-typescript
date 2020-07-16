const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsBymake: string[][] = [];

// help with intterface when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Preveent incompatible values
carMakers.push(100);

// help with map
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
