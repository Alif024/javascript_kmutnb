let num1 = 10;
console.log(typeof num1.toString()); // Output: string

let millions = 1000000;
console.log(millions.toLocaleString()); // Output: 1,000,000
console.log(millions.toExponential()); // Output: 1e+6

let num2 = 10.56789;
console.log(num2.toFixed(2)); // Output: 10.57
console.log(num2.toPrecision(4)); // Output: 10.57

let infinityNum = 1 / 0;
console.log(infinityNum); // Output: Infinity

console.log(Number.isFinite(infinityNum)); // Output: false
console.log(Number.isNaN(10)); // Output: false
console.log(Number.isInteger(10.5)); // Output: false

let strNum = "123.45";
console.log(Number(strNum)); // Output: 123.45
console.log(parseInt(strNum)); // Output: 123
console.log(parseFloat(strNum)); // Output: 123.45

console.log(Number.isSafeInteger(9007199254740991)); // Output: true
console.log(Number.isSafeInteger(12345678901234567890)); // Output: false