interface Car {
  model: string;
}

interface Truck extends Car {
  load: number;
}

interface F1 extends Car {
  acceleration: number;
}

function carIsTruck(car: Truck | F1): car is Truck {
  return 'load' in car;
}

function scanCar(car: Truck | F1) {
  if(carIsTruck(car)) {
    // Only truck properties will be suggested
    console.log(`Truck has a load of ${car.load}`)
  } else {
    // Only F1 properties will be suggested
    console.log(`F1 has acceleration of ${car.acceleration}`)
  }
}

scanCar({
  model: 'toyota',
  load: 100
})
scanCar({
  model: 'toyota',
  acceleration: 500
})