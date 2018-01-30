/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullscreen = player.querySelector('.fullscreen');

/* Build our functions */
/**
 * Toggle the video between playing and paused.
 */
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
/**
 * Toggle the play / pause button icon
 * @return {[type]} [description]
 */
function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

/**
 * Skip a specified amount of time in the video, given in the html data-skip
 * element.
 */
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

/**
 * Handle the range sliders.
 */
function handleRangeUpdate() {
  video[this.name] = this.value;
}

/**
 * Handle the change in the progress bar.
 */
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

/**
 * Set the video time by dragging the progress bar.
 */
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

/**
 * Toggle between fullscreen mode and normal screen mode. 
 */
function toggleFullscreen() {
  document.webkitFullscreenElement ? document.webkitExitFullscreen() : player.webkitRequestFullscreen();
}
/* Hook up the Event listeners */

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);


toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

fullscreen.addEventListener('click', toggleFullscreen);