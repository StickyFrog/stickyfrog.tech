'use strict';

var enhancedElements = document.querySelectorAll('.no-js');
var header = document.getElementById('nav');

enhancedElements.forEach(function (element) {
    element.classList.remove("no-js");
    element.classList.add("js");
});

window.addEventListener('scroll', function (event) {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollPosition > 50 && !header.classList.contains("scrolled")) {
        header.classList.add("scrolled", "nav--smaller");
        header.querySelector('.nav__list').classList.add("nav__list--smaller");
        header.querySelector('.nav__link--home').classList.add("nav__link--smaller");
        header.querySelector('.logo__text').classList.add('logo__text--smaller');
        header.querySelector('.logo__image').classList.add('logo__image--smaller');
        return;
    }

    if (header.classList.contains("scrolled") && scrollPosition < 50) {
        header.classList.remove("scrolled", "nav--smaller");
        header.querySelector('.nav__list').classList.remove("nav__list--smaller");
        header.querySelector('.nav__link--home').classList.remove("nav__link--smaller");
        header.querySelector('.logo__text').classList.remove('logo__text--smaller');
        header.querySelector('.logo__image').classList.remove('logo__image--smaller');
    }
});
