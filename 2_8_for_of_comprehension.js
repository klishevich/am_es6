const books = ['first', 'second', 'third'];
const test1 = Object.keys(books);
// console.log(test1);
books.author = 'Michael';
const test2 = Object.keys(books);
// console.log(test2);

for (let key1 in books) {
  console.log(key1);
}

for (let book1 of books) {
  console.log(book1);
}

// object
const personInfo = { firstName: 'Michael', middleName: 'Alexander', lastName: 'Klishevich'};

for (let key in personInfo) {
  console.log(key);
  console.log(personInfo[key]);
}