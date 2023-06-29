import saveToLocalStorage from './setLocalStorage.js';
import getLocalStorage from './getLocalStorage.js';

export const booksContainer = document.getElementById('booksContainer');

const createBookList = () => {
  const books = getLocalStorage();
  booksContainer.innerHTML = '';
  const markUp = books
    .map(
      (book) => `
    <li class="list_item book-element">
        <p>"${book.title}" by ${book.author}</p>
        <button onclick="" class="btn-remove remove-btn" data-remove="${book.id}" >remove</button>
    </li>
    `,
    )
    .join('');

  booksContainer.insertAdjacentHTML('afterbegin', markUp);
  const removeButton = document.querySelectorAll('.btn-remove');
  removeButton.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.target.dataset.remove;

      const newBook = books.filter((item) => item.id !== id);
      saveToLocalStorage(newBook);
      booksContainer.innerHTML = '';
      createBookList();
    });
  });
};

export default createBookList;
