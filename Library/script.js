let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(){
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    let read;
    if(document.getElementById('read').checked){
        read = document.getElementById('read').value;
    }
    else if(document.getElementById('not-read').checked){
        read = document.getElementById('not-read').value;
    }

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayBooks(){
    const allBooks = document.querySelector('#all-books');

    const bookItems = document.querySelectorAll('.book-item');
    bookItems.forEach(book => book.remove());   

    for(let i=0; i<myLibrary.length; i++){
        const newDiv = document.createElement('div');
        newDiv.classList.add('book-item');
        newDiv.innerHTML = 'Title: ' + myLibrary[i]["title"] + '<br>';
        newDiv.innerHTML += 'Author: ' + myLibrary[i]["author"] + '<br>';
        newDiv.innerHTML += 'Pages: ' + myLibrary[i]["pages"] + '<br>';
        newDiv.innerHTML += 'Read: ' + myLibrary[i]["read"];
        allBooks.appendChild(newDiv);
    }
    const books = document.querySelectorAll('.book-item');
    books.forEach(book => setStyles(book));
}

function setStyles(book){
    book.style.color = 'rgb(169, 63, 85)';
    book.style.fontSize = '0.75rem';
    book.style.textAlign = 'center';
    book.style.border = '2px solid rgb(169, 63, 85)';
}

const newBookBtn = document.querySelector("#new");
newBookBtn.addEventListener("click", function(){
    document.querySelector("#form-container").style.display = "block";
});

const cancelBtn = document.querySelector("#cancel");
cancelBtn.addEventListener("click", function(){
    document.querySelector("#form-container").style.display = "none";
})

const submitBtn = document.querySelector('#submit');
submitBtn.addEventListener("click", function(){
    addBookToLibrary();
    document.querySelector("#form-container").style.display = "none";
    displayBooks();
})

// const displayBooksBtn = document.querySelector("#display");
// displayBooksBtn.addEventListener("click", function(){
//     displayBooks();
// })