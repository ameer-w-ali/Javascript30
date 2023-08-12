const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 150; //100px
function shadow(e) {
  const width = hero.offsetWidth;
  const height = hero.offsetHeight;

  let { offsetX: x, offsetY: y } = e;
  if (this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }
  const xWalk = Math.round((x / width * walk) - (walk / 2))
  const yWalk = Math.round((y / height * walk) - (walk / 2))
  text.style.textShadow = `
  ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7)
  `
  console.log(e)
}


hero.addEventListener('mousemove', shadow)