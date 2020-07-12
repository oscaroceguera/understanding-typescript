type Admin = {
  name: string;
  privileges: string[];
}

type Employee = {
  name: string;
  startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Oscar",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  }

  return a + b
}

const result = add('oscar', 'oce');
result.split(' ')

const fetchUserData = {
  id: 'u1',
  name: 'Max',
  job: {title: 'CEO', description: 'My own company'}
}
console.log("fetchUserData", fetchUserData?.job?.title)

const userInput = '';

const storeData = userInput ?? 'DEFAULT';

console.log(storeData)

type UnknowEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknowEmployee) {
  console.log('Name: ' + emp.name)
  if ("privileges" in emp) {
    console.log("Privileges: ", emp.privileges);
  }
  if ('startDate' in emp) {
    console.log("startDate: ", emp.startDate);
  }
}

printEmployeeInformation({ name: 'Manu', startDate: new Date() });

class Car {
  drive() {
    console.log('Driving...')
  }
}

class Truck {
  drive() {
    console.log('Driving a Truck...')
  }

  loadCargo(amount: number) {
    console.log('Loading cargo ...', amount)
  }
}

type Vehicle = Car | Truck
const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle) {
  vehicle.drive()
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2)

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal) {
  // if ("flyingSpeed" in animal) { 
  //   console.log("Moving with speed: " + animal.flyingSpeed);
  // }

  // if ("runningSpeed" in animal) {
  //   console.log("Moving with speed: " + animal.runningSpeed);
  // }
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed
      break;
    case 'horse':
      speed = animal.runningSpeed
      break;
  }
  console.log('Moving at speed: ' + speed)
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

// const useInputElement = <HTMLInputElement>document.getElementById("user-input")!;
const useInputElement = document.getElementById("user-input")! as HTMLInputElement;

useInputElement.value = 'Hi there!'

interface ErrorContainer { // {email: 'not a valid email', username: 'must start ...'}
  [prop: string]: string
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email!',
  username: 'Must start with a capital character!'
}