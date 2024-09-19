const burgerBtn = document.querySelector('.hamburger--btn');
let menuBtns = document.querySelector('.menu--btn');
let responsiveMenuHb = document.querySelector('.language-responsive-container');

burgerBtn.addEventListener('click', ()=>{
  menuBtns.classList.toggle('active');
  responsiveMenuHb.classList.toggle('active');
})