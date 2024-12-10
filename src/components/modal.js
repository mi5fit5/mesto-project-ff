
// Функция открытия модального окна
export function openModal(modal) {
  modal.classList.add('popup_is-opened')
  document.addEventListener('keydown', closeModalPressEsc);
}

// Функция закрытия модального окна
export function closeModal(modal) {
  modal.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closeModalPressEsc);
}

// Закрытие по нажатию клавиши Escape
function closeModalPressEsc(evt) {
  if (evt.key === 'Escape') {
    const modal = document.querySelector('.popup_is-opened');
    if (modal) {
      closeModal(modal);
    }
  }
}
