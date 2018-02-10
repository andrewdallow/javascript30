const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const reset = document.querySelector('.reset');
const checked = document.querySelectorAll('.check');

const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}
/**
 * Creat the HTML list of all the list items.
 * @param  {Array}  [plates=[]] [description]
 * @param  {[type]} platesList  [description]
 */
function populateList(plates = [], platesList) {
  if (items.length === 0) {
    platesList.innerHTML = "<li>Loading Tapas...</li>";
  } else {
    platesList.innerHTML = plates.map((plate, i) => {
      return `
        <li>
          <input type="checkbox" data-index="${i}" id="item${i}" ${plate.done ? 'checked' : ''}/>
          <label for="item${i}">${plate.text}</label>
        </li>
      `;
    }).join('');
  }
}
/**
 * Toggle the item between checked and Unchecked
 * @param  {[type]} e event
 */
function toggleDone(e) {
  if (!e.target.matches('input')) return; // skip this unless its an input
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}
/**
 * Delete all list items
 */
function deleteAll() {
  items.length = 0;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}
/**
 * check all items in list
 */
function checkItems(e) {
  items.forEach(item => {
    item.done = e.target.dataset.checked == 'true';
  });
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
reset.addEventListener('click', deleteAll);
checked.forEach(button => {button.addEventListener('click', checkItems)});

populateList(items, itemsList);
