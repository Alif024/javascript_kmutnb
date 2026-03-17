function promiseTimeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

async function run() {
  console.log('Start!!');
  await promiseTimeout(2000);
  console.log('Stop!!');
}

console.log('Before run');
run();
console.log('After run');

// Output:
// Before run
// Start!!
// After run
// (after 2 seconds)
// Stop!!