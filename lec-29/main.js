let countdown;
const timerDisplay = document.querySelector('.display__time-left')
const endTime = document.querySelector('.display__end-time')

const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTime(seconds);
  breakEnd(then)

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTime(secondsLeft)
  }, 1000)
}

function displayTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  const timer = `${min}:${sec < 10 ? '0' : ''}${sec}`;
  document.title = timer;
  timerDisplay.textContent = timer;
}

function breakEnd(timestamp) {
  const end = new Date(timestamp);
  const hrs = end.getHours();
  const min = end.getMinutes();
  endTime.textContent = `Be Back At ${hrs > 12 ? hrs - 12 : hrs}:${min<10 ? '0':''}${min}${hrs>12 ? 'PM':'AM'}`
}

function startTimer(){
  const sec = parseInt(this.dataset.time);
  timer(sec)
}

buttons.forEach(btn => btn.addEventListener('click',startTimer))

document.customForm.addEventListener('submit',function(e){
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins*60);
  this.reset();
})