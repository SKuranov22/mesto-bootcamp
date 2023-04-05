import './pages/index.css'; 

import { popUpProfile, 
    popUpProfileButtonOpen, 
    popUpProfileButtonClose, 
    profileName,
    profileDescription, 
    profileAvatar,
    placeName, 
    placeUrl, 
    profileForm,  
    popUpOverlay, 
    profileNameInput, 
    profileDescriptionInput, 
    profileAvatarInput,
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
    validationConfig, 
    avatarButtonEdit, 
    popUpAvatarEdit,
    popUpAvatarButtonClose, 
    avatarForm } from './components/constants.js';

import { enableValidation, 
    cleanFormErrors } from './components/validate.js';

import { config, 
    getInitialCards, 
    setUserCard, 
    getProfileInfo, 
    setUserInfo, 
    setUserAvatar } from './components/api.js'

import { openPopUp, 
    closePopUp } from './components/utils.js';

import { sendProfileForm, sendAvatarForm, addCard } from './components/modal.js';

import { createElement,  
    renderCards, 
    openPopupScaleImage } from './components/card.js';


// Вызываем запрос к серверу на получение карточек
getInitialCards()
    .then((result) => {
        renderCards(result);
    })
    .catch((err) => {
      console.log(err); // выводим ошибку в консоль
    }); 

// Вызываем запрос к серверу на получение информации о пользователе
getProfileInfo()
    .then((result) => {
        profileName.textContent = result.name
        profileDescription.textContent = result.about
        profileAvatar.src = result.avatar
    })
    .catch((err) => {
      console.log(err); // выводим ошибку в консоль
    }); 
 
// Валидация
enableValidation(validationConfig);

// Вызовы функций открытия, закрытия попапа редактирования профиля
popUpProfileButtonOpen.addEventListener('click', function() { 
    profileNameInput.value = profileName.textContent;
    profileDescriptionInput.value = profileDescription.textContent;

    cleanFormErrors(popUpProfile, validationConfig);
    openPopUp(popUpProfile);
});
  
popUpProfileButtonClose.addEventListener('click', () => {
    closePopUp(popUpProfile)});
  
// Вызовы функций открытия, закрытия попапа редактирования аватара
avatarButtonEdit.addEventListener('click', function() { 
    cleanFormErrors(popUpAvatarEdit, validationConfig);
    openPopUp(popUpAvatarEdit);
});

popUpAvatarButtonClose.addEventListener('click', () => {
    closePopUp(popUpAvatarEdit);
    avatarForm.reset();
});

// Вызов функции сохранения изменений данных в форме редактирования аватарки
avatarForm.addEventListener('submit', sendAvatarForm);

// Вызов функции сохранения изменений данных в форме редактирования
profileForm.addEventListener('submit', sendProfileForm);

// Вызовы функций открытия, закрытия попапа добавления карточки
popUpCardButtonAdd.addEventListener('click', function() { 
    cleanFormErrors(popUpCard, validationConfig);
    openPopUp(popUpCard);
});

popUpCardButtonClose.addEventListener('click', () => {
    closePopUp(popUpCard);
    cardForm.reset();
});

// Вызов функции закрытия попапа с увеличенным изображением
popUpImageButtonClose.addEventListener('click', () => closePopUp(popUpImage));

// Отправка данных новой карточки 
cardForm.addEventListener('submit', addCard);
