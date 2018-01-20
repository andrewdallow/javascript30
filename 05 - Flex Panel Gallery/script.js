const panels = document.querySelectorAll('.panel');
/**
 * Toggle the image from an expanded state to a contracted state and vice versa.
 */
function toggleOpen() {
  this.classList.toggle('open');
}
/**
 * Toggle the entrence and exit of the text and vice versa.
 */
function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}
// Listen for when an image is clicked and act accordingly
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));