// ES5
// var serviceBase = { port: 3000, url: 'www.codingbootcamp.ru'},
//   getAccounts = function(){ return [1,2,3] };

// var accountServiceES5 = {
//   port: serviceBase.port,
//   url: serviceBase.url,
//   getAccounts: getAccounts,
//   toString: function() {
//     return JSON.stringify(this.valueOf())
//   },
//   getUrl: function() { return 'http://' + this.url + ':' + this.port },
//   valueOf_1_2_3: getAccounts()
// }

// console.log('accountServiceES5', accountServiceES5);

// console.log('accountServiceES5.toString', accountServiceES5.toString());

// ES6 __proto__
const serviceBase = { port: 3000, url: 'www.codingbootcamp.ru'},
  getAccounts = () => [1,2,3];

const accountService = {
  __proto__: serviceBase,
  getAccounts
}

const res = accountService
console.log(res.url);



// Object.create
const serviceBase = { port: 3000, url: 'www.codingbootcamp.ru'},
  getAccounts = () => [1,2,3];

let accountService = Object.create(serviceBase);
accountService.getAccounts = getAccounts;

console.log(accountService.port);
console.log(accountService.url);
console.log(accountService.getAccounts());
console.log(accountService.we);
