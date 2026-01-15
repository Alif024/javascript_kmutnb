// Activity 3: Searching for an element in an array and printing vowels from a string
const guests = ['Alice', 'Bob', 'Charlie', 'David'];

let find = 'Charlie';
let length = 0;
while (length < guests.length) {
  if (guests[length] === find) {
    console.log(`Found ${find}`);
    break;
  }
  length++;
}
// Output:
// Found Charlie

const message = "Hello World";
let vowels = 'aeiouAEIOU';
for (let char of message) {
  if (vowels.includes(char)) {
    console.log(char);
  }
}
// Output:
// e
// o
// o