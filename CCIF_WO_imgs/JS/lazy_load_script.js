let lazyImages = [...document.querySelectorAll('.lazy-image')];
let inAdvance = 300;

function lazyLoad() {
  lazyImages.forEach(image => {
    if (image.offsetTop < window.innerHeight + window.pageYOffset + inAdvance) {
      image.src = image.dataset.src;
      image.onload = () => image.classList.add('loaded');
    }
  });

  // if all loaded removeEventListener
}

lazyLoad();

window.addEventListener('scroll', _.throttle(lazyLoad, 16));
window.addEventListener('resize', _.throttle(lazyLoad, 16));

window.addEventListener('load', function() {
  let lazyImages = [...document.querySelectorAll('.lazy-image')];
  let inAdvance = 0; // used to 300
  
  lazyImages.forEach(image => {
    if (image.offsetTop < window.innerHeight + window.pageYOffset + inAdvance) {
      image.src = image.dataset.src;
      image.onload = () => image.classList.add('loaded');
    }
  });

});

