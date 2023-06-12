import { DateTime } from '../node_modules/luxon/src/luxon.js';

const time = document.querySelector('.time-date');

const setTimeDate = () => {
  const dt = DateTime.now();
  const localTime = dt.toLocaleString(DateTime.DATETIME_MED);
  time.textContent = localTime;
};

export default setTimeDate;
