function promiseTimeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

promiseTimeout(2000)
  .then(() => {
    console.log('Done!');
    return promiseTimeout(1000);
  })
  .then(() => {
    console.log('Also done!');
    // return Promise.reject(42); // Return a rejected promise with value 42
    return Promise.resolve(42); // Return a resolved promise with value 42
  })
  .then((result) => {
    console.log(result);
  })
  .catch(() => {
    console.log('Error!');
  })