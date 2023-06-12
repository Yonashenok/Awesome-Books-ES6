import createBookList from './createBookList.js';

export const updateBooks = [];
export const renderBooksLocal = () => {
  const savedItem = localStorage.getItem('books');
  if (!savedItem) return;
  const bookList = JSON.parse(savedItem);
  createBookList(bookList);
  updateBooks.push(...bookList);
};
