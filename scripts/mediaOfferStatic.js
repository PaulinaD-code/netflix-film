
const body = document.querySelector('.media--body .media-offer-card');
const langBtn = document.getElementById('choose--language')
let langSlider = document.querySelector('.choose--lang-hidden');
let navBar = document.querySelector('.log-in');
const langExit = document.querySelector('.exit--button');
const countryChoosing = document.querySelector(' .slider-country');
const inputCountry = document.querySelector('.slider--country--selection');
const sliderOff = document.querySelector(' .slider-in-country--selection');

function hideButton(){
  sliderOffer1.className = 'slider-in-country--selection';
}

langBtn.addEventListener('click', function(){
  langSlider.className = 'choose--lang-visible';
  countryChoosing.className = 'slider-country';
  inputCountry.className = 'slider--country--selection';
  hideButton()
})

langExit.addEventListener('click', function(){
  langSlider.className = 'choose--lang-hidden'
})

document.querySelectorAll('.language-el')
  .forEach((el)=>{
    el.addEventListener('click', ()=>{
      langSlider.className = 'choose--lang-hidden'
    })
  })