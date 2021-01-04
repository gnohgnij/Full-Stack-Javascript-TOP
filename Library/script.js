let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(){
    // let title = prompt("Name of book to add: ");
    // let author = prompt("Name of author: ");
    // let pages = prompt("Number of pages: ");
    // let read = prompt("Have you finished reading? ");
    // const newBook = new Book(title, author, pages, read);
    // myLibrary.push(newBook);
}

function displayBooks(){
    for(let i=0; i<myLibrary.length; i++){
        console.log(myLibrary[i]);
    }
}

const addBookBtn = document.querySelector("#add");
addBookBtn.addEventListener("click", function(){
    document.querySelector("#form-container").style.display = "block";
    addBookToLibrary();
});

const displayBooksBtn = document.querySelector("#display");
displayBooksBtn.addEventListener("click", function(){
    displayBooks();
})