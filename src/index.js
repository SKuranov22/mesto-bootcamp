import './pages/index.css'; 

import { popUpProfile, 
    popUpProfileButtonOpen, 
    popUpProfileButtonClose, 
    profileName,
    profileDescription, 
    placeName, 
    placeUrl, 
    profileForm, 
    popUpOpened, 
    popUpOverlay, 
    profileNameInput, 
    profileDescriptionInput, 
    popupCaption, 
    popupImage, 
    popUpCard, 
    popUpCardButtonAdd,
    popUpCardButtonClose, 
    popUpImage, 
    popUpImageButtonClose, 
    listCardContainer, 
    cardForm, 
    cardTemplate, 
    initialCards } from './components/constants.js';

import {openPopUp, 
    closePopUp } from './components/utils.js';

import { sendProfileForm } from './components/modal.js';

import { createElement, 
    addCard, 
    renderCards, 
    openPopupScaleImage } from './components/card.js';

import { showInputError, 
    hideInputError, 
    isValid, 
    setIventListeners, 
    enableValidation, 
    hasInvalidInput, 
    toggleButtonState } from './components/validate.js';



// Вызовы функций открытия, закрытия попапа редактирования профиля
popUpProfileButtonOpen.addEventListener('click', function() { 
    profileNameInput.value = profileName.textContent;
    profileDescriptionInput.value = profileDescription.textContent;
    openPopUp(popUpProfile)
});
  
popUpProfileButtonClose.addEventListener('click', () => closePopUp(popUpProfile));
  
// Вызов функции сохранения изменений данных в форме редактирования
profileForm.addEventListener('submit', sendProfileForm);

// Вызовы функций открытия, закрытия попапа добавления карточки
popUpCardButtonAdd.addEventListener('click', () => openPopUp(popUpCard));
popUpCardButtonClose.addEventListener('click', () => closePopUp(popUpCard));

// Вызов функции закрытия попапа с увеличенным изображением
popUpImageButtonClose.addEventListener('click', () => closePopUp(popUpImage));

// Отправка данных новой карточки 
renderCards();
cardForm.addEventListener('submit', addCard);

// Валидация
enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
});