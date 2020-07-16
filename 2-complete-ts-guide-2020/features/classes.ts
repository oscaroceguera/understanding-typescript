class Vehicle {
  constructor(public color: string) {}

  protected hoonk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('green');
console.log('vehicle', vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, public color: string) {
    super('red');
  }
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.hoonk();
  }
}

const car = new Car(2, 'purple');
car.startDrivingProcess();
car.hoonk();
