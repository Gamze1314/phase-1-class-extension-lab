// define Polygon clss
// Triangle and Square classes inherit from Polygon class
// get methods for each subclass

class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
  
    get countSides() {
      return this.sides.length;
    }
  
    get perimeter() {
      return this.sides.reduce((acc, curr) => acc + curr, 0);
    }
  }
  
  class Triangle extends Polygon {
    constructor(sides) {
      super(sides);
    }
  
    get isValid() {
      if(this.sides.length === 3){
        return true
      } else {
        return false
      }
      };
    }
  
  class Square extends Polygon {
    constructor(sides) {
      super(sides);
    }
  
    get isValid() {
      for(let i = 0; i < this.sides.length - 1; i++) {
        if(this.sides[i] !== this.sides[i+1]) {
          return false;
        }
      }
      return true;
    }
  
    get area() {
      if(this.isValid) {
        return this.sides[0] ** 2;
      }
    }
  }
  
  // Example usage:
  let triangle = new Triangle([5, 5, 5]);
  console.log(triangle.isValid); // true
  let square2 = new Square( [ 5, 4, 3, 2 ] )
  console.log(square2.isValid); // true
  console.log(square2.area); // 25
  const square = new Square([5, 5, 5, 5]);
  console.log(square.isValid); // true
  console.log(square.area); // 25