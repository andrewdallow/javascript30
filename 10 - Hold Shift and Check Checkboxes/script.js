const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  // Check if they had tthe shift key is down.
  // and check that they are selecting it.
  let inBtw = false;
  if (e.shiftKey && this.checked) {
    //loop over every checkboxes
    checkboxes.forEach(box => {
      console.log(box);
      if (box === this || box === lastChecked) {
        inBtw = !inBtw;
        console.log('Checking in between')
      }
      // set the inbetween checkboxed to checked.
      if (inBtw) {
        box.checked = true;
      }
    });
  }
  lastChecked = this;
}
checkboxes.forEach(box => box.addEventListener('click', handleCheck));