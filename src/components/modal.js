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

import { setUserCard, setUserInfo } from './api.js';

// Функция отправки формы редактирования с отменой стандартной отправки
const sendProfileForm = (evt) => {
    evt.preventDefault();
    setUserInfo({name: profileNameInput.value , about: profileDescriptionInput.value})
        .then((result) => {
            profileName.textContent = result.name
            profileDescription.textContent = result.about
        })
        .catch((err) => {
            console.log(err); // выводим ошибку в консоль
        }); 
    closePopUp (popUpProfile);
};

// Функция отправки заполненной карточки
function addCard (evt) {
    evt.preventDefault();
    setUserCard({name: placeName.value, link: placeUrl.value})
        .then((result) => {
            const newCard = createElement({name: result.name, link: result.link});
            listCardContainer.prepend(newCard);
            cardForm.reset();
        })
        .catch((err) => {
            console.log(err); // выводим ошибку в консоль
        }); 
    closePopUp(popUpCard);       
}

export { sendProfileForm, addCard }