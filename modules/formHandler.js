import createBookList, { booksContainer } from './createBookList.js';
import { updateBooks } from './getLocalStorage.js';
import saveToLocalStorage from './setLocalStorage.js';

const title = document.getElementById('title');
const author = document.getElementById('author');
const books = updateBooks;

const resetForm = () => {
  title.value = '';
  author.value = '';
};

const formSubmitHandler = () => {
  books.push({
    title: title.value,
    author: author.value,
    id: `${Math.random().toString(36).substr(2, 9)}`,
  });

  booksContainer.innerHTML = '';
  createBookList(books);
  resetForm();
  saveToLocalStorage(books);
};
export default formSubmitHandler;
