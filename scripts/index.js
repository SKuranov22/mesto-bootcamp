const popUpProfile = document.querySelector('.popup_profile-edit'); // попап редактирования профиля
const popUpProfileButtonEdit = document.querySelector('.profile__button-edit');// кнопка открытия попапа редактирования профиля
const popUpProfileButtonClose = document.querySelector('.popup__button-close'); // кнопка закрытия попапа редактирования профиля

const profileName = document.querySelector('.profile__name'); // имя профиля
const profileDescription = document.querySelector('.profile__description'); // описание профиля

const popUpInputs= document.querySelector('.popup__inputs'); // форма попапа

const profileNameInput = document.querySelector('.popup__input_data_name'); // инпут имени попапа редактирования профиля
const profileDescriptionInput = document.querySelector('.popup__input_data_description'); // инпут описания попапа редактирования профиля

//Функция открытия попапа
const openPopUp = popup => popup.classList.add('popup_opened');

//Функция закрытия попапа
const closePopUp = popup => popup.classList.remove('popup_opened');

// Функция отправки формы редактирования с отменой стандартной отправки
function sendProfileEditForm (evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopUp (popUpProfile);
};

// Вызовы функций открытия, закрытия попапа редактирования профиля
popUpProfileButtonEdit.addEventListener('click', () => openPopUp(popUpProfile));
popUpProfileButtonClose.addEventListener('click', () => closePopUp(popUpProfile));

// Вызов функции сохранения изменений данных в форме редактирования
popUpInputs.addEventListener('submit', sendProfileEditForm);



const popUpCard = document.querySelector('.popup_card-add'); // попап добавления карточек

const popUpCardButtonAdd = document.querySelector('.profile__button-add'); // кнопка попапа добавления карточек
const popUpCardButtonClose = document.querySelector('.popup__button-close_card-add'); // кнопка попапа добавления карточек

const popUpImage = document.querySelector('.popup_scale-image'); // Попап с изображением
const popUpImageButtonClose = document.querySelector('.popup__button-close_scale-image'); // Кнопка закрытия попапа с изображением

const listCardContainer = document.querySelector('.elements__list'); // Список с карточками
const cardAddInputs = popUpCard.querySelector('.popup__inputs'); // Инпуты с названием карточки и ссылкой на изображение
const cardTemplate = document.querySelector('#template-card'); // HTML-код карточки, который добавляется в список

// Массив с карточками
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Ереван',
    link: 'https://images.unsplash.com/photo-1582798144276-d6c2e81b3025?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Мурманск',
    link: 'https://auroravillage.info/wp-content/uploads/2021/02/dbf7024e-56bd-4bf6-b849-b6310fdadc3b.jpeg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

// Вызовы функций открытия, закрытия попапа добавления карточки

popUpCardButtonAdd.addEventListener('click', () => openPopUp(popUpCard));
popUpCardButtonClose.addEventListener('click', () => closePopUp(popUpCard));

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

  popUpImageButtonClose.addEventListener('click', () => closePopUp(popUpImage));
  
  return cardElement; 
   
};

// Функция заполнения карточки
function cardAdd (evt) {
  evt.preventDefault();

  const placeName = document.querySelector('.popup__input_place_name');
  const placeUrl = document.querySelector('.popup__input_place_url');

  const newPlaceName = placeName.value;
  const newPlaceUrl = placeUrl.value;

  const newCard = createElement({name: newPlaceName, link: newPlaceUrl});

  listCardContainer.append(newCard);

  cardAddInputs.reset();
  closePopUp(popUpCard);
}

// Функция добавления карточки в контейнер
function renderCard () {
  const card = initialCards.map(function (item) {
    const newCard = createElement(item);
    return newCard;
});

  listCardContainer.append(...card);
}

// Отправка данных новой карточки 
renderCard();
cardAddInputs.addEventListener('submit', cardAdd);


// Функция открытия попапа с увеличенным изображением
function openPopupScaleImage (data) {
  const popupCaption = document.querySelector('.popup__caption');
  popupCaption.textContent = data.name;

  const popupImage = document.querySelector('.popup__image');
  popupImage.src = data.link;
  popupImage.alt = data.name;

  openPopUp(popUpImage);
}