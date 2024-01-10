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



const showDialogBtn = document.querySelector(".submitButton");
const SubmitBtn = document.querySelector("#submitBtn")
const dialog = document.querySelector("dialog")
const bookTitleIp = document.querySelector(".bookTitle")
const authorNameIp = document.querySelector(".authorIp")
const bookPagesIp = document.querySelector(".bookPagesIp")
const readUnreadIp = document.querySelector("#readUnread")

showDialogBtn.addEventListener("click", () => {
    dialog.showModal()
})


// this function creates many elements necessary for show info obtained from the new objects in the array 
// the styling is applied to the newly created element from the css file as key property that holds the book objects
// value are similar and repeats on every new objects card. 

function makeCd () {   
        
    const contentBody = document.querySelector(".contentBody")
    const bkcard = document.createElement("div");
    const bkName = document.createElement("div");
    const authorName = document.createElement("div");
    const pages = document.createElement("div");
    const state = document.createElement("div");
    const rmBtn = document.createElement("button");
    
    bkcard.classList.add("bkCard")
    contentBody.appendChild(bkcard)
    bkName.classList.add("bookName");
    bkName.textContent = array[array.length - 1].name;
    bkcard.appendChild(bkName);
    authorName.classList.add("authorName");
    authorName.textContent = array[array.length -1].author;
    bkcard.appendChild(authorName);
    pages.classList.add("pages");
    pages.textContent = array[array.length -1].page;
    bkcard.appendChild(pages);
    state.classList.add("state");
    state.textContent = array[array.length - 1].state;
    bkcard.appendChild(state);
    rmBtn.classList.add("rmBtn");
    rmBtn.textContent = "Remove";
    bkcard.appendChild(rmBtn);
    
    
}

// This function uses the values of form inputs to initialize the book object and pushes it to array
// while calling makeCd() function which create a card elements based on the book object injected into the array 

function addArray () {
    function checkedUnchecked () {
        if (readUnreadIp.checked === true) return "Read";
        else return "Unread"
    }
    
    const book = new Book(bookTitleIp.value, authorNameIp.value, bookPagesIp.value + " pages", checkedUnchecked());
    array.push(book)

    makeCd()
};



// calls on the addArray function to create and add book object to the array and use that to create the card elements
// that holds the info and append it to the content body. the code bellow it cleans up the input fields and 
// closes the dialog popUp up.

function clearIp() {
    addArray()
    bookPagesIp.value = "";
    bookTitleIp.value = "";
    authorNameIp.value = "";
    dialog.close()
    
}

// when the submit button is clicked the if else statements makes sure that the required input has been entered and 
// then closes the pop up using the dialog.close() in clearIp() method

SubmitBtn.addEventListener("click", (event) => {
    if (bookPagesIp.value === "" && bookTitleIp.value === "" && authorNameIp.value === "") return event.preventDefault()
    else if (bookPagesIp.value !== "" && bookTitleIp.value !== "" && authorNameIp.value !== "") return clearIp();
})

const cancelPopUp = document.querySelector(".cancelPopUp");

cancelPopUp.addEventListener("click", () => {
    bookPagesIp.value = "";
    bookTitleIp.value = "";
    authorNameIp.value = "";
    dialog.close()
})