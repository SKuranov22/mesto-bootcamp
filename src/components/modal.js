import { popUpProfile, 
    profileName,
    profileDescription,   
    profileNameInput, 
    profileDescriptionInput,
    placeName, 
    placeUrl, 
    popUpCard, 
    cardForm, 
    listCardContainer } from './constants.js';

import { closePopUp } from './utils.js';

import { createElement } from './card.js';

// Функция отправки формы редактирования с отменой стандартной отправки
const sendProfileForm = (evt) => {
    evt.preventDefault();
    profileName.textContent = profileNameInput.value;
    profileDescription.textContent = profileDescriptionInput.value;
    closePopUp (popUpProfile);
};

// Функция отправки заполненной карточки
function addCard (evt) {
    evt.preventDefault();
  
    const newPlaceName = placeName.value;
    const newPlaceUrl = placeUrl.value;
  
    const newCard = createElement({name: newPlaceName, link: newPlaceUrl});
  
    listCardContainer.prepend(newCard);
  
    cardForm.reset();
    closePopUp(popUpCard);
}

export { sendProfileForm, addCard }