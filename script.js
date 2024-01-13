let library = [];


function Book(name, author, page, state) {
    this.name = name;
    this.author = author;
    this.page = page;
    this.state = state;
};



const showDialogBtn = document.querySelector(".showForm");
const SubmitBtn = document.querySelector("#submitBtn")
const dialog = document.querySelector("dialog")
const bookTitleIp = document.querySelector(".bookTitle")
const authorNameIp = document.querySelector(".authorIp")
const bookPagesIp = document.querySelector(".bookPagesIp")
const readUnreadIp = document.querySelector("#readUnread")

function checkArt() {
    if (bookTitleIp.hasAttribute("required") === false) {
        
        bookPagesIp.required = true
        bookTitleIp.required = true
        authorNameIp.required = true      
    }
}

showDialogBtn.addEventListener("click", () => {
    checkArt()
    dialog.showModal();
    if (readUnreadIp.checked = true) {
        readUnreadIp.checked = false;
    }

    
   
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
    const state = document.createElement("button");
    const rmBtn = document.createElement("button");
 //   let indexObj = null;

    

    bkcard.classList.add("bkCard")
    contentBody.appendChild(bkcard)
    bkName.classList.add("bookName");
    bkName.textContent = library[library.length - 1].name;
    bkcard.appendChild(bkName);
    authorName.classList.add("authorName");
    authorName.textContent = library[library.length -1].author;
    bkcard.appendChild(authorName);
    pages.classList.add("pages");
    pages.textContent = library[library.length -1].page;
    bkcard.appendChild(pages);
    state.classList.add("state");
    state.textContent = library[library.length - 1].state;
    bkcard.appendChild(state);
    rmBtn.classList.add("rmBtn");
    rmBtn.textContent = "Remove";
    


    bkcard.appendChild(rmBtn);

    rmBtn.addEventListener("click", () => {
 
        function findElObj() {
            for(let i = 0; i < library.length; i++) {
                if (library[i].name === toString(bkName.textContent)) {
    
                } return i;
            }; 
        } 
        library.splice(findElObj(), 1)
        contentBody.removeChild(bkcard)
    })

    if (state.textContent === "Unread") {
        state.style.cssText = "background-color: red;"
    }
    else if (state.textContent === "Read") {
        state.style.cssText = "background-color: rgb(109, 204, 109);"  
    } 

    state.addEventListener("click", () => {

        if (state.textContent === "Read") {
            state.textContent = "Unread";
            state.style.cssText = "background-color: red;";
        }
        else if (state.textContent === "Unread") {
            state.textContent = "Read";
            state.style.cssText = "background-color: rgb(109, 204, 109);"
        }

        for (let i = 0; i < library.length; i++) {
            if (library[i].name === bkName.textContent && library[i].author === authorName.textContent && 
                library[i].page === pages.textContent && library[i].state === "Unread") {
                    library[i].state = "Read";
                } 
            else if (library[i].name === bkName.textContent && library[i].author === authorName.textContent && 
                library[i].page === pages.textContent && library[i].state === "Read") {
                    library[i].state = "Unread";
                }
        }
        
        
    })
}


function addArray () {
    function checkedUnchecked () {
        if (readUnreadIp.checked === true) return "Read";
        else return "Unread"
    }
    
    const book = new Book(bookTitleIp.value, authorNameIp.value, bookPagesIp.value + " pages", checkedUnchecked());
    library.push(book)

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

SubmitBtn.addEventListener("click", () => {;
    if (bookPagesIp.value !== "" && bookTitleIp.value !== "" && authorNameIp.value !== "")  {
        clearIp()
        if (bookTitleIp.hasAttribute("required") === true) {
        
            bookPagesIp.removeAttribute("required")
            authorNameIp.removeAttribute("required")
            bookTitleIp.removeAttribute("required")
        }
    } ;
})

const cancelPopUp = document.querySelector(".cancelPopUp");


cancelPopUp.addEventListener("click", () => {
    bookPagesIp.value = "";
    bookTitleIp.value = "";
    authorNameIp.value = "";
    
    if (bookTitleIp.hasAttribute("required") === true) {
        
        bookPagesIp.removeAttribute("required")
        authorNameIp.removeAttribute("required")
        bookTitleIp.removeAttribute("required")
    }
    dialog.close()
})

// removing the default book card
const contentBody = document.querySelector(".contentBody")
const bkCard = document.querySelector(".bkCard")
const rmBtn  = document.querySelector('.rmBtn');
rmBtn.addEventListener("click", () => {
    contentBody.removeChild(bkCard)
})

const state = document.querySelector(".state");

if (state.textContent === "Unread") {
    state.style.cssText = "background-color: red;";
} 

else if (state.textContent === "Read") {
    state.style.cssText = "background-color: rgb(109, 204, 109);";
} 


state.addEventListener("click", () => {
    if (state.textContent === "Read") {
        state.textContent = "Unread";
        state.style.cssText = "background-color: red;"
    }
    else if (state.textContent === "Unread") {
        state.textContent = "Read";
        state.style.cssText = "background-color: rgb(109, 204, 109);"
    }
})