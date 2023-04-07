// Функция открытия попапа
const openPopUp = (popup) => {
  popup.classList.add('popup_opened');
  // Навешиваем слушатели при открытии попапа
  document.addEventListener('keydown', closeByEscape);
  popup.addEventListener('mousedown', () => closePopUp(popup)); 
  popup.querySelector('.popup__overlay').addEventListener('mousedown', function (evt) {
    evt.stopPropagation();
  });
};

// Функция закрытия попапа 
const closePopUp = (popup) => {
  popup.classList.remove('popup_opened');
  // Удаляем слушатели при закрытии попапа
  document.removeEventListener('keydown', closeByEscape);
  popup.removeEventListener('mousedown', () => closePopUp(popup)); 
  popup.querySelector('.popup__overlay').removeEventListener('mousedown', function (evt) {
    evt.stopPropagation();
  });
};

// Функция закрытия попапа при нажатии на Esc
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopUp(openedPopup);
  }
}

export { openPopUp, 
  closePopUp, closeByEscape }