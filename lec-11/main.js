// get our elements
const player = document.querySelector('.player');
const video = player.querySelector('video');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const ranges = player.querySelectorAll('.player__slider');
const skipButtons = player.querySelectorAll('button[data-skip');

//Functions
function togglePlay() {
  return video.paused ? video.play() : video.pause();
}

function updateButton() {
  toggle.textContent = this.paused ? '⏵' : '⏸';
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const sTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = sTime;
  console.log(e)
}

//listeners
video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgress)
toggle.addEventListener('click', togglePlay)
skipButtons.forEach(btn => btn.addEventListener('click', skip))
ranges.forEach(rng => rng.addEventListener('change', handleRangeUpdate))

let mousedown = false;
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', mousedown ? scrub : '')
progress.addEventListener('mousedown', () => mousedown = true)
progress.addEventListener('mouseup', () => mousedown = false)