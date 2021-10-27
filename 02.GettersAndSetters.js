// Getters and setters on a class are used to defined methods on that class, methods that will be later used as if they are properties

class Rectangle {
  // constructor
  constructor(h, w, c) {
    // properties
    this.height = h;
    this.width = w;
    this.color = c;
  }

  // method
  getHeight() {
    return this.height;
  }

  // method
  returnInfo() {
    console.log(
      `I am a rectangle with a width of ${this.width}, a height of ${this.height} and I am ${this.color}!`
    );
  }
}
