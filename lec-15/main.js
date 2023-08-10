const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const uncheck = document.querySelector('.uncheck')
const check = document.querySelector('.check')
const clear = document.querySelector('.clear')
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
  e.preventDefault()
  const text = this.querySelector('[name="item"]').value;
  const item = {
    text,
    done: false
  }
  items.push(item)
  populateList(items, itemsList)
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
    <li>
      <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}  />
      <label for="item${i}">${plate.text}</label>
    </li>
    `;
  }).join('');
}

function toggleDone(e) {
  if (!e.target.matches('input')) return;
  const index = e.target.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
}

function uncheckAll(){
  items.forEach(item => {
     item.done = false; 
  });
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items,itemsList)
}
function checkAll(){
  items.forEach(item => {
     item.done = true; 
  });
  populateList(items,itemsList)
  localStorage.setItem('items', JSON.stringify(items));
}

function clearAll(){
  items.splice(0,items.length)
  populateList(items,itemsList)
  localStorage.setItem('items', JSON.stringify(items));
}


addItems.addEventListener('submit', addItem)
itemsList.addEventListener('click', toggleDone)
uncheck.addEventListener('click',uncheckAll)
check.addEventListener('click',checkAll)
clear.addEventListener('click',clearAll)
populateList(items, itemsList);