import { renderBooksLocal } from './modules/getLocalStorage.js';
import formSubmitHandler from './modules/formHandler.js';
import setTimeDate from './modules/timeDate.js';

const form = document.getElementById('form');

const init = () => {
  renderBooksLocal();
  setTimeDate();
  setInterval(setTimeDate, 100);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formSubmitHandler();
  });
};
init();
