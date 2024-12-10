
import '../assets/index.css';
import { initialCards } from '../components/cards';
import { createCard, likeCard, deleteCard } from '../components/card';
import { openModal, closeModal } from '../components/modal';

const cardContainer = document.querySelector('.places__list');

const popups = document.querySelectorAll('.popup');

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

// Модальное окно профиля
const profileForm = document.forms['edit-profile'];
const profileFormName = profileForm['name'];
const profileFormJob = profileForm['description'];

const profileElement = document.querySelector('.profile__info');
const profileNameInput = profileElement.querySelector('.profile__title');
const profileJobInput = profileElement.querySelector('.profile__description');

const profilePopup = document.querySelector('.popup_type_edit');
const profileEditButton = document.querySelector('.profile__edit-button');

// Начальная загрузка карточек
initialCards.forEach(async (item) => {
  const card = createCard(item, likeCard, deleteCard, handleCardImageClick);

  renderCard(card);
});

// Добавление карточек в список (рендеринг)
function renderCard(card, type = 'append') {
  switch (type) {
    case 'append':
      cardContainer.append(card);
      break;

    case 'prepend':
      cardContainer.prepend(card);
      break;
  }
}

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

// Обработка изменений профиля
function handleFormProfileSubmit(evt) {
  evt.preventDefault();

  profileNameInput.textContent = profileFormName.value;
  profileJobInput.textContent = profileFormJob.value;

  closeModal(profilePopup);
}

// Открытие модального окна для редактирования профиля
profileEditButton.addEventListener('click', () => {
  profileFormName.value = profileNameInput.textContent;
  profileFormJob.value = profileJobInput.textContent;

  openModal(profilePopup);
});

// Для связи формы с обработчиками
cardForm.addEventListener('submit', handleFormNewCardSubmit);
profileForm.addEventListener('submit', handleFormProfileSubmit);

// Открытие модального окна для добавления карточки
cardAddButton.addEventListener('click', () => openModal(cardPopup));

// Закрытие окон при клике на оверлей или кнопку закрытия
popups.forEach((popup) => {
  const closeButton = popup.querySelector('.popup__close');
  closeButton.addEventListener('click', () => closeModal(popup));

  popup.addEventListener('mousedown', (evt) => {
    if (evt.target === evt.currentTarget) {
      closeModal(popup);
    }
  });

  popup.classList.add('popup_is-animated'); // Плавная анимация для попапов
});
