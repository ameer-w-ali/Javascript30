const divs = document.querySelectorAll('div');
const button = document.querySelector('button')
function logText(e) {
  e.stopPropagation();
  console.log(this.classList.value);
}

divs.forEach(div => div.addEventListener('click', logText, {
  capture: false,
  once: true,
}));

button.addEventListener('click', () => {
  console.log('CLICK!!!!!');
}, {
  once: true
})

//capture:true -> from top to bottom capture and fire the event. i.e. one,two, three

/*
capture:false (default) -> from top to bottom capture all the events then fire the events from bottom to top.
i.e. three two one
*/

//e.stopPropagation -> Only fire one event on the basis of capture true or false. i.e. one or three

//once:true -> listen for the event only once.
