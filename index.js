import createBookList from './modules/createBookList.js';
import formSubmitHandler from './modules/formHandler.js';
import setTimeDate from './modules/timeDate.js';

const form = document.getElementById('form');

const init = () => {
  createBookList();
  setTimeDate();
  setInterval(setTimeDate, 1000);
};
init();
form.addEventListener('submit', (e) => {
  e.preventDefault();

  formSubmitHandler();
});
