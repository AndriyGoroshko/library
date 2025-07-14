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
      "bg-second-backround leading-[2] p-5 shadow-lg rounded-xl p-4 w-64 transition-transform hover:scale-105 ease duration-600";
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
    container.appendChild(bookDiv);
  });
}
const openBtn = document.getElementById("open-form-btn");
const closeBtn = document.getElementById("close-form-btn");
const formContainer = document.getElementById("form-container");
const form = document.getElementById("form");

openBtn.addEventListener("click", () => {
  formContainer.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  formContainer.classList.add("hidden");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Form submitted!");
  formContainer.classList.add("hidden"); // optionally close after submit
});
displayBooks();
