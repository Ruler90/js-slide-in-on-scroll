/* eslint-disable semi */

// SECTION 3 - From Right to Left

const imgToSlideIn3 = document.querySelector('.imgSlide3');

function slideInOnScrollFromRight () {
  console.log("sth");
  if (scrollY > 200) {
    imgToSlideIn3.classList.remove('elementHidden');
    imgToSlideIn3.classList.add('animation', 'animation--time', 'animation__slideFromRightToLeft');
    imgToSlideIn3.style.bottom = '-4px';
    imgToSlideIn3.style.left = '0%';
  }
}

// SECTION 4 - From Left to Right

const elementToSlideIn4 = document.querySelector('.textWithImage');

function slideInOnScrollFromLeft () {
  if (scrollY > 500) {
    elementToSlideIn4.classList.remove('elementHidden');
    elementToSlideIn4.classList.add('animation', 'animation--time', 'animation__slideFromLeftToRight');
    elementToSlideIn4.style.right = '0%';
  }
}

// SECTION 5 - From Bottom to Top

const imgToSlideIn5 = document.querySelector('.imgSlide5');

function slideInOnScrollFromBottom () {
  if (scrollY > 800) {
    imgToSlideIn5.classList.remove('elementHidden');
    imgToSlideIn5.classList.add('animation', 'animation--time', 'animation__slideFromBottomToTop');
    imgToSlideIn5.style.top = '0%';
  }
}

// SECTION 6 - From Bottom to Top

const imgToSlideIn6 = document.querySelector('.imgSlide6');

function slideInOnScrollFromTop () {
  if (scrollY > 1100) {
    imgToSlideIn6.classList.remove('elementHidden');
    imgToSlideIn6.classList.add('animation', 'animation--time', 'animation__slideFromTopToBottom');
    imgToSlideIn6.style.bottom = '0%';
  }
}

window.addEventListener('scroll', _.throttle(function () {
  slideInOnScrollFromRight();
  slideInOnScrollFromLeft()
  slideInOnScrollFromBottom();
  slideInOnScrollFromTop();
}, 300));
