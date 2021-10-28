// Satic methods are methods that can only be called on the class itself and not on an instance of that class
// They are usefull when we build utilily classes (classes that group multiple helper methods together)

class Calculations {
  constructor(firstNumber, secondNumber) {
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
  }

  // here we're passing as arguments two instances created uisng the Calculations class
  static areResultsTheSame(firstPair, secondPair) {
    return firstPair.firstNumber + firstPair.secondNumber ===
      secondPair.firstNumber + secondPair.secondNumber
      ? true
      : false;
  }
}

const calc1 = new Calculations(5, 12);
const calc2 = new Calculations(5, 12);
const calc3 = new Calculations(7, 12);
console.log(Calculations.areResultsTheSame(calc1, calc2)); // returns true
console.log(Calculations.areResultsTheSame(calc1, calc3)); // returns false
