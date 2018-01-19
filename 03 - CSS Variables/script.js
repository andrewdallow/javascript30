// select all the control inputs.
const inputs = document.querySelectorAll('.controls input');

/**
 * Update the given CSS variable, apending a data-suffix if one exists
 */
function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// Listen for events on the page controls and update the CSS variables when changed.
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));