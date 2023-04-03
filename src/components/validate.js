// Функция, которая показывает ошибку
const showInputError = (formElement, inputElement, errorMessage, validationConfig) => {
  // Находим элемент ошибки внутри самой функции
  const formError = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add(validationConfig.inputErrorClass);

  // Заменим содержимое span с ошибкой на переданный параметр
  formError.textContent = errorMessage;
  formError.classList.add(validationConfig.errorClass);
};

// Функция, которая скрывает ошибку
const hideInputError = (formElement, inputElement, validationConfig) => {
  // Находим элемент ошибки
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(validationConfig.inputErrorClass);
  errorElement.classList.remove(validationConfig.errorClass);
  // Очистим ошибку
  errorElement.textContent = '';
};

// Функция, которая проверяет валидность поля
const isValid = (formElement, inputElement, validationConfig) => {
  // Если поле не проходит валидацию, покажем ошибку
  if(!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, validationConfig);
  } else {
  // Если проходит, скроем
    hideInputError(formElement, inputElement, validationConfig);
  }
};
  
const setIventListeners= (formElement, validationConfig) => {
  // Находим все поля внутри формы,
  // сделаем из них массив методом Array.from
  const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
  
  // вызовем функцию, отключает кнопку
  const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, validationConfig);

  // Обойдем все элементы полученной коллекции
  inputList.forEach((inputElement) => {
    // Каждому полю добавим обработчик событий input
    inputElement.addEventListener('input', () => {
      // Внутри колбэка вызовем isValid,
      // передав ей форму и проверяемый элемент
      isValid(formElement, inputElement, validationConfig);
      toggleButtonState(inputList, buttonElement, validationConfig);
    });
  });
};

const enableValidation = (validationConfig) => {
  // Найдем все формы с указанным классом в DOM,
  // сделаем из них массив методом Array.from
  const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));

  // Переберем полученную коллекцию
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });

    // Для каждой формы вызовем setIventListeners
    setIventListeners(formElement, validationConfig);
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

// Включение кнопки
const enableSubmitButton = (buttonElement, validationConfig) => {
  buttonElement.classList.remove(validationConfig.inactiveButtonClass);
};

// Отключение кнопки
const disableSubmitButton = (buttonElement, validationConfig) => {
  buttonElement.classList.add(validationConfig.inactiveButtonClass);
};

// Функция, которая на основе hasInvalidInput отключает и включает кнопку
const toggleButtonState = (inputList, buttonElement, validationConfig) => {
  if (hasInvalidInput(inputList)) {
    disableSubmitButton(buttonElement, validationConfig);
  } else {
    enableSubmitButton(buttonElement, validationConfig);
  };
};

const cleanFormErrors = (formElement, validationConfig) => {
  // Отключаем показ ошибки у всех инпутов
  const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, validationConfig);
  });
  // Отключаем кнопку сабмита
  const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
  disableSubmitButton(buttonElement, validationConfig);
};


export { 
  enableValidation, 
  cleanFormErrors }
