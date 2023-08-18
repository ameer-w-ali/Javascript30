const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const btn = document.querySelector('.btn');
let lastHole;
let timeUP = false;
let score = 0;

function randTime(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

function randHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    return randHole(holes)
  }
  lastHole = hole;
  return hole;
}

function peep() {
  const time = randTime(200, 1000);
  const hole = randHole(holes);
  hole.classList.add('up')
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUP) peep();
  }, time)
}

function startGame() {
  score = 0
  scoreBoard.textContent = score;
  timeUP = false;
  peep();
  btn.style.display = 'none';
  setTimeout(() => {
    timeUP = true;
    btn.style.display = 'block';
  }, 20000);
}

function bonk(e) {
  if (!e.isTrusted) return; //cheating
  if (this.getAttribute('data-hit') === 'false') {
    this.removeEventListener('click', bonk);
    this.classList.add('hit');
    this.setAttribute('data-hit', 'true');
    score++;
  }
  setTimeout(() => {
    this.classList.remove('hit');
    this.setAttribute('data-hit', 'false');
    this.addEventListener('click', bonk);
  }, 200);
  scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk));
btn.addEventListener('click', startGame);