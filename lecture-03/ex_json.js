const bookObj = {
  title: "Becoming",
  author: "Michelle Obama",
  isAvailable: false,
};

const bookJSON = JSON.stringify(bookObj);
console.log(bookJSON);

const receivedBookOgj = JSON.parse(bookJSON);
console.log(receivedBookOgj);
console.log(receivedBookOgj.author);
console.log(typeof receivedBookOgj);