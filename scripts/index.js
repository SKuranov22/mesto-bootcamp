// Переменная имени и описания
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

// Переменные формы, открытия и закрытия формы
let editForm = document.querySelector('.edit-form');
let editFormOpen = document.querySelector('.profile__button-edit');
let editFormClose = document.querySelector('.edit-form__button-close');

// Переменные полей для изменения данных имени и описания
let editFormInputs = document.querySelector('.edit-form__inputs');
let userName = document.querySelector('.edit-form__input_data_name');
let userDescription = document.querySelector('.edit-form__input_data_description');

// Переменная лайка
let likeButtons = document.querySelectorAll('.elements-list__button-like');

// Функция возможности поставки лайка для каждого изображения
likeButtons.forEach(function(likeButton) {

  // Функция срабатывает при клике
  likeButton.addEventListener('click', function() {

    // Если кнопка лайка активна, то после клика убрать лайк
    if (likeButton.classList.contains('elements-list__button-like_active')) {
      likeButton.classList.remove('elements-list__button-like_active');
    } else {
      // Если кнопка лайка неактивна, то после клика поставить лайк
      likeButton.classList.add('elements-list__button-like_active');
    }
  });
});

// Функция открытия формы редактирования
function openForm () {
  editForm.classList.add('edit-form_open');
  userName.value = profileName.textContent;
  userDescription.value = profileDescription.textContent;
}

// Функция закрытия формы редактирования
 function closeForm () {
  editForm.classList.remove('edit-form_open');
}

// Функция отправки формы 
function submitForm (evt) {
  evt.preventDefault();
  profileName.textContent = userName.value;
  profileDescription.textContent = userDescription.value;
  close ();
}

// Вызыв функции открытия формы редактирования
if (editFormOpen.classList.contains('popup_opened') === false) {
  editFormOpen.addEventListener('click', openForm);
} 

// Вызыв функции закрытия формы
editFormClose.addEventListener('click', closeForm);

// Вызыв функции отправки формы
editFormInputs.addEventListener('submit', submitForm);