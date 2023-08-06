const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

checkboxes.forEach(checkbox => checkbox.addEventListener('click',handleCheck))

let lastChecked;

function handleCheck(e){
  //check if shift key is pressed and they are checking the checkbox
  let inBetween = false;
  if(e.shiftKey && this.checked){
    checkboxes.forEach(checkbox=> {
      if(checkbox === this || checkbox === lastChecked){
        inBetween = !inBetween
      }
      if(inBetween){
        checkbox.checked = true
      }
    })
  }
  lastChecked = this;
}