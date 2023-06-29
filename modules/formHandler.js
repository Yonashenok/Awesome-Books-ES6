import createBookList, { booksContainer } from './createBookList.js';
import saveToLocalStorage from './setLocalStorage.js';
import getLocalStorage from './getLocalStorage.js';

const title = document.getElementById('title');
const author = document.getElementById('author');
const resetForm = () => {
  title.value = '';
  author.value = '';
};

const formSubmitHandler = () => {
  const books = getLocalStorage();

  books.push({
    title: title.value,
    author: author.value,
    id: `${Math.random().toString(36).substr(2, 9)}`,
  });

  booksContainer.innerHTML = '';
  resetForm();
  saveToLocalStorage(books);
  createBookList();
};
export default formSubmitHandler;
