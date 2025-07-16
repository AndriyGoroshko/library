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
  "Harry Potter and the Philosopher's Stone",
  500,
  true
);
myLibrary.push(book1);

const book2 = new Book(crypto.randomUUID(), "George Orwell", "1984", 328, true);
myLibrary.push(book2);

const book3 = new Book(
  crypto.randomUUID(),
  "J.R.R. Tolkien",
  "The Hobbit",
  310,
  false
);
myLibrary.push(book3);

const book4 = new Book(
  crypto.randomUUID(),
  "Harper Lee",
  "To Kill a Mockingbird",
  281,
  true
);
myLibrary.push(book4);

const book5 = new Book(
  crypto.randomUUID(),
  "F. Scott Fitzgerald",
  "The Great Gatsby",
  180,
  false
);
myLibrary.push(book5);

const book6 = new Book(
  crypto.randomUUID(),
  "Mary Shelley",
  "Frankenstein",
  280,
  true
);
myLibrary.push(book6);

const book7 = new Book(
  crypto.randomUUID(),
  "Mary Shelley",
  "Frankenstein",
  280,
  true
);
myLibrary.push(book7);

function displayBooks() {
  const container = document.getElementById("book-container");
  container.innerHTML = "";

  myLibrary.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    bookDiv.className =
      "flex flex-col justify-between bg-second-backround leading-[2] p-5 shadow-lg rounded-xl p-4 w-64 transition-transform hover:scale-105 ease duration-600 font-libertinus";
    const title = document.createElement("h3");
    title.textContent = book.name;
    title.className =
      "text-xl text-center font-tt-sans bg-hover rounded-lg px-3 py-1";
    const author = document.createElement("p");
    author.className = "pt-2";
    author.textContent = `by ${book.author}`;
    const pages = document.createElement("p");
    pages.className = "text-accent";
    pages.textContent = `${book.pages} pages`;
    const status = document.createElement("p");
    status.textContent = `Status: ${book.read ? "read" : "not read"}`;

    bookDiv.appendChild(title);
    bookDiv.appendChild(author);
    bookDiv.appendChild(pages);
    bookDiv.appendChild(status);

    let readStatus = document.createElement("button");
    readStatus.textContent = "Read status";
    readStatus.className =
      "mt-4 bg-second-background hover:bg-hover text-primary px-3 py-1 rounded-lg w-full transition-all duration-300 border-2";
    readStatus.addEventListener("click", () => {
      toggleReadStatus(book.id);
    });
    bookDiv.appendChild(readStatus);

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className =
      "mt-4 bg-orange-600 hover:bg-red-700 text-primary px-3 py-1 rounded-lg w-full transition-all duration-300 border-2";
    removeBtn.addEventListener("click", () => {
      removeBook(book.id);
    });
    bookDiv.appendChild(removeBtn);

    container.appendChild(bookDiv);
  });
}
const openBtn = document.getElementById("open-form-btn");
const closeBtn = document.getElementById("close-form-btn");
const formContainer = document.getElementById("form-container");
const shadowContainer = document.getElementById("shadow-container");
const form = document.getElementById("form");

openBtn.addEventListener("click", () => {
  formContainer.classList.remove("hidden");
  shadowContainer.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  formContainer.classList.add("hidden");
  shadowContainer.classList.add("hidden");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addBook();
  formContainer.classList.add("hidden");
});

function addBook() {
  const title = document.getElementById("book-title").value;
  const author = document.getElementById("book-author").value;
  const pages = document.getElementById("book-pages").value;
  const read = document.getElementById("finished").checked;

  addBookToLibrary(author, title, pages, read);
  displayBooks();
}

function removeBook(id) {
  let index = myLibrary.findIndex((book) => book.id === id);
  if (index !== -1) {
    myLibrary.splice(index, 1);
    displayBooks();
  }
}

function toggleReadStatus(id) {
  let book = myLibrary.find((book) => book.id === id);
  if (book) {
    book.read = !book.read;
    displayBooks();
  }
}

displayBooks();
