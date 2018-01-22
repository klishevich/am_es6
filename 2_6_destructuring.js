const person = { firstName: 'Michael', middleName: 'Alexander', lastName: 'Klishevich'};
const { firstName, lastName } = person;
// console.log(firstName, lastName);

// FOR ARRAYS
const personA = ['Michael', 'Alexander', 'Klishevich'];
const [f,,l] = personA;
console.log('arr', f, l);
