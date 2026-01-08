const hello = require('./libHello');

hello.sayHello();
console.log(hello.person.name);
var obj = hello.person;
console.log(obj.weight);
console.log(hello.cube(3));
console.log(hello.add(5, 4));
console.log(hello.status);