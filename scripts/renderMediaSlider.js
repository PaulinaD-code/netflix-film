import { 
    countryArray,
    matchingId
 } from "./data/dataCountry.js";

 let mediaButtonElement = document.querySelector('.js-button-media-text');
let slider_offer = document.querySelector('.media--body .slider-in-country--selection');
const media_icon = document.querySelector('.media--body .button-media--icon');
const moving_icon = document.querySelector('.media--body .button-media--icon-invisible');
let pickedElement = document.getElementById('stat');
let staticCountryEl = document.querySelector('.js-country-name-static');


 function renderMediaSlider(){
    let html= ``;

    countryArray.forEach((countryObject)=>{
        html += `
        <div class="country-option js-media-country-option" 
        id="${countryObject.id}"
        data-object-id="${countryObject.id}">
                  <div class="box-of-img">
                    <div class="img--box" id="1">
                      <img src="../img/checked.png" class="checkedImg" alt="" />
                    </div>
                  </div>              
                  <div class="country--name"  >
                    ${countryObject.variety}
                  </div>
                </div>       
        `

        document.querySelector('.js-media-slider-countries').innerHTML = html;
    })

    document.querySelectorAll('.js-media-country-option')
        .forEach((element)=>{
            element.addEventListener('click', ()=>{
                const objectId = element.dataset.objectId;
                let matchingCountry = matchingId(objectId);
                mediaButtonElement.innerHTML = matchingCountry.variety;
                staticCountryEl.innerHTML =  matchingCountry.variety;

                slider_offer.className = 'slider-in-country--selection';
                media_icon.className = 'button-media--icon';
                moving_icon.className = 'button-media--icon-invisible';
                pickedElement.textContent = `${countryId.textContent}`;
                document.querySelector('.js-date-allow').innetHTML = matchingCountry.dateString;
            })
        })
 }

 mediaButtonElement.addEventListener('click', ()=>{
    renderMediaSlider();
 })