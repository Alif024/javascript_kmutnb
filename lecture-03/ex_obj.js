const book = {
  title: "1984",
  author: "George Orwell",
  isAvailable: true,

  checkOut: function () {
    this.isAvailable = false;
  },

  checkIn: function () {
    this.isAvailable = true;
  },
}

console.log(book.isAvailable); // true
book.checkOut();
console.log(book.isAvailable); // false
book.checkIn();
console.log(book.isAvailable); // true

const cat = {
  name: "Pipey",
  age: 3,
  whatName: function () {
    return this.name;
  },
}

const dog = {
  name: "Buddy",
  whatName: cat.whatName,
}

console.log(cat.whatName()); // Pipey
console.log(dog.whatName()); // Buddy

console.log(JSON.stringify(book));