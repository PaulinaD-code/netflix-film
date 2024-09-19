const offerInbody = document.querySelector('.media--body');
const inOfferButton = document.querySelector('.media--body .premierre-date-country');
const buttonText = document.querySelector('.media--body .button-media--text');
const sliderInoffer = document.querySelector('.media--body .slider-in-country--selection');
const dateAllow = document.querySelector('.media--body .date--allow')
const hideIcon = document.querySelector('.media--body .img--offer--button');
const showIcon = document.querySelector('.media--body .img-moving-icon-hidden');
const mediaIcon = document.querySelector('.media--body .button-media--icon');
const movingIcon = document.querySelector('.media--body .button-media--icon-invisible')
const check = document.querySelector('.media--body .img--box');
let picked = document.getElementById('stat');
const buttonImg = document.querySelector('.media--body .button-media--icon');
let buttonNavText = document.querySelector('.media--body .menu--button2');

inOfferButton.addEventListener('click', ()=>{
  sliderInoffer.classList.toggle('slider-in-country--selection-visible');
  buttonImg.classList.toggle('active');
})

function buttonExit(){
  mediaIcon.className = 'button-media--icon';
  movingIcon.className = 'button-media--icon-invisible';
}

function loadCountry(countryId){
  buttonText.textContent = `${countryId.textContent}`;
  dateAllow.textContent = ' 2 sierpnia 2023 r. o 9:00 AM CEST';
  sliderInoffer.className = 'slider-in-country--selection';
  buttonExit();
  picked.textContent = `${countryId.textContent}`;
}


