let array = [];

function Book(name, author, page, state) {
    this.name = name;
    this.author = author;
    this.page = page;
    this.state = state;
    this.logInfo = function () {
        return `${this.name}, by ${this.author}, ${this.page} pages, ${this.state}`
    }
};


function addArray () {
    
    let Name = prompt("Write the name of the book");
    let author = prompt("Author name?");
    let pages = prompt("How many pages the book have?");
    let readOrNot = prompt("if you've read it then type 'Read' if not then 'Unread'")
    
    const book = new Book(Name, author, pages, readOrNot);
    array.push(book)
};

const showDialogBtn = document.querySelector(".submitButton");
const closeButton = document.querySelector("dialog > button")
const dialog = document.querySelector("dialog")

showDialogBtn.addEventListener("click", () => {
    dialog.showModal()
})

closeButton.addEventListener("click", () => {
    dialog.close()
})