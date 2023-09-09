const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDate = new Date();
const currentDay = daysOfWeek[currentDate.getUTCDay()];
const currentUTCTime = currentDate.getTime();

document.querySelector('.day').textContent = `${currentDay}`;
document.querySelector('.time').textContent = `${currentUTCTime}`;
