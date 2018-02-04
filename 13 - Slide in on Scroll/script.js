// Reduces the frequency ar which a function is called
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Select all images
const sliderImages = document.querySelectorAll(".slide-in");

function checkSlide(e) {
  sliderImages.forEach(sliderImage => {
    // Pixel position of half way through the image
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
    // Pixel posidion of the bottom of the image
    const sliderBottom = sliderImage.offsetTop + sliderImage.height;
    // detect if half the image is shown
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    // detect if the image is scrolled past the window (off screen)
    const isNotScrolledPast = window.scrollY < sliderBottom;

    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));