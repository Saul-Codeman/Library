const myLibrary = [];

class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = false;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function removeBookFromLibrary(index) {
    if (index >= 0 && index < myLibrary.length) {
                myLibrary.splice(index, 1);
            }
}

function displayAllBooks() {
    // Display books in cards
    const libraryContainer = document.getElementById("library-container");
    for (let i = 0; i < myLibrary.length; i++) {

            const book = myLibrary[i];
            const card = document.createElement("div");
            card.className = "card";
            card.textContent = `Title: ${book.title}\nAuthor: ${book.author}\nPages: ${book.pages}`;

            // Create button group
            const buttons = document.createElement("div");
            buttons.className = "button-group";

            const readButton = document.createElement("button");
            readButton.textContent = book.isRead ? "Mark Unread" : "Mark Read";
            readButton.addEventListener("click", function () {
                book.isRead = !book.isRead;
                readButton.textContent = book.isRead ? "Mark Unread" : "Mark Read";
            });

            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.addEventListener("click", function () {
                removeBookFromLibrary(i);
                card.remove(); // Remove the card from the DOM
            });

            buttons.appendChild(readButton);
            buttons.appendChild(removeButton);

            card.appendChild(buttons);

            libraryContainer.appendChild(card);
        }
}

document.addEventListener("DOMContentLoaded", function() {
    // Example usage
    const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 218);
    const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 281);

    addBookToLibrary(book1);
    addBookToLibrary(book2);

    displayAllBooks();
});
