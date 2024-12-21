
import { toggleConfirmPopup } from '../pages';
import { methodsAPI } from '../components/api';

// Переменные для хранения текущей карточки и кнопки удаления
let currentCardId;
let currentDeleteButton;

// Создание карточки
export function createCard(data, toggleConfirmPopup, handleCardImageClick) {
  const cardTemplate = document.querySelector('#card-template').content;
  const card = cardTemplate.querySelector('.card').cloneNode(true);

  const cardImage = card.querySelector('.card__image');
  const likeButton = card.querySelector('.card__like-button');
  const likeCounter = card.querySelector('.card__like-counter');
  const deleteButton = card.querySelector('.card__delete-button');

  card.querySelector('.card__title').textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt = data.name;

  cardImage.addEventListener('click', () => handleCardImageClick({ name: data.name, link: data.link }));

  if (data.owner_id === data.owner['_id']) {
    activateDeleteButton(deleteButton, data['_id'], toggleConfirmPopup);
  }

  if (data.likes.find((like) => like['_id'] === data.owner_id)) {
    likeButton.classList.add('card__like-button_is-active');
  }

  likeCounter.textContent = data.likes.length;

  card.querySelector('.card__like-button').addEventListener('click', () => {
    handleCardLike(data['_id'], likeButton, likeCounter);
  });

  return card;
}

// Обновление визуального состояния кнопки лайка и счетчика лайков
function updateLikeState(buttonElement, counterElement, likes) {
  if (buttonElement.classList.contains('card__like-button_is-active')) {
    buttonElement.classList.remove('card__like-button_is-active');
  } else {
    buttonElement.classList.add('card__like-button_is-active');
  }

  if (likes.length) {
    counterElement.classList.add('card__like-counter_is-active');
  } else {
    counterElement.classList.remove('card__like-counter_is-active');
  }
  counterElement.textContent = likes.length;
}

// Обработка клика по кнопке лайка
function handleCardLike(cardId, buttonElement, counterElement) {
  buttonElement.disabled = true;
  const cardLikeAction = buttonElement.classList.contains('card__like-button_is-active')
  ? methodsAPI.unLikeCard(cardId) : methodsAPI.likeCard(cardId);

  cardLikeAction.then((data) => {
    updateLikeState(buttonElement, counterElement, data.likes);
  }).catch(err => {
    console.log(err);
  }).finally(() => {
    buttonElement.disabled = false;
  });
}

// Активация кнопки удаления карточки + добавление обработчика
function activateDeleteButton(deleteButton, cardId, toggleConfirmPopup) {
  deleteButton.classList.add('card__delete-button_is-active');
  deleteButton.addEventListener('click', () => {
    currentCardId = cardId;
    currentDeleteButton = deleteButton;
    toggleConfirmPopup(true);
  });
}

// Обработка удаления карточки
export function handeCardDelete(evt) {
  evt.preventDefault();
  const cardToDelete = { cardId: currentCardId, deleteButton: currentDeleteButton };

  methodsAPI.deleteCard(cardToDelete.cardId).then(() => {
    cardToDelete.deleteButton.closest('.places__item').remove();
    toggleConfirmPopup(false);
  }).catch(err => {
    console.log(err);
  });
}
