const startTime = Date.now();

function someHeavyTask() {
  for (let i = 0; i < 1e10; i++) {
    // Simulating a heavy task
    Math.sqrt(i);
  }
};

someHeavyTask();
const endTime = Date.now();

const duration = endTime - startTime;
console.log(`The task took ${duration} milliseconds.`);