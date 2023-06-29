const saveToLocalStorage = (books) => {
  localStorage.setItem('books', JSON.stringify(books));
};
export default saveToLocalStorage;
