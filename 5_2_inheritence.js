function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};

Person.prototype.greeting = function() {
  console.log('Hi! I\'m ' + this.name.first + '.');
};

Person.prototype.farewell = function() {
  console.log('Bye! I\'m ' + this.name.first + '.');
};

function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);

  this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.greeting = function() {
  var prefix;

  if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
    prefix = 'Mr.';
  } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
    prefix = 'Mrs.';
  } else {
    prefix = 'Mx.';
  }

  console.log('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.');
};

const teacher = new Teacher('mike', 'kli', 36, 'm', ['sports', 'chess'], 'maths');
console.log(teacher);

// does not work
// now work
teacher.greeting();

console.log('---');
console.log(Object.getOwnPropertyNames(teacher));
console.log(Object.getOwnPropertyNames(teacher.__proto__));
console.log(Object.getOwnPropertyNames(teacher.__proto__.__proto__));
console.log('---');
console.log(Object.getOwnPropertyNames(Person.prototype));
console.log(Object.getOwnPropertyNames(Teacher.prototype));
console.log('---');
console.log(Teacher.prototype.constructor.name);


console.log(teacher.name.first);
console.log(teacher.interests[0]);
console.log(teacher.subject);
teacher.greeting();
teacher.farewell();

