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