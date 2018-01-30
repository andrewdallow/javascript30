const pressed = [];
const secretCode = 'wesbos';

/**
 * Listen for a specified string typed into the window.
 */
window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  // keep the array the same length as the secretCode
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join("").includes(secretCode)) {
    console.log('DING DING!');
    cornify_add();
  }
  console.log(pressed);
});