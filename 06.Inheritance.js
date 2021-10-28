// In object-oriented programming, inheritance is the mechanism of basing an object or class upon another object (prototype-based inheritance) or class (class-based inheritance), retaining similar implementation
// Whenever we have a generic class (super class) and we want to create children (sub) classes, we can use inheritance

// BASE CLASS
class Animal {
  // Static properties, they will never change and they are specific to this class, not to a particular sub-class
  static planet = "Earth";
  static kingdom = "Animalia";

  // Constructor, will be called when creating a new object using the "Animal class"
  constructor(name, continent) {
    this.name = name;
    this.continent = continent;
  }

  // Method
  animalDetails() {
    return `We have a living being from the ${Animal.kingdom} kingdom. It lives on planet ${Animal.planet}, on the ${this.continent} and it's called ${this.name}. `;
  }

  // Static method, only accessible on the class and not on instances
  static checkForDoubles(theAnimal) {
    return `The ${theAnimal} is not yet in the database!`;
  }
}
