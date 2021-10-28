//
//
//
// 1. Accessing static properties and methods from inside other static methods
// This is done by using the "this" keyword
class Person {
  static age = 25;
  static name = "Alan";

  static details() {
    return `He is ${this.name} and he is ${this.age} years old!`;
  }
}

// Keep in mind, we access the method DIRECTLY on the class, since it's static
console.log(Person.details()); // returns He is Alan and he is 25 years old!
//
//
//
// 2. Accessing static properties and methods from inside the constructor or other methods of that class
// This can't be done by using the "this" keyword
// We need to call them using the class name: CLASSNAME.STATIC_METHOD_NAME() / CLASSNAME.STATIC_PROPERTY_NAME
// OR by calling the method as a property of the constructor: this.constructor.STATIC_METHOD_NAME() / this.constructor.STATIC_PROPERTY_NAME
class StaticMethodCall {
  constructor() {
    console.log(StaticMethodCall.staticProperty); // 'static property'
    console.log(this.constructor.staticProperty); // 'static property'
    console.log(StaticMethodCall.staticMethod()); // 'static method has been called.'
    console.log(this.constructor.staticMethod()); // 'static method has been called.'
  }

  static staticProperty = "static property";
  static staticMethod() {
    return "static method has been called.";
  }

  get staticProperty() {
    return StaticMethodCall.staticProperty;
  }
}

console.log(StaticMethodCall.staticMethod()); // returns "static method has been called."
const newStaticMethodInstance = new StaticMethodCall(); // the constructor is called and all console.logs are called also
// returns "static property"
// "static property"
// "static method has been called."
// "static method has been called."
console.log(newStaticMethodInstance.staticProperty); // returns "static property" since we created a getter that has access to the static property called staticProperty and returns it
//
//
//
//
// Inheritance of static properties and methods
// Static properties and methods are inherited from the super class (more on inheritance later)
class Animal {
  static planet = "Earth";

  constructor(name, speed) {
    this.speed = speed;
    this.name = name;
  }

  run(speed = 0) {
    this.speed += speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }

  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }
}

// Inherit from Animal
class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }
}

const rabbit1 = new Rabbit("Jo", 12);
const rabbit2 = new Rabbit("Alex", 10);

console.log(Rabbit.compare(rabbit1, rabbit2)); // returns 2
/* console.log(rabbit1.compare(rabbit1, rabbit2)); */ // TypeError: rabbit1.compare is not a function
console.log(rabbit2.name); // returns "Alex"
