const burgerExit = document.querySelector('.burger-exit');
let burgerMenu = document.getElementById("menu-btn-ids");
let langSliderHb = document.querySelector('.media--body .choose--lang-hidden');
let navBarHb = document.querySelector('.media--body .nav');
let sliderCountryHb = document.querySelector('.media--body .slider-country');
let responsiveMenu = document.querySelector('.language-responsive-container');

burgerExit.addEventListener('click', () => {
  burgerMenu.className = 'menu--btn';
  navBarHb.className = 'nav';
  langSliderHb.className = 'choose--lang-hidden';
  sliderCountryHb.className = 'slider-country';
})