// Like static methods, static properties can't be called on instances of the class. Instead, they're called on the class itself
// Static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances

class Person {
  constructor() {}

  // Like static methods, static properties must be places under the constructor
  // Static properties
  static species = "human";
  static planet = "Earth";
  static status = "alive";

  // Static method
  static staticMethod() {
    return "static method has been called.";
  }
}

const person1 = new Person();
console.log(person1.species); // Incorrect, returns undefined - we're trying to access a static method on an instance
console.log(Person.species); // Correct, returns "human"
console.log(Person.staticMethod()); // returns "static method has been called."
