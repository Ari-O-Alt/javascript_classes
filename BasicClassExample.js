// We can think of a class like a blueprint for objects - we can create as many objects we want using this blueprint (class) and all those objects will inherit properties and methods from that class
// We write it using the "class" keyword and usually the name starts with a capital letter

class Rectangle {
  // each class has a constructor; a constructor is a function that will get called exactly once every time we build a new object using the class
  constructor(h, w, c) {
    // classes can have properties (height, width and color are properties of this class)
    // properties must be specified in the constructor
    // these are properties with values that can be set when creating a new object (the values we wish to use get passed to the constuctor)
    // we can also give predefined values to these properties, and the constructor will be empty in this case (see alternative example)
    this.height = h;
    this.width = w;
    this.color = c;
  }

  // classes can have methods (getHeight and returnInfo are methods)
  getHeight() {
    return this.height;
  }

  returnInfo() {
    console.log(
      `I am a rectangle with a width of ${this.width}, a height of ${this.height} and I am ${this.color}!`
    );
  }
}

// we create new objects using the Rectangle class as a blueprint using the syntax
// we pass the argument to the contructor; the number of arguments needs to be the same with the number of paramateres required by the constructor
const rectange1 = new Rectangle(5, 10, "red");
const rectange2 = new Rectangle(3, 9, "yellow");
const rectange3 = new Rectangle(31, 5, "green", hhhh); // too many arguments
const rectange4 = new Rectangle(22, 22); // not enought arguments

// ALTERNATIVE EXAMPLE FOR CLASSES WITH PREDEFINED VALUES FOR PROPERTIES

/* class Rectangle {
    constructor() {
      this.height = 10;
      this.width = 50;
      this.color = "blue";
    }
  
  
  } */
