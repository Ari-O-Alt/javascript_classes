// Getters and setters on a class are used to defined methods on that class, methods that will be later used as if they are properties
// Getters and setters allow us to define custom behaviour for reading and writing a given property on your class (foe example, add extra logic)

class Rectangle {
  // constructor
  constructor(l, w) {
    // PROPERTIES
    this._length = l;
    this._width = w;
    this.numberOfrequestsForLength = 0;
  }

  // METHOD
  returnInfo() {
    console.log(
      `I am a rectangle with a width of ${this.width} and a height of ${this.length}!`
    );
  }

  // GETTER
  // it uses the get keyword
  // when we use this method (getter) we do not add round brackets at the end (see example)
  get length() {
    this.numberOfrequestsForLength++; //extra logic, notrelated to the length property;
    return this._length;
  }

  // SETTER
  // it uses the set keyword
  set length(newValue) {
    this._length = newValue;
  }
}

const rectangle1 = new Rectangle(20, 15);
// we use the getter to get the area; do not add round brackets at the end
console.log(rectangle1.length); // returns 20
console.log(rectangle1.length); // returns 20
console.log(rectangle1.length); // returns 20
console.log(rectangle1.length); // returns 20
console.log(rectangle1.length); // returns 20

console.log(rectangle1.numberOfrequestsForLength); // returns 5 since we requested the length 5 times
// we use the setter to overwrite the initial value passed to the constructor
rectangle1.length = 500;
console.log(rectangle1.length); // returns 500
