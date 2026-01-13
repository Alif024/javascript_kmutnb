let arr = ['A', false, 5];
console.log(arr.length); // Output: 3
console.log(arr[arr.length - 1]); // Output: 5
arr.push('last');
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift('first');
console.log(arr);
arr.shift();
console.log(arr);

let emptyArr = Array(10);
console.log(emptyArr.length); // Output: 10
console.log(emptyArr); // Output: [ <10 empty items> ]

arr1 = [1, 2, 3];
arr2 = [4, 5, 6];
let combinedArr = arr1.concat(arr2);
console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]
console.log(arr1+arr2); // Output: 1,2,34,5,6

let fruits = ['Banana', 'Orange'];
console.log(fruits.join(' - ')); // Output: Banana - Orange

console.log(Array.isArray(fruits)); // Output: true

delete fruits[0];
console.log(fruits); // Output: [ <1 empty item>, 'Orange' ]

const manyFruits = ["Banana", "Orange", "Apple", "Mango"];
// Copy to index 2, all elements from index 0:
console.log(manyFruits.copyWithin(2, 0)); // Output: [ 'Banana', 'Orange', 'Banana', 'Orange' ]
manyFruits.push("Kiwi");
console.log(manyFruits); // Output: [ 'Banana', 'Kiwi', 'Kiwi', 'Mango', 'Kiwi' ]
// Copy to index 2, the elements from index 0 to 2:
console.log(manyFruits.copyWithin(2, 0, 1)); // Output: [ 'Banana', 'Kiwi', 'Banana', 'Kiwi' ]

const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat(); 
console.log(newArr); // Output: [ 1, 2, 3, 4, 5, 6 ]

const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1); 
console.log(spliced); // Output: [ 'Feb', 'Mar', 'Apr' ]

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits2); // Output: [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]