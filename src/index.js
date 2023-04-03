import './pages/index.css'; 

import { popUpProfile, 
    popUpProfileButtonOpen, 
    popUpProfileButtonClose, 
    profileName,
    profileDescription, 
    placeName, 
    placeUrl, 
    profileForm,  
    popUpOverlay, 
    profileNameInput, 
    profileDescriptionInput, 
    popupCaption, 
    popupImage, 
    popUpCard, 
    popUpCardButtonAdd,
    popUpCardButtonClose,
    popUpButtonSave,
    popUpImage, 
    popUpImageButtonClose, 
    listCardContainer, 
    cardForm, 
    cardTemplate, 
    initialCards } from './components/constants.js';

import { validationConfig,
    showInputError, 
    hideInputError, 
    isValid, 
    setIventListeners, 
    enableValidation, 
    hasInvalidInput, 
    toggleButtonState } from './components/validate.js';

import { openPopUp, 
    closePopUp } from './components/utils.js';

import { sendProfileForm, addCard } from './components/modal.js';

import { createElement,  
    renderCards, 
    openPopupScaleImage } from './components/card.js';

// Валидация
enableValidation(validationConfig);

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
