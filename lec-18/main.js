const timeNodes = [...document.querySelectorAll('[data-time]')];

// const seconds = timeNodes
//   .map(node=> node.dataset.time)
//   .map(timeCode => {
//     const [mins,secs] = timeCode.split(':').map(parseFloat)
//     return (mins * 60)+secs;
//   })
//   .reduce((total,second)=> total + second)

const seconds = timeNodes.reduce((total, node) => {
  const [mins, secs] = node.dataset.time.split(':').map(parseFloat);
  return total + (mins * 60) + secs;
},0)


let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft %= 3600;
const minutes = Math.floor(secondsLeft / 60)
secondsLeft %= 60;

time = [hours,minutes,secondsLeft].map(unit=>String(unit).padStart(2,'0')).join(':');
console.log(time)