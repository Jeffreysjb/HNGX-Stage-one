function updateTime() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentDay = daysOfWeek[currentDate.getUTCDay()];
    const currentUTCTimeMilliseconds = currentDate.getTime();

    document.querySelector('.day').textContent = `${currentDay}`;
    document.querySelector('.time').textContent = `${currentUTCTimeMilliseconds} ms`;
}
updateTime();

setInterval(updateTime, 1000);
