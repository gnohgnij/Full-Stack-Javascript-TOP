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
        const bookDiv = createBook(myLibrary[i]);
        setStyles(bookDiv);
        allBooks.appendChild(bookDiv);
    }
}

function createBook(book){
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book-item');
    bookDiv.setAttribute('id', myLibrary.indexOf(book));
    bookDiv.innerHTML = '<i class="fas fa-book fa-4x"></i>';
    bookDiv.innerHTML += '<div class="info">' + book["title"] + 
            '<br>' + book["author"] + '<br>' + 
            book["pages"] + ' pages';
    const removeBtn = document.createElement('button');
    removeBtn.setAttribute('id', 'remove'+myLibrary.indexOf(book));
    removeBtn.addEventListener('click', function(){
        myLibrary.splice(myLibrary.indexOf(book), 1);
        displayBooks();
    })
    removeBtn.innerHTML = 'Remove';
    removeBtn.style.backgroundColor = '#AEB7B3';
    removeBtn.style.border = '1px solid';
    removeBtn.style.color = '#160C28';
    removeBtn.style.fontFamily = 'Bree Serif, serif';
    removeBtn.style.display = 'block';
    removeBtn.style.margin = '10px auto';
    bookDiv.appendChild(removeBtn);

    const readBtn = document.createElement('button');
    readBtn.setAttribute('id', 'read'+myLibrary.indexOf(book));
    readBtn.innerHTML = book['read'];
    readBtn.style.backgroundColor = '#AEB7B3';
    readBtn.style.border = '1px solid';
    readBtn.style.color = '#160C28';
    readBtn.style.fontFamily = 'Bree Serif, serif';
    readBtn.style.display = 'block';
    readBtn.style.margin = '10px auto';
    readBtn.addEventListener('click', function(){
        if(book['read'] == 'Read'){
            book['read'] = 'Not Read';
        }
        else if(book['read'] == 'Not Read'){
            book['read'] = 'Read';
        }
        displayBooks();
    })
    bookDiv.appendChild(readBtn);


    return bookDiv;
}

function setStyles(book){
    book.style.backgroundColor = '#E1EFE6';
    book.style.fontSize = '1rem';
    book.style.textAlign = 'center';
    book.style.padding = '10px';
    book.style.boxShadow = '0 4px 8px 0';
    book.style.borderRadius = '5px';
}

const newBookBtn = document.querySelector("#new");
newBookBtn.addEventListener("click", function(){
    document.querySelector("form").style.display = "block";
});

const cancelBtn = document.querySelector("#cancel");
cancelBtn.addEventListener("click", function(){
    document.querySelector("form").style.display = "none";
})

const submitBtn = document.querySelector('#submit');
submitBtn.addEventListener("click", function(){
    addBookToLibrary();
    document.querySelector("form").style.display = "none";
    displayBooks();
})