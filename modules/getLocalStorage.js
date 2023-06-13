const getLocalStorage = () => JSON.parse(localStorage.getItem('books')) || [];

export default getLocalStorage;
