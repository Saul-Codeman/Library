const myLibrary = [];

class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
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
            updateReadButton(readButton, book.isRead);
            readButton.addEventListener("click", function () {
                book.isRead = !book.isRead;
                updateReadButton(readButton, book.isRead);
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

function addBookToDisplay(book, index) {
    const libraryContainer = document.getElementById("library-container");

    const card = document.createElement("div");
    card.className = "card";
    card.textContent = `Title: ${book.title}\nAuthor: ${book.author}\nPages: ${book.pages}`;

    // Create button group
    const buttons = document.createElement("div");
    buttons.className = "button-group";

    const readButton = document.createElement("button");
    updateReadButton(readButton, book.isRead);
    readButton.addEventListener("click", function () {
        book.isRead = !book.isRead;
        updateReadButton(readButton, book.isRead);
    });

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function () {
        removeBookFromLibrary(index);
        card.remove(); // Remove the card from the DOM
    });

    buttons.appendChild(readButton);
    buttons.appendChild(removeButton);

    card.appendChild(buttons);

    libraryContainer.appendChild(card);
}

function updateReadButton(button, isRead) {
    if (isRead) {
        button.textContent = "Mark Unread";
    } else {
        button.textContent = "Mark Read";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Example usage
    const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 218, false);
    const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 281, false);

    addBookToLibrary(book1);
    addBookToLibrary(book2);

    displayAllBooks();


    const form = document.getElementById("add-book");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission behavior
        
        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const pages = document.getElementById("pages").value;
        const hasRead = document.getElementById("has-read").checked;
        
        const newBook = new Book(title, author, pages, hasRead);
        addBookToLibrary(newBook);
        addBookToDisplay(newBook, myLibrary.length - 1);
        
        // Reset form fields
        form.reset();
    });

});
