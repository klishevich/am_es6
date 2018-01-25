// var service = require('./module.js');
// console.log(service.port);

// NOT WORKING on node.js
import { port, getAccounts } from './module2';
console.log('port', port);
console.log('getAccounts', getAccounts);

// import everything into service variable
import * as service from 'module';
console.log(service.port)
