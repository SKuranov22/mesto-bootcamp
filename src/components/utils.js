// Функция открытия попапа
const openPopUp = (popup) => {
  popup.classList.add('popup_opened');
  // Навешиваем слушатели при открытии попапа
  document.addEventListener('keydown', closeByEscape);
  popup.addEventListener('mousedown', closePopUp); 
  popup.querySelector('.popup__overlay').addEventListener('mousedown', closeByOverlay);
};

// Функция закрытия попапа 
const closePopUp = (popup) => {
  popup.classList.remove('popup_opened');
  // Удаляем слушатели при закрытии попапа
  document.removeEventListener('keydown', closeByEscape);
  popup.removeEventListener('mousedown', closePopUp); 
  popup.querySelector('.popup__overlay').removeEventListener('mousedown', closeByOverlay);
};

// Функция закрытия попапа при нажатии на Esc
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopUp(openedPopup);
  }
}

// Функция закрытия попапа при нажатии на оверлэй
function closeByOverlay (evt) {
  evt.stopPropagation();
}

export { openPopUp, 
  closePopUp, closeByEscape, closeByOverlay }