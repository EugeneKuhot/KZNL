'use strict';

(function () {

  const header = document.querySelector('.page-header__top');
  const discography = document.querySelector('.discography');
  const concertTours = document.querySelector('.concert-tours');
  const latterCompositions = document.querySelector('.latter-compositions');
  const contactBlock = document.querySelector('.contact');

  const allBlocksForAnimation = [header, discography, concertTours, latterCompositions, contactBlock];

  var options = {
    threshold: .1
  };

  if (document.documentElement.clientWidth < 768) {
    var options = {
      threshold: .1
    };
  }

  function aboutUsAnimation(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.classList.add('animated');
      }
    });
  }

  const observer = new IntersectionObserver(aboutUsAnimation, options);

  allBlocksForAnimation.forEach(block => observer.observe(block));

})();
