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
    setUserAvatar, 
    checkResponse } from './components/api.js'

import { openPopUp, 
    closePopUp, 
    closeByEscape, 
    closePopUpHandler, 
    stopPropagationHandler } from './components/utils.js';

import { sendProfileForm, sendAvatarForm, addCard } from './components/modal.js';

import { createElement,  
    renderCards, 
    openPopupScaleImage } from './components/card.js';

let userId = ''; // после получения ответа от сервера присваиваем id значение

// Загрузка данных с сервера
Promise.all([getProfileInfo(), getInitialCards()])
    .then(([userData, cards]) => {
        profileName.textContent = userData.name;
        profileDescription.textContent = userData.about;
        profileAvatar.src = userData.avatar;
        userId = userData._id;
          renderCards(cards);
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
    openPopUp(popUpProfile);
});
  
popUpProfileButtonClose.addEventListener('click', () => closePopUp(popUpProfile));
  
// Вызовы функций открытия, закрытия попапа редактирования аватара
avatarButtonEdit.addEventListener('click', () => openPopUp(popUpAvatarEdit));
popUpAvatarButtonClose.addEventListener('click', () => closePopUp(popUpAvatarEdit));

// Вызов функции сохранения изменений данных в форме редактирования аватарки
avatarForm.addEventListener('submit', sendAvatarForm);

// Вызов функции сохранения изменений данных в форме редактирования
profileForm.addEventListener('submit', sendProfileForm);

// Вызовы функций открытия, закрытия попапа добавления карточки
popUpCardButtonAdd.addEventListener('click', () => openPopUp(popUpCard));
popUpCardButtonClose.addEventListener('click', () => closePopUp(popUpCard));

// Вызов функции закрытия попапа с увеличенным изображением
popUpImageButtonClose.addEventListener('click', () => closePopUp(popUpImage));

// Отправка данных новой карточки 
cardForm.addEventListener('submit', addCard);

export { userId } 