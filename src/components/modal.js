
// Функция открытия модального окна
export function openModal(modal) {
  modal.classList.add('popup_is-animated');

  setTimeout(() => {
    modal.classList.add('popup_is-opened');
  }, 50);
  document.addEventListener('keydown', closeModalPressEsc);
}

// Функция закрытия модального окна
export function closeModal(modal) {
  modal.classList.remove('popup_is-opened');
  document.addEventListener('keydown', closeModalPressEsc);
}

// Закрытие по нажатию клавиши Escape
function closeModalPressEsc(evt) {
  const modal = document.querySelector('.popup_is-opened');

  if (modal && evt.key === 'Escape') {
    closeModal(modal);
  }
}

// Обработка клика внутри модального окна для его закрытия
export function handleModalClick(evt) {
  if (evt.target.classList.contains('popup_is-opened')) {
    return closeModal(evt.target);
  }

  if (evt.target.closest('.popup__close')) {
    return closeModal(evt.target.closest('.popup'));
  }
}
