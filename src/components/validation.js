// Отображает сообщение об ошибке
function showInputError({ formElement, inputElement, inputErrorClass, errorClass, errorMessage }) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
  inputElement.classList.add(inputErrorClass);
}

// Скрывает сообщение об ошибке
function hideInputError({ formElement, inputElement, inputErrorClass, errorClass }) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
  inputElement.classList.remove(inputErrorClass);
}

// Проверка корректности данных в поле ввода
function checkInputValidity({ formElement, inputElement, inputErrorClass, errorClass }) {
    if (inputElement.validity.patternMismatch) {
        inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } else {
        inputElement.setCustomValidity('');
    }

    if (!inputElement.validity.valid) {
        showInputError({ formElement, inputElement, errorMessage: inputElement.validationMessage, errorClass, inputErrorClass });
    } else {
        hideInputError({ formElement, inputElement, errorClass, inputErrorClass });
    }
}

// Проверка на неккоректность среди полей
function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => !inputElement.validity.valid);
}

// Переключение состояния кнопки отправки формы
function toggleButtonState({ inputList, submitButtonElement, inactiveButtonClass }) {
  if (hasInvalidInput(inputList)) {
    submitButtonElement.disabled = true;
    submitButtonElement.classList.add(inactiveButtonClass);
  } else {
    submitButtonElement.disabled = false;
    submitButtonElement.classList.remove(inactiveButtonClass);
  }
}

// Назначение обработчиков событий
function setEventListeners({ formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass }) {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const submitButtonElement = formElement.querySelector(submitButtonSelector);

  toggleButtonState({ inputList, submitButtonElement, inactiveButtonClass });

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity({ formElement, inputElement, inputErrorClass, errorClass });
      toggleButtonState({ inputList, submitButtonElement, inactiveButtonClass });
    });
  });
}

// Активация валидации
export function enableValidation({ formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass }) {
  const formList = Array.from(document.querySelectorAll(formSelector));

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    setEventListeners({ formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass });
  });
};

// Сбрасывание состояния полей и кнопки формы
export function clearValidation(formElement, { inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass }) {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const submitButtonElement = formElement.querySelector(submitButtonSelector);

  inputList.forEach((inputElement) => {
    hideInputError({ formElement, inputElement, inputErrorClass, errorClass });
  });

  toggleButtonState({ inputList, submitButtonElement, inactiveButtonClass });
}
