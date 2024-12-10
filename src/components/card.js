
const cardTemplate = document.querySelector('#card-template').content;

// Функция создания карточки
export function createCard(data, likeCard, deteleCard, handleCardImageClick) {
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = card.querySelector('.card__image');
  const likeButton = card.querySelector('.card__like-button');
  const deleteButton = card.querySelector('.card__delete-button');

  card.querySelector('.card__title').textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt = data.name;

  cardImage.addEventListener('click', () => {
    handleCardImageClick({ name: data.name, link: data.link });
  });

  likeButton.addEventListener('click', () => likeCard(likeButton));
  deleteButton.addEventListener('click', () => deleteCard(card));

  return card;
}

// Функция лайка карточки
export function likeCard(likeButton) {
  likeButton.classList.toggle('card__like-button_is-active');
}

// Функция удаления карточки
export function deleteCard(card) {
  card.remove();
}
