// Limits the rate at witch function can fire
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        let context = this, args = arguments;
        let later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    };
};


const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    console.count(e);
}
window.addEventListener('scroll', debounce(checkSlide));
