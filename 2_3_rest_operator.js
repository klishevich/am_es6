var request = function request(url, options, callback) {
  console.log(arguments);
  console.log(arguments.length);
  var args = Array.prototype.slice.call(arguments);
  var url = args[0];
  console.log('url', url);
  var options = args[1];
  console.log('options', options);
  var callback = args[2];
  console.log('callback', callback);
}

// request('http://codingbootcamp.ru', { 'first': 1, 'second': 'none'}, ()=>(true))

const request2 = (url, options, ...argsArray) => {
  console.log('arguments', arguments);
  console.log('argsArray', argsArray);
  console.log('url', url);
  console.log('options', options);
  const callback = argsArray[0];
  console.log('callback', callback);
}

request2('http://codingbootcamp.ru', { 'first': 1, 'second': 'none'}, ()=>(true), true);