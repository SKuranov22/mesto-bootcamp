// Функция открытия попапа
const openPopUp = (popup) => {
  popup.classList.add('popup_opened');

  // Навешиваем слушатели событий только один раз
  const closePopUpOnOverlayClick = () => closePopUp(popup);
  const closePopUpOnEscapePress = (evt) => {
    if (evt.key === 'Escape') {
      closePopUp(popup);
    }
  };

  window.addEventListener('keydown', closePopUpOnEscapePress);
  popup.addEventListener('click', closePopUpOnOverlayClick);
  popup.querySelector('.popup__overlay').addEventListener('click', (evt) => {
    evt.stopPropagation();
  });

  // Удаляем слушатели событий при закрытии модального окна
  const removeListeners = () => {
    window.removeEventListener('keydown', closePopUpOnEscapePress);
    popup.removeEventListener('click', closePopUpOnOverlayClick);
    popup.removeEventListener('click', removeListeners);
  };
  popup.addEventListener('click', removeListeners);
};

// Функция закрытия попапа 
const closePopUp = (popup) => {
  popup.classList.remove('popup_opened');
};

export { openPopUp, 
  closePopUp }