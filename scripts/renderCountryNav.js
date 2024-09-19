import { 
  countryArray,
  matchingId
 } from "./data/dataCountry.js";

let countrySelection = document.querySelector('.js-country-selection');
let country_name = document.querySelector(' .js-country-bnav-button');
let buttonMedia = document.querySelector('.js-button-media-text');
let premiereDate = document.querySelector('.js-date--allow');
let sliderCountryContainer = document.querySelector('.slider-country');
let burger_el = document.querySelector('.js-country-responsive-hb')

let selectionContainer = document.querySelector(' .slider--country--selection');

function renderCountrySlider(){
    let html = '';

    countryArray.forEach((country)=>{
        html += `
        <div class="country-option" 
        id="${country.id}"
        data-country-id="${country.id}">
            <div class="box-of-img">
              <div class="img--box">
                <img src="../img/checked.png" class="checkedImg" alt="" />
              </div>
            </div>
            
            <div class="country--name" >
              ${country.name}
            </div>
          </div>       
        `

        document.querySelector(`.js-countries`).innerHTML = html;
    })

    document.querySelectorAll('.country-option')
          .forEach((option)=>{
            option.addEventListener('click', ()=>{
              let countryId = option.dataset.countryId;
              let matchingObject = matchingId(countryId);

              let countryVariety = matchingObject.btnText ?  
              matchingObject.btnText : matchingObject.name;

              selectionContainer.className = 'slider--country--selection';
              country_name.innerHTML = countryVariety;

              buttonMedia.innerHTML =  matchingObject.variety;
              
              premiereDate.innerHTML = matchingObject.dateString;
              
              sliderCountryContainer.className = 'slider-country';
            })
          })
}

countrySelection.addEventListener('click', ()=>{
    renderCountrySlider();
});

if(burger_el.className === "country-responsive-hb js-country-responsive-hb"){
  renderCountrySlider();
} 

