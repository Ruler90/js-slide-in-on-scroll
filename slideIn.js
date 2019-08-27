/* eslint-disable semi */

let containerWidth;

function checkContainerWidth () {
  containerWidth = document.querySelector('.standardSection').clientWidth;
}

// SECTION 3 - From Right to Left

const imgToSlideIn3 = document.querySelector('.imgSlide3');

function outOfViewRight () {
  checkContainerWidth();
  imgToSlideIn3.style.left = containerWidth + 'px';
}

function slideInOnScrollFromRight () {
  if (scrollY > 200) {
    imgToSlideIn3.style.transform = 'translateX(-' + containerWidth + 'px)';
  }
}

// SECTION 4 - From Left to Right

const imgToSlideIn4 = document.querySelector('.imgSlide4');

function outOfViewLeft () {
  checkContainerWidth();
  imgToSlideIn4.style.right = containerWidth + 'px';
}

function slideInOnScrollFromLeft () {
  if (scrollY > 500) {
    imgToSlideIn4.style.transform = 'translateX(' + containerWidth + 'px)';
  }
}

// SECTION 5 - From Right to Left

const imgToSlideIn5 = document.querySelector('.imgSlide5');

function outOfViewRight2 () {
  checkContainerWidth();
  imgToSlideIn5.style.left = containerWidth + 'px';
}

function slideInOnScrollFromRight2 () {
  if (scrollY > 800) {
    imgToSlideIn5.style.transform = 'translateX(-' + containerWidth / 1.5 + 'px)';
  }
}

// function imageCenter () {
//   if (window.innerWidth < 600) {
//     imgToSlideIn5.style.transform = '';
//     imgToSlideIn5.style.left = '40%';
//   }
// }

window.addEventListener('load', outOfViewRight);
window.addEventListener('load', outOfViewRight2);
window.addEventListener('load', outOfViewLeft);
window.addEventListener('scroll', slideInOnScrollFromRight);
window.addEventListener('scroll', slideInOnScrollFromRight2);
window.addEventListener('scroll', slideInOnScrollFromLeft);
// window.addEventListener('resize', imageCenter);
