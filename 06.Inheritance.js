// In object-oriented programming, inheritance is the mechanism of basing an object or class upon another object (prototype-based inheritance) or class (class-based inheritance), retaining similar implementation
// Whenever we have a generic class (super class) and we want to create children (sub) classes, we can use inheritance

// BASE CLASS
class Animal {
  // Static properties, they will never change and they are specific to this class, not to a particular sub-class
  static planet = "Earth";
  static kingdom = "Animalia";

  // Constructor, will be called when creating a new object using the "Animal class"
  constructor(name, continent) {
    // Both properties will be inherited by the children classes also

    this._name = name;
    this._continent = continent;
  }

  // Method that will be inherited by the children classes also
  animalDetails() {
    return `We have a living being from the ${Animal.kingdom} kingdom. It lives on planet ${Animal.planet}, on the ${this.continent} and it's called ${this._name}. `;
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
    // for everything to work, we need to call the super function which basically means calling the parent's class constructor
    // we don't need to specify the inherited props again, just the ones specific to the child class
    super(name, continent);

    this._age = age;
    this._species = species;
  }

  // Method that's only accessible for the Dog class
  dogDetails() {
    `This dog's name is ${this._name} and it is ${this._age} years old!`;
  }
}

// We create an instance of an animal
const animal1 = new Animal("vertebrates", "global");
// We create an instance of a dog
const dog1 = new Dog("chiwawa", "America", 5, "Canis familiaris");
console.log(animal1); // returns Animal { _name: 'vertebrates', _continent: 'global' }
console.log(dog1); // returns Dog {_name: 'chiwawa', _continent: 'America', _age: 5, _species: 'Canis familiaris'}
console.log(dog1.animalDetails()); // returns We have a living being from the Animalia kingdom. It lives on planet Earth, on the undefined and it's called chiwawa.
console.log(animal1.dog()); // TypeError: animal1.dog is not a function
