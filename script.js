const myLibrary = [];

function Book(id, author, name, pages, read) {
  this.id = id;
  this.author = author;
  this.name = name;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(author, name, pages, read) {
  const id = crypto.randomUUID();
  const newBook = new Book(id, author, name, pages, read);
  myLibrary.push(newBook);
}

const book1 = new Book(
  crypto.randomUUID(),
  "J.K. Rowling",
  "Harry Potter",
  500,
  true
);
myLibrary.push(book1);

function displayBooks() {
  myLibrary.forEach((book) => {
    console.log(
      `${book.name} by ${book.author} has ${book.pages} pages and is ${
        book.read ? "read" : "not read yet"
      }`
    );
  });
}

displayBooks();
