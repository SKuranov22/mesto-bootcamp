import { popUpOpened } from './constants.js';

// Функция открытия попапа
const openPopUp = (popup) => {
  popup.classList.add('popup_opened');

  // Вызов функции закрытия попапа при нажатии на оверлэй
  popup.addEventListener('click', () => closePopUp(popup));
  popup.querySelector('.popup__overlay').addEventListener('click', function (evt) {
    evt.stopPropagation();
  });

  // Вызов функции закрытия попапа при нажатии Escape
  document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      closePopUp(popUpOpened);
    };
  });
};

// Функция закрытия попапа
const closePopUp = popup => popup.classList.remove('popup_opened');

export { openPopUp, 
  closePopUp }