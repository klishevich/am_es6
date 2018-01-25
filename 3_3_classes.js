class Rectangle {
  constructor(height, width) {
    this.name = 'Rectangle';
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log('Hi, I am a ', this.name + '.');
  }
  get area() {
    return this.height * this.width;
  }
  set area(value) {
    this.height = this.width = Math.sqrt(value);
  }
}

class Square extends Rectangle {
  constructor(length) {
    this.height; // ReferenceError, super needs to be called first!
    
    // Here, it calls the parent class' constructor with lengths
    // provided for the Rectangle's width and height
    super(length, length);
    
    // Note: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error.
    this.name = 'Square';
  }
}

class AccountModel {
  constructor() {
    this.data = 'my data';
  }
  get accountsData() {
    return this.data;
  }
  set accountsDataUpdate(x) {
    this.data = x;
  }

  getAccountData() {
    return this.data;
  }
}

const a = new AccountModel;
console.log(a.accountsData);
a.accountsDataUpdate = 'updated data';
console.log(a.accountsData);
console.log(a.getAccountData());
console.log(a.data);
a.data = 'sdlfkasdfl';
console.log(a.data);

// About Prototype

