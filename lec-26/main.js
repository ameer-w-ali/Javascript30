const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground')
const nav = document.querySelector('nav');

function handleEnter() {
  this.classList.add('trigger-enter');
  setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150)
  background.classList.add('open')

  const dropdown = this.querySelector('.dropdown');

  const navCoords = nav.getBoundingClientRect();
  const dropdownCoords = dropdown.getBoundingClientRect();

  const Coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    x: dropdownCoords.left - navCoords.left,
    y: dropdownCoords.top - navCoords.top,
  }

  background.style.setProperty('width', `${Coords.width}px`);
  background.style.setProperty('height', `${Coords.height}px`);
  background.style.setProperty('transform', `translate(${Coords.x}px,${Coords.y}px)`)
}
function handleLeave() {
  this.classList.remove('trigger-enter-active');
  this.classList.remove('trigger-enter');
  background.classList.remove('open')
}


triggers.forEach(triggers => triggers.addEventListener('mouseenter', handleEnter))
triggers.forEach(triggers => triggers.addEventListener('mouseleave', handleLeave))