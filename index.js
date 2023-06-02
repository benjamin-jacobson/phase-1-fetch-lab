function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  let url = 'https://anapioficeandfire.com/api/books'
  console.log("I ran")
  return fetch(url).then(d => d.json()).then(e => renderBooks(e))

}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
  console.log(books)
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
