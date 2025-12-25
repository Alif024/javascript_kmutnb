let value1 = ['Apple', 1, false];
let value2 = ['Fries', 2, true, 'Apple',1];
let value3 = ['Mars', 9, 'Apple',1];
let repeat = [];

value1.forEach(item1 => {
  if (value2.includes(item1) && value3.includes(item1)) {
    repeat.push(item1);
  }
})

console.log(repeat);