//  Limits the rate at witch function can fire
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  const sliderImages = document.querySelectorAll('.slide-in');
  function checkSlide() {
    sliderImages.forEach(sliderImage => {
      // the pixel level of when each of the images should be slide in at - HALF WAY THROUGHT THE IMAGE
      const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
      // the pixel level of how far down it bottom is - BOTTOM OF THE IMAGE
      const imageBottom = sliderImage.offsetTop + sliderImage.height;
      const isHalfShown = slideInAt > sliderImage.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;
      if (isHalfShown && isNotScrolledPast) {
        sliderImage.classList.add('active');
      } else {
        sliderImage.classList.remove('active');
      }
    });
  }
  window.addEventListener('scroll', debounce(checkSlide));
