const promise1 = new Promise((resolve, reject) => {
  // setTimeout(resolve, 2000, 'foo');
  setTimeout(() => resolve('foo'), 2000);
});

const t1 = new Date().getSeconds();
console.log(`start ${t1} seconds`);

promise1
.then((p)=>{
  const t1 = new Date().getSeconds();
  console.log(`end resolve promise ${t1} seconds ${p}`);
})
.catch((p) => {
  const t1 = new Date().getSeconds();
  console.log(`end reject ${t1} seconds ${p}`);
})

const fetchData = async () => {
  try {
    const response = await promise1;
    const t1 = new Date().getSeconds();
    console.log(`end resolve async ${t1} seconds ${response}`);
  } catch (error) {
    console.log(error);
  }
}

fetchData()
.then(() => {
  console.log('async then');
});

// axios example

let axios = { // mock
  get: x => new Promise(resolve => {
    setTimeout(() => resolve({ data: x }), 2000);
  }) 
}

const fetchData2 = async (query) => {
  try {
    const response = await axios.get(`/sdf?query=${query}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

fetchData2('www')
.then(data => {
  console.log('fetchData2', data);
})


