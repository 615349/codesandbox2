const promiseA = () => 
  new Promise((resolve) => setTimeout(() => resolve('A'), 100));

const promiseB = () => 
  new Promise((resolve) => setTimeout(() => resolve('B'), 200));

Promise.all(promiseA(), promiseB())
  .then((response) => {
    console.log('response:', response);
  })
  .catch((error) => {
    console.error(error);
  })
