const mikeBooks = {
    books: ['first', 'second'],
    condition: 'good',
    get latest () {
        let numberOfBooks = this.books.length;
        return numberOfBooks >= 1 ? this.books[numberOfBooks-1] : undefined;
    }
};

const res = Object.getOwnPropertyDescriptors(mikeBooks);
console.log(res);

console.log(mikeBooks.latest);

// shallow copy
console.log('mikeBooks', mikeBooks);

const mike2Books = Object.create(Object.getPrototypeOf(mikeBooks));
console.log('mike2Books', mike2Books);

const mike3Books = Object.create(Object.getPrototypeOf(mikeBooks), Object.getOwnPropertyDescriptors(mikeBooks));
console.log('mike3Books', mike3Books);

console.log('---');

mikeBooks.books.push('third');
mikeBooks.condition = 'bad';
console.log('mikeBooks', mikeBooks);
console.log('mike2Books', mike2Books);
console.log('mike3Books', mike3Books);