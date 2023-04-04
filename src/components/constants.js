const popUpProfile = document.querySelector('.popup_profile-edit'); // попап редактирования профиля
const popUpProfileButtonOpen = document.querySelector('.profile__button-edit');// кнопка открытия попапа редактирования профиля
const popUpProfileButtonClose = document.querySelector('.popup__button-close'); // кнопка закрытия попапа редактирования профиля

const profileName = document.querySelector('.profile__name'); // имя профиля
const profileDescription = document.querySelector('.profile__description'); // описание профиля
const profileAvatar = document.querySelector('.profile__image'); // аватар профиля

const placeName = document.querySelector('.popup__input_place_name'); // название места
const placeUrl = document.querySelector('.popup__input_place_url'); // ссылка на место

const profileForm = document.querySelector('.popup__form'); // форма попапа
const popUpOverlay = document.querySelector('.popup__overlay'); // область страницы вне попапа

const profileNameInput = document.querySelector('.popup__input_data_name'); // инпут имени попапа редактирования профиля
const profileDescriptionInput = document.querySelector('.popup__input_data_description'); // инпут описания попапа редактирования профиля

const popupCaption = document.querySelector('.popup__caption'); // подпись к увеличенному изображению
const popupImage = document.querySelector('.popup__image'); // попап увеличенного изображения

const popUpCard = document.querySelector('.popup_card-add'); // попап добавления карточек

const popUpCardButtonAdd = document.querySelector('.profile__button-add'); // кнопка попапа добавления карточек
const popUpCardButtonClose = document.querySelector('.popup__button-close_card-add'); // кнопка закрытия попапа добавления карточек

const popUpImage = document.querySelector('.popup_scale-image'); // Попап с изображением
const popUpImageButtonClose = document.querySelector('.popup__button-close_scale-image'); // Кнопка закрытия попапа с изображением

const listCardContainer = document.querySelector('.elements__list'); // Список с карточками
const cardForm = popUpCard.querySelector('.popup__form'); // Инпуты с названием карточки и ссылкой на изображение
const cardTemplate = document.querySelector('#template-card'); // HTML-код карточки, который добавляется в список

// Объект настройки валидации
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

export { popUpProfile, 
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
  popupCaption, 
  popupImage, 
  popUpCard, 
  popUpCardButtonAdd,
  popUpCardButtonClose, 
  popUpImage, 
  popUpImageButtonClose, 
  listCardContainer, 
  cardForm, 
  cardTemplate,
  validationConfig };