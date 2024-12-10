
const cardTemplate = document.querySelector('#card-template').content;

// Функция создания карточки
export function createCard(data, likeCard, deteleCard, handleCardImageClick) {
  const card = cardTemplate.querySelector('.card').cloneNode(true);

  card.querySelector('.card__image').src = data.link;
  card.querySelector('.card__title').textContent = data.name;
  card.querySelector('.card__image').alt = data.name;

  card.querySelector('.card__image').addEventListener('click', () => {
    handleCardImageClick({ name: data.name, link: data.link });
  });
  card.querySelector('.card__like-button').addEventListener('click', likeCard);
  card.querySelector('.card__delete-button').addEventListener('click', deteleCard);

  return card;
}

// Функция лайка карточки
export function likeCard(evt) {
  evt.target.classList.toggle('card__like-button_is-active');
}

// Функция удаления карточки
export function deleteCard(evt) {
  evt.target.closest('.card').remove();
}
