// Polymorphism takes advantage of inheritance in order to make this happen
// In simple terms, it means the ability of objects to share behaviours and be able to override those behaviours when needed

// Base class
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // This will be inherited by the child class
  makeASound() {
    console.log("This is a basic animal sound!");
  }

  // This will be inherited by the child class
  printdetails() {
    console.log(
      `This is an animal called ${this.name} and it's ${this.age} old`
    );
  }
}

// Child class
class Cat extends Animal {
  constructor(name, age) {
    super(name, age);
  }

  // Here, we override the base class function with the same name
  makeASound() {
    console.log("This is a basic cat sound!");
  }
  printdetails() {
    // We can call the base class function too, calling it on the constructor
    // This will result in both functions getting called: the one on the base class and the one on the instance
    super.printdetails();
    console.log(
      `This is an animal called ${this.name} and it's ${this.age} old and it's actually a cat!`
    );
  }
}

const animal1 = new Animal("Pepe", 4);
const cat1 = new Cat("Jenny", 4);

console.log(animal1.makeASound()); // returns "This is a basic animal sound!"
console.log(cat1.makeASound()); // returns "This is a basic cat sound!"
console.log(cat1.printdetails()); // returns
