// функция, которая показывает ошибку
const showInputError = (formElement, inputElement, errorMessage) => {
    // Находим элемент ошибки внутри самой функции
    const formError = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add('popup__input_type_error');

    // Заменим содержимое span с ошибкой на переданный параметр
    formError.textContent = errorMessage;
    formError.classList.add('popup__input-error_active');
  };

// функция, которая скрывает ошибку
const hideInputError = (formElement, inputElement) => {
    // Находим элемент ошибки
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);


    inputElement.classList.remove('popup__input_type_error');
    errorElement.classList.remove('popup__input-error_active');
    // Очистим ошибку
    errorElement.textContent = '';
};

// функция, которая проверяет валидность поля
const isValid = (formElement, inputElement) => {
    // Если поле не проходит валидацию, покажем ошибку
    if(!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
    // Если проходит, скроем
      hideInputError(formElement, inputElement);
    }
};
  
const setIventListeners= (formElement) => {
    // Находим все поля внутри формы,
    // сделаем из них массив методом Arraz.from
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));

    // вызовем функцию, отключает кнопку
    const buttonElement = formElement.querySelector('.popup__button-save');
    toggleButtonState(inputList, buttonElement);

    // Обойдем все элементы полученной коллекции
    inputList.forEach((inputElement) => {
      // Каждому полю добавим обработчик событий input
      inputElement.addEventListener('input', () => {
        // Внутри колбэка вызовем isValid,
        // передав ей форму и проверяемый элемент
        isValid(formElement, inputElement);
        toggleButtonState(inputList, buttonElement); 
      });
    });
};
  
  
const enableValidation = () => {
    // Найдем все формы с указанным классом в DOM,
    // сделаем из них массив методом Array.from
    const formList = Array.from(document.querySelectorAll('.popup__form'));

    // Переберем полученную коллекцию
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });

      // Для каждой формы вызовем setIventListeners
      setIventListeners(formElement);
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
const toggleButtonState = (inputList, buttonElement) => {
    // Если есть хотя бы один невалидный инпут
    if (hasInvalidInput(inputList)) {
      // сделай кнопку неактивной
      buttonElement.classList.add('popup__button-save_inactive');
    } else {
      // иначе сделай кнопку активной
      buttonElement.classList.remove('popup__button-save_inactive');
    };
};

export { showInputError, 
  hideInputError, 
  isValid, 
  setIventListeners, 
  enableValidation, 
  hasInvalidInput, 
  toggleButtonState }