const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
function setDate(){
  const now = new Date();
  
  const seconds = now.getSeconds();
  if(!seconds) 
    secondHand.style.transition = 'none';
  const secondsDeg = ((seconds/60)*360) + 90;
  secondHand.style.transform = `rotate(${secondsDeg}deg)`;

  const minutes = now.getMinutes();
  if(!minutes) 
    secondHand.style.transition = 'none';
  const minutesDeg = ((minutes/60)*360)+90;
  minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
  
  let hours =now.getHours();
  if(hours>12)
    hours -= 12;
  if(hours=== 12)
    hourHand.style.transition ='none';
  const hoursDeg = ((hours/12)*360)+90;
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}



setInterval(setDate,1000);