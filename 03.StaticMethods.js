// Satic methods are methods that can only be called on the class itself and not on an instance of that class
// They are usefull when we build utilily classes (classes that group multiple helper methods together)
// They are helper function relevant to the class but they don't requite an instance of that classto work (it will actuallt throw an error if we try to access it from an instance)
// Usually, static methods are used to implement functions that belong to the class, but not to any particular object of it

// We create a class which will hold a bunch of calculations related methods
class PairOfNumbers {
  constructor(firstNumber, secondNumber) {
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
  }

  // To create a static method, we need to use the STATIC keyword
  // Static methods needsto be places under the constructor
  static areResultsTheSame(firstPair, secondPair) {
    // here we're passing as arguments two instances created uisng the Calculations class
    return (
      firstPair.firstNumber + firstPair.secondNumber ===
      secondPair.firstNumber + secondPair.secondNumber
    );
  }

  // Static method
  static isValidPair(pair) {
    return pair.firstNumber && pair.secondNumber ? true : false;
  }
}

const pair1 = new PairOfNumbers(5, 12);
const pair2 = new PairOfNumbers(5, 12);
const pair3 = new PairOfNumbers(7, 12);
const pair4 = new PairOfNumbers(50);
console.log(PairOfNumbers.areResultsTheSame(pair1, pair2)); // returns true
console.log(PairOfNumbers.areResultsTheSame(pair1, pair3)); // returns false
console.log(PairOfNumbers.isValidPair(pair1)); // returns true
console.log(PairOfNumbers.isValidPair(pair4)); // returns false
console.log(pair1.isValidPair(pair2)); // Error: pair1.isValidPair is not a function - we are trying to access a static method on an instance
