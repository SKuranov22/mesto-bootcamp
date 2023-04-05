import { popupCaption, 
  popupImage, 
  popUpImage,  
  listCardContainer, 
  cardTemplate } from './constants.js';

import { openPopUp } from './utils.js';

import { getInitialCards, putLike, deleteLike, setUserCard, deleteUserCard, getProfileInfo } from './api.js';

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
  const cardId = data._id;
  const owner = data.owner;

  // кнопка "удалить"
  const buttonDelete = cardElement.querySelector('.card__button-remove');

  // чужую карточку нельзя удалить
  getProfileInfo()
  .then((userData) => {
    if (owner._id !== userData._id) {
      buttonDelete.style.display = "none";
    }
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  });

  // Функция удаления карточки с сервера
  function removeCard() {
    getProfileInfo()
    .then((userData) => {
      if (owner._id === userData._id) {
        deleteUserCard(cardId)
        .then(() => {
          buttonDelete.closest('.card').remove();
        })
        .catch((err) => {
          console.log(err);
        });
      }
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
  }

  // Вызов функции удаления
  buttonDelete.addEventListener('click', () => removeCard());

  // кнопка "лайк"
  const likeButton = cardElement.querySelector('.card__button-like');
  const likeCount = cardElement.querySelector('.card__count-like');
  likeCount.textContent = data.likes ? data.likes.length : 0;
  
  // Проверяем состояние лайка в локальном хранилище
  if (localStorage.getItem(`like_${cardId}`) === 'true') {
    likeButton.classList.add('card__button-like_active');
  }

  // Функция поставки лайка с счетчиком
  function handleLike() {
    if (!likeButton.classList.contains('card__button-like_active')) {
      putLike(cardId)
        .then((result) => {
          localStorage.setItem(`like_${cardId}`, true);
          likeButton.classList.add('card__button-like_active');
          likeCount.textContent = result.likes.length;
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      deleteLike(cardId)
        .then((result) => {
          localStorage.setItem(`like_${cardId}`, false);
          likeButton.classList.remove('card__button-like_active');
          likeCount.textContent = result.likes.length;
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  // Вызов функции лайка
  likeButton.addEventListener('click', () => handleLike());
  likeButton.addEventListener('touchend', function(event) {
    event.preventDefault();
    handleLike();
  });
  
  // кнопка "увеличить изображение"
  cardImage.addEventListener('click', () => openPopupScaleImage(data));
  
  return cardElement; 
   
};

// Функция добавления карточки в контейнер
function renderCards (initialCards) {
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

export { createElement,
  renderCards, 
  openPopupScaleImage }