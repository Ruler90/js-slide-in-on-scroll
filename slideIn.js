/* eslint-disable semi */

// sprawdzenie, jaka jest szerokość elementu (przy mniejszym ekranie) - dzięki temu można dynamicznie podmienić animację?
// client width to jest dokładna szerokość po odjęciu marginesów, paddingu itp.
// document.querySelector('.standardSection').clientWidth



const imgToSlideIn3 = document.querySelector('.toSlideIn3');
let elementWidth;

function outOfView () {
  elementWidth = document.querySelector('.standardSection').clientWidth;
//   imgToSlideIn3.style.left = elementWidth + 'px';
  imgToSlideIn3.style.left = '100%';
}

function slideInOnScroll () {
  if (scrollY > 200) {
    elementWidth = document.querySelector('.standardSection').clientWidth;
    imgToSlideIn3.style.transform = 'translateX(-' + elementWidth + 'px)';
  }
//   imgToSlideIn3.style.transform = 'translateX(-300px)';
}

// function slideInOnScroll () {
//   if (scrollY > 1000 && window.innerWidth > 1059) {
//     reviewsSection.classList.add('reviewsSlideInAnimation');
//   }
// }

// function removeSlideInClass () {
//   if (window.innerWidth <= 1059 && reviewsSection.classList.contains('reviewsSlideInAnimation')) {
//     reviewsSection.classList.remove('reviewsSlideInAnimation')
//   }
// }

window.addEventListener('load', outOfView);
window.addEventListener('resize', outOfView);
window.addEventListener('scroll', slideInOnScroll);
