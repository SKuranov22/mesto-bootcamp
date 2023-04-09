import { popUpProfile, 
    profileName,
    profileAvatar,
    popUpAvatarEdit,
    profileDescription,   
    profileNameInput, 
    profileDescriptionInput,
    profileAvatarInput,
    placeName, 
    placeUrl, 
    popUpCard, 
    cardForm, 
    listCardContainer } from './constants.js';

import { closePopUp } from './utils.js';

import { createElement } from './card.js';

import { setUserCard, setUserInfo, setUserAvatar } from './api.js';

import { validationConfig } from './constants.js';

// Функция отправки формы редактирования с отменой стандартной отправки

const sendProfileForm = (evt) => {
    evt.preventDefault();
    const submitButton = evt.submitter;
    const initialButtonText = submitButton.textContent;
    submitButton.textContent = "Сохранение...";
    setUserInfo({
      name: profileNameInput.value,
      about: profileDescriptionInput.value,
    })
      .then((result) => {
        profileName.textContent = result.name;
        profileDescription.textContent = result.about;
      })
      .then(() => {
        cleanFormErrors(popUpProfile, validationConfig); 
        closePopUp(popUpProfile);
      })
      .catch((err) => {
        console.log(err); // выводим ошибку в консоль
      })
      .finally(() => {
        submitButton.textContent = initialButtonText;
      });
};

// Функция отправки обновления аватарки
const sendAvatarForm = (evt) => {
    evt.preventDefault();
    const submitButton = evt.submitter;
    const initialButtonText = submitButton.textContent;
    submitButton.textContent = 'Сохранение...';
    setUserAvatar({avatar: profileAvatarInput.value})
      .then((result) => {
        profileAvatar.src = result.avatar
      })
      .then(() => {
        avatarForm.reset();
        cleanFormErrors(popUpAvatarEdit, validationConfig); 
        closePopUp(popUpAvatarEdit);
      })
      .catch((err) => {
        console.log(err); // выводим ошибку в консоль
      })
      .finally(() => {
        submitButton.textContent = initialButtonText;
      });
};

// Функция отправки заполненной карточки
function addCard (evt) {
    evt.preventDefault();
    const submitButton = evt.submitter;
    const initialButtonText = submitButton.textContent;
    submitButton.textContent = 'Создание...';
    setUserCard({name: placeName.value, link: placeUrl.value})
      .then(res => {
        // добавляем новую карточку в список на странице
        const newCardElement = createElement(res);
        listCardContainer.prepend(newCardElement);
        cardForm.reset();
      })
      .then(() => {
        cardForm.reset();
        cleanFormErrors(popUpCard, validationConfig);
        closePopUp(popUpCard);
      })
      .catch((err) => {
        console.log(err); // выводим ошибку в консоль
      })
      .finally(() => {
        submitButton.textContent = initialButtonText;
      });
};

export { sendProfileForm, sendAvatarForm, addCard }