const request = (url, options, callback) => {
  console.log(url, options, callback);
}

const reqArr = ['http://codingbootcamp.ru', { 'first': 1, 'second': 'none'}, ()=>(true), true];

// request(...reqArr);

// ARRAY LITERAL

const array1 = ['a', 'b'];
const array2 = [...array1, 'd', 'e'];
// console.log(array1, array2);


// NEW DATA - does not work

// const date1 = new Date();
// console.log(date1);
// const date2 = new Date();
// console.log(date2);
const dates = ['2010-01-01', '2011-01-01'];
// console.log(dates);
const d = new Date(...dates);
// console.log(d);

// PUSH
let dates2 = ['2000-01-01'];
dates2.push(...dates);
console.log(dates2);
