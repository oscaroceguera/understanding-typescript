/*
  In TypeScript, we can easily extend and implement interfaces.
  This is not possible with types though.

  Interfaces in TypeScript can extend classes, this is a very awesome
  concept that helps a lot in a more object-oriented way of programming.
  We can also create classes implementing interfaces.

  For example, let’s imagine that we have a class called Car and an
  interface called NewCar, we can easily extend this class using an interface:
*/
var Car = /** @class */ (function() {
  function Car() {
    this.printCar = function() {
      console.log("this is my car");
    };
  }
  return Car;
})();
var NewestCar = /** @class */ (function() {
  function NewestCar(engine) {
    this.printCar = function() {
      console.log("this is my car");
    };
    this.name = name;
  }
  return NewestCar;
})();
