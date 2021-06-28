//Открытие меню
var navToggle = document.querySelector('main-nav__buttom');

navToggle.classList.remove('main-nav__buttom--nojs');
navToggle.addEventListener('click', function() {
    if (navToggle.classList.contains('main-nav__buttom--closed')) {
        navToggle.classList.remove('main-nav__buttom--closed');
        navToggle.classList.add('main-nav__buttom--opened');
    } else {
        navToggle.classList.add('main-nav__buttom--closed');
        navToggle.classList.remove('main-nav__buttom--opened');
    } 
});