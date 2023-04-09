// Функция открытия попапа
const openPopUp = (popup) => {
  popup.classList.add('popup_opened');
  // Навешиваем слушатели при открытии попапа
  document.addEventListener('keydown', closeByEscape);
  popup.addEventListener('mousedown', closePopUpHandler);  
  popup.querySelector('.popup__overlay').addEventListener('mousedown', stopPropagationHandler); 
}; 

// Функция закрытия попапа 
const closePopUp = (popup) => {
  popup.classList.remove('popup_opened');
  // Удаляем слушатели при закрытии попапа
  document.removeEventListener('keydown', closeByEscape);
  popup.removeEventListener('mousedown', closePopUpHandler);  
  popup.querySelector('.popup__overlay').removeEventListener('mousedown', stopPropagationHandler); 
}; 

// Функция закрытия попапа при нажатии на Esc
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopUp(openedPopup);
  }
}

// Именованная функция для закрытия попапа по клику
function closePopUpHandler(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    closePopUp(evt.target);
  }
}

// Именованная функция для предотвращения закрытия попапа при клике на оверлей
function stopPropagationHandler(evt) {
  evt.stopPropagation();
}

export { openPopUp, 
  closePopUp, 
  closeByEscape, 
  closePopUpHandler, 
  stopPropagationHandler }