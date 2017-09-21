const enhancedElements = document.querySelectorAll('.no-js');
const header = document.getElementById('nav');

enhancedElements.forEach(element => {
    element.classList.remove("no-js");
    element.classList.add("js");
});

window.addEventListener('scroll', event => {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollPosition > 10 && !header.classList.contains("scrolled")) {
        console.log('Add classes');
        header.classList.add("scrolled", "nav--smaller");
        header.querySelector('.nav__list').classList.add("nav__list--smaller");
        header.querySelector('.nav__link--home').classList.add("nav__link--smaller");
        // header.querySelector('.logo').classList.add('logo--smaller');
        header.querySelector('.logo__text').classList.add('logo__text--smaller');
        header.querySelector('.logo__image').classList.add('logo__image--smaller');
        return;
    }

    if (header.classList.contains("scrolled") && scrollPosition < 10) {
        console.log('Remove classes');
        header.classList.remove("scrolled", "nav--smaller");
        header.querySelector('.nav__list').classList.remove("nav__list--smaller");
        header.querySelector('.nav__link--home').classList.remove("nav__link--smaller");
        // header.querySelector('.logo').classList.remove('logo--smaller');
        header.querySelector('.logo__text').classList.remove('logo__text--smaller');
        header.querySelector('.logo__image').classList.remove('logo__image--smaller');
    }

});