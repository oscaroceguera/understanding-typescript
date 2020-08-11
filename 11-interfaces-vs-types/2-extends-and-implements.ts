/*
  In TypeScript, we can easily extend and implement interfaces.
  This is not possible with types though.

  Interfaces in TypeScript can extend classes, this is a very awesome
  concept that helps a lot in a more object-oriented way of programming.
  We can also create classes implementing interfaces.

  For example, let’s imagine that we have a class called Car and an
  interface called NewCar, we can easily extend this class using an interface:
*/

class Car {
  printCar = () => {
    console.log("this is my car");
  };
}

interface NewCar extends Car {
  name: string;
}

class NewestCar implements NewCar {
  name: "car";
  constructor(engine: string) {
    this.name = name;
  }

  printCar = () => {
    console.log("this is my car");
  };
}
