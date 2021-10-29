// In object-oriented programming, inheritance is the mechanism of basing an object or class upon another object (prototype-based inheritance) or class (class-based inheritance), retaining similar implementation
// Whenever we have a generic class (super class) and we want to create children (sub) classes, we can use inheritance

// BASE CLASS
class Animal {
  // Static properties, they will never change and they are specific to this class, not to a particular sub-class
  static planet = "Earth";
  static kingdom = "Animalia";

  // Constructor, will be called when creating a new object using the "Animal class"
  constructor(name, continent) {
    this._name = name;
    this._continent = continent;
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

class Dog extends Animal {
  // we call the constructor, as usually
  // we have the same properties as the parent class + others specific to the child class (age, species)
  constructor(name, continent, age, species) {
    // foe everything to work, we need to call the super function which basically means calling the parent's class constructor
    super(name, continent);

    this._age = age;
    this._species = species;
  }
}
