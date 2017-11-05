'use strict';

// Enhance header nav to stick and shrink on scroll
var enhancedElements = document.querySelectorAll('.no-js');
var header = document.getElementById('nav');

var scrolled = false;

enhancedElements.forEach(function (element) {
    element.classList.remove("no-js");
    element.classList.add("js");
});

window.addEventListener('scroll', function (event) {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollPosition > 50 && !scrolled) {
        scrolled = true;
        header.classList.add("scrolled", "nav--smaller");
        header.querySelector('.nav__list').classList.add("nav__list--smaller");
        header.querySelector('.nav__link--home').classList.add("nav__link--smaller");
        header.querySelector('.logo__text').classList.add('logo__text--smaller');
        header.querySelector('.logo__image').classList.add('logo__image--smaller');
        return;
    }

    if (scrolled && scrollPosition < 50) {
        scrolled = false;
        header.classList.remove("scrolled", "nav--smaller");
        header.querySelector('.nav__list').classList.remove("nav__list--smaller");
        header.querySelector('.nav__link--home').classList.remove("nav__link--smaller");
        header.querySelector('.logo__text').classList.remove('logo__text--smaller');
        header.querySelector('.logo__image').classList.remove('logo__image--smaller');
    }
});

// Disable body scroll when mobile menu is open
var body = document.querySelector('body');
document.querySelector('a[href="#menu"]').addEventListener('click', function () {
    body.classList.add("noscroll");
});
document.querySelectorAll('a[href="#"], .menu__link').forEach(function (link) {
    link.addEventListener('click', function () {
        body.classList.remove("noscroll");
    });
});
