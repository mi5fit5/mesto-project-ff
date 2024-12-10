
import '../assets/index.css';
import { initialCards } from '../components/cards';
import { createCard, likeCard, deleteCard } from '../components/card';
import { openModal, closeModal, handleModalClick } from '../components/modal';

const placeList = document.querySelector('.places__list');

// Начальная загрузка карточек
initialCards.forEach((item) => {
  const card = createCard(item, likeCard, deleteCard, handleCardImageClick);

  renderCard(card);
});

// Добавление карточек в список (рендеринг)
function renderCard(card, type = 'append') {
  switch (type) {
    case 'append':
      placeList.append(card);
      break;

    case 'prepend':
      placeList.prepend(card);
      break;
  }
}

// Модальное окно добавления карточки
const cardForm = document.forms['new-place'];
const cardFormName = cardForm['place-name'];
const cardFormLink = cardForm['link'];

const cardPopup = document.querySelector('.popup_type_new-card');
const cardAddButton = document.querySelector('.profile__add-button');

// Модальное окно после нажатия на изображение карточки
const cardImagePopup = document.querySelector('.popup_type_image');

const cardImagePicture = cardImagePopup.querySelector('.popup__image');
const cardImageCaption = cardImagePopup.querySelector('.popup__caption');

// Обработка кликов на изображение карточки
function handleCardImageClick({ name, link }) {
  cardImagePicture.src = link;
  cardImagePicture.alt = name;
  cardImageCaption.textContent = name;

  openModal(cardImagePopup);
}

// Обработка добавления новой карточки
function handleFormNewCardSubmit(evt) {
  evt.preventDefault();

  const card = createCard({ name: cardFormName.value, link: cardFormLink.value }, likeCard, deleteCard, handleCardImageClick);
  renderCard(card, 'prepend');
  closeModal(cardPopup);
  cardForm.reset();
}

cardForm.addEventListener('submit', handleFormNewCardSubmit);

// Модальное окно профиля
const profileForm = document.forms['edit-profile'];
const profileFormName = profileForm['name'];
const profileFormJob = profileForm['description'];

const profileElement = document.querySelector('.profile__info');
const profileNameInput = profileElement.querySelector('.profile__title');
const profileJobInput = profileElement.querySelector('.profile__description');

const profilePopup = document.querySelector('.popup_type_edit');
const profileEditButton = document.querySelector('.profile__edit-button');

// Обработка изменений профиля
function handleFormProfileSubmit(evt) {
  evt.preventDefault();

  profileElement.querySelector('.profile__title').textContent = profileFormName.value;
  profileElement.querySelector('.profile__description').textContent = profileFormJob.value;

  closeModal(profilePopup);
}

profileForm.addEventListener('submit', handleFormProfileSubmit);

// Открытие модального окна для редактирования профиля
profileEditButton.addEventListener('click', () => {
  profileFormName.value = profileNameInput.textContent;
  profileFormJob.value = profileJobInput.textContent;

  openModal(profilePopup);
});

// Открытие модального окна для добавления карточки
cardAddButton.addEventListener('click', () => openModal(cardPopup));

// Закрытие окон при клике на оверлей или кнопку закрытия
profilePopup.addEventListener('click', handleModalClick);
cardPopup.addEventListener('click', handleModalClick);
cardImagePopup.addEventListener('click', handleModalClick);
