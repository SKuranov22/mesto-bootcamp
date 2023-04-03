// Объект настройки валидации
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

// Функция, которая показывает ошибку
const showInputError = (formElement, inputElement, errorMessage, config) => {
  // Находим элемент ошибки внутри самой функции
  const formError = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add(config.inputErrorClass);

  // Заменим содержимое span с ошибкой на переданный параметр
  formError.textContent = errorMessage;
  formError.classList.add(config.errorClass);
};

// Функция, которая скрывает ошибку
const hideInputError = (formElement, inputElement, config) => {
  // Находим элемент ошибки
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  // Очистим ошибку
  errorElement.textContent = '';
};

// Функция, которая проверяет валидность поля
const isValid = (formElement, inputElement, config) => {
  // Если поле не проходит валидацию, покажем ошибку
  if(!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, config);
  } else {
  // Если проходит, скроем
    hideInputError(formElement, inputElement, config);
  }
};
  
const setIventListeners= (formElement, config) => {
  // Находим все поля внутри формы,
  // сделаем из них массив методом Array.from
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));

  // вызовем функцию, отключает кнопку
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, config);

  // Обойдем все элементы полученной коллекции
  inputList.forEach((inputElement) => {
    // Каждому полю добавим обработчик событий input
    inputElement.addEventListener('input', () => {
      // Внутри колбэка вызовем isValid,
      // передав ей форму и проверяемый элемент
      isValid(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    });
  });
};

const enableValidation = (config) => {
  // Найдем все формы с указанным классом в DOM,
  // сделаем из них массив методом Array.from
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  // Переберем полученную коллекцию
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });

    // Для каждой формы вызовем setIventListeners
    setIventListeners(formElement, config);
  });
};

// Функция принимает массив полей
const hasInvalidInput = (inputList) => {
  // проходит по этому массиву методом some
  return inputList.some((inputElement) => {

    // Если поле не валидно, колбэк вернет true
    // Обход массива прекратится и вся ф-ция
    // hasInvalidInput вернет true
    return !inputElement.validity.valid;
  });
};

// Функция, которая на основе hasInvalidInput отключает и включает кнопку
const toggleButtonState = (inputList, buttonElement, config) => {
  // Если есть хотя бы один невалидный инпут 
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    buttonElement.classList.add(config.inactiveButtonClass);
  } else {
    // иначе сделай кнопку активной
    buttonElement.classList.remove(config.inactiveButtonClass);
  };
};

export { validationConfig,
  showInputError, 
  hideInputError, 
  isValid, 
  setIventListeners, 
  enableValidation, 
  hasInvalidInput, 
  toggleButtonState }