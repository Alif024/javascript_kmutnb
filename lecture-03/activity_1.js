// Activity 1: Looping through characters in strings within an array
const furniture = ['Table', 'Chair', 'Couch'];

furniture.forEach(item => {
  for (let char of item) {
    console.log(char);
  }
})

//Output:
// T
// a
// b
// ...
// c
// h