const countryBtn = document.querySelector('.menu--button2');
let sliderCountry = document.querySelector('.slider-country');
const exitCountry = document.querySelector(' .exitCountry');
let nav = document.querySelector('.log-in');
const langChoosing = document.querySelector('.choose--lang-hidden');
const countryName = document.querySelector(' .country--name');
const buttonMediaText = document.querySelector('.button-media--text');
const sliderOffer1 = document.querySelector(' .slider-in-country--selection');
let burgerContainer = document.querySelector('.js-country-responsive-hb');


/* display slider */
function hideButton(){
  sliderOffer1.className = 'slider-in-country--selection';
}

countryBtn.addEventListener('click', function(){
  sliderCountry.className = 'slider-country-visible';

  langChoosing.className = 'choose--lang-hidden';
  burgerContainer.classList.add('active')
  hideButton()
})

function Exit(){
  sliderCountry.className = 'slider-country';
}

exitCountry.addEventListener('click', Exit)

function displayCountry(country, identity){
  selection.className = 'slider--country--selection';
  countryName.textContent = `${country.textContent}`;
  buttonMediaText.textContent = `${identity.textContent}`;
  Exit();
}

/* display countries */

const countrySelect = document.querySelector('.country--selection');
const selection = document.querySelector(' .slider--country--selection');
let arrowImage = document.querySelector('.country--arrow');

countrySelect.addEventListener('click', function(){
  selection.classList.toggle('slider--country--selection-visible');
  arrowImage.classList.toggle('active');
})
