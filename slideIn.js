/* eslint-disable semi */

let containerWidth;
let containerHeight;

function checkContainerWidth () {
  containerWidth = document.querySelector('.standardSection').clientWidth;
}
function checkContainerHeight () {
  containerHeight = document.querySelector('.standardSection').clientHeight;
}

// SECTION 3 - From Right to Left

const imgToSlideIn3 = document.querySelector('.imgSlide3');

function outOfViewRight () {
  checkContainerWidth();
  imgToSlideIn3.style.left = containerWidth + 'px';
  imgToSlideIn3.style.bottom = '-4px';
}

function slideInOnScrollFromRight () {
  if (scrollY > 200) {
    imgToSlideIn3.style.transform = 'translateX(-' + containerWidth + 'px)';
  }
}

// SECTION 4 - From Left to Right

const imgToSlideIn4 = document.querySelector('.textWithImage');

function outOfViewLeft () {
  checkContainerWidth();
  imgToSlideIn4.style.right = containerWidth + 'px';
}

function slideInOnScrollFromLeft () {
  if (scrollY > 500) {
    imgToSlideIn4.style.transform = 'translateX(' + containerWidth + 'px)';
  }
}

// SECTION 5 - From Bottom to Top

const imgToSlideIn5 = document.querySelector('.imgSlide5');

function outOfViewBottom () {
  checkContainerHeight();
  imgToSlideIn5.style.top = containerHeight + 'px';
  imgToSlideIn5.style.left = '40%';
}

function slideInOnScrollFromBottom () {
  if (scrollY > 800) {
    imgToSlideIn5.style.transform = 'translateY(-' + containerHeight + 'px)';
  }
}

// SECTION 6 - From Bottom to Top

const imgToSlideIn6 = document.querySelector('.imgSlide6');

function outOfViewTop () {
  checkContainerHeight();
  imgToSlideIn6.style.bottom = containerHeight + 'px';
  imgToSlideIn6.style.left = '25%';
}

function slideInOnScrollFromTop () {
  if (scrollY > 1100) {
    imgToSlideIn6.style.transform = 'translateY(' + containerHeight + 'px)';
  }
}

window.addEventListener('load', function () {
  outOfViewRight();
  outOfViewLeft();
  outOfViewBottom()
  outOfViewTop()
});
window.addEventListener('scroll', function () {
  slideInOnScrollFromRight();
  slideInOnScrollFromLeft()
  slideInOnScrollFromBottom();
  slideInOnScrollFromTop();
});
// window.addEventListener('resize', imageCenter);
