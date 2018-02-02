class Rectangle {
  constructor(height, width) {
    this.name = 'Rectangle';
    this.height = height;
    this.width = width;
  }

  sayName() {
    return `Hi, I am a ${this.name}.`;
  }

  sayBye() {
    return 'Bye Rectangle';
  }

  sayHi() {
    return 'Hi Rectangle';
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
    this.name = 'Square';
    this.trotro = 'trotro';
  }

  sayMur() {
    return 'Mur Square';
  }

  sayBye() {
    return 'Bye Square';
  }
}

const s = new Square(10);
console.log('s.name', s.name);
console.log('s.height', s.height);
console.log('s.width', s.width);
console.log('s.sayName', s.sayName());
console.log('s.sayBye', s.sayBye());
console.log('s.sayHi', s.sayHi());
console.log('s.trotro', s.trotro);
console.log('s.sayMur', s.sayMur());
console.log(s.constructor.name);
console.log('---');
console.log(Object.getOwnPropertyNames(s));
console.log(Object.getOwnPropertyNames(s.__proto__));
console.log(Object.getOwnPropertyNames(s.__proto__.__proto__));
console.log('---');
console.log(Object.getOwnPropertyNames(Rectangle.prototype));
console.log(Object.getOwnPropertyNames(Square.prototype));
console.log('---');
console.log(Square.prototype.constructor.name);
