import { popUpProfile, 
    profileName,
    profileDescription,   
    profileNameInput, 
    profileDescriptionInput } from './constants.js';

// Функция отправки формы редактирования с отменой стандартной отправки
export const sendProfileForm = (evt) => {
    evt.preventDefault();
    profileName.textContent = profileNameInput.value;
    profileDescription.textContent = profileDescriptionInput.value;
    closePopUp (popUpProfile);
};

