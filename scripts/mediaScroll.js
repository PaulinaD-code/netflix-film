let mainImg = document.querySelector('.offer-image');

window.addEventListener('scroll', ()=> {
  const scrollUp = window.scrollX;
  const scrollDown = window.scrollY;

  if(!scrollDown){
    mainImg.className = 'offer-image'
  } else if (!scrollUp){
    mainImg.className = 'offer-image-blur'
  } 
})

/* Resources button */

const resourcesBtn = document.getElementById('res-nav-el')
let anchorContainer7 = document.querySelector('.resources--container');
let backgroundIcon = document.querySelector('.btn-icon-arrow');
let buttonNavContainer = document.querySelector('.buttons-n-nav');

resourcesBtn.addEventListener('click', ()=>{
  anchorContainer7.classList.toggle('active');
  backgroundIcon.classList.toggle('active');
  buttonNavContainer.classList.toggle('active');
})
