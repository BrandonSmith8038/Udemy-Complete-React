const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is my resolved data');
    reject('Something went wrong');
  }, 5500);
});

console.log('Before');

promise
  .then(data => {
    console.log('1', data);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('This is my other promise');
        // reject('Something went wrong');
      }, 5500);
    });
  })
  .then(str => {
    console.log('Does this run?', str);
  })
  .catch(error => {
    console.log('error', error);
  });

console.log('After');
