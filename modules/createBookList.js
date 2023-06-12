import saveToLocalStorage from './setLocalStorage.js';

export const booksContainer = document.getElementById('booksContainer');
const createBookList = (books) => {
  booksContainer.innerHTML = '';
  const markUp = books
    .map(
      (book) => `
    <li class="list_item">
        <p>"${book.title}" by ${book.author}</p>
        <button class="btn-remove" data-remove="${book.id}" >remove</button>
    </li>
    `,
    )
    .join('');

  booksContainer.insertAdjacentHTML('afterbegin', markUp);
  const bookElement = document.querySelectorAll('.list_item');
  const removeButton = document.querySelectorAll('.btn-remove');
  bookElement.forEach((list) => list.classList.add('book-element'));
  removeButton.forEach((btn) => btn.classList.add('remove-btn'));
  removeButton.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.target.dataset.remove;
      const newBookList = books.filter((item) => item.id !== id);
      booksContainer.innerHTML = '';
      createBookList(newBookList);
      saveToLocalStorage(newBookList);
    });
  });
};

export default createBookList;
