import { placeName, 
  placeUrl,  
  popupCaption, 
  popupImage, 
  popUpCard, 
  popUpImage,  
  listCardContainer, 
  cardForm, 
  cardTemplate, 
  initialCards } from './constants.js';


import { openPopUp, 
  closePopUp } from './utils.js';

// Функция создания элемента с карточкой
function createElement (data) {
  const cardElement = cardTemplate.content.cloneNode(true);

  // имя карточки
  const cardTitle = cardElement.querySelector('.card__title');
  cardTitle.textContent = data.name;

  // изображение карточки
  const cardImage = cardElement.querySelector('.card__image');
  cardImage.alt = data.name;
  cardImage.src = data.link;

  // кнопка "удалить"
  const buttonDelete = cardElement.querySelector('.card__button-remove');
  buttonDelete.addEventListener('click', (evt) => evt.target.closest('.card').remove());

  // кнопка "лайк"
  const likeButton = cardElement.querySelector('.card__button-like');
  likeButton.addEventListener('click', (evt) => evt.target.classList.toggle('card__button-like_active'));

  // кнопка "увеличить изображение"
  cardImage.addEventListener('click', () => openPopupScaleImage(data));
  
  return cardElement; 
   
};

// Функция заполнения карточки
function addCard (evt) {
  evt.preventDefault();

  const newPlaceName = placeName.value;
  const newPlaceUrl = placeUrl.value;

  const newCard = createElement({name: newPlaceName, link: newPlaceUrl});

  listCardContainer.prepend(newCard);

  cardForm.reset();
  closePopUp(popUpCard);
}

// Функция добавления карточки в контейнер
function renderCards () {
  const cards = initialCards.map(createElement);
  listCardContainer.prepend(...cards);
}

// Функция открытия попапа с увеличенным изображением
function openPopupScaleImage (data) {
  popupCaption.textContent = data.name;
  popupImage.src = data.link;
  popupImage.alt = data.name;

  openPopUp(popUpImage);
}

export {createElement, 
  addCard, 
  renderCards, 
  openPopupScaleImage}