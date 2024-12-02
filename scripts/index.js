// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const cardTemplate = document.querySelector('#card-template').content;
const cardList = document.querySelector('.places__list');

function createCard(data, deteleCard) {
  const card = cardTemplate.querySelector('.card').cloneNode(true);

  card.querySelector('.card__image').src = data.link;
  card.querySelector('.card__title').textContent = data.name;
  card.querySelector('.card__delete-button').addEventListener('click', deteleCard);

  return card;
}

function deleteCard(event) {
  const cardElement = event.target.closest('.card');

  cardElement.remove();
}

function renderCard(card) {
  cardList.append(card);
}

initialCards.forEach((item) => {
  const card = createCard(item, deleteCard);

  renderCard(card);
});