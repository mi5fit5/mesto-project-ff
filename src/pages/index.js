
import '../assets/index.css';
import { createCard, handeCardDelete } from '../components/card';
import { openModal, closeModal } from '../components/modal';
import { enableValidation, clearValidation } from '../components/validation';
import { methodsAPI } from '../components/api';

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const cardContainer = document.querySelector('.places__list');

const popups = document.querySelectorAll('.popup');

const cardForm = document.forms['new-place'];
const cardFormName = cardForm['place-name'];
const cardFormLink = cardForm['link'];

const cardPopup = document.querySelector('.popup_type_new-card');
const cardAddButton = document.querySelector('.profile__add-button');
const cardFormSubmitButton = cardForm.querySelector('.popup__button');

const cardImagePopup = document.querySelector('.popup_type_image');
const cardImagePicture = cardImagePopup.querySelector('.popup__image');
const cardImageCaption = cardImagePopup.querySelector('.popup__caption');

const profileForm = document.forms['edit-profile'];
const profileFormName = profileForm['name'];
const profileFormJob = profileForm['description'];

const profileElement = document.querySelector('.profile__info');
const profileNameInput = profileElement.querySelector('.profile__title');
const profileJobInput = profileElement.querySelector('.profile__description');

const profilePopup = document.querySelector('.popup_type_edit');
const profileImage = document.querySelector('.profile__image');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileFormSubmitButton = profileForm.querySelector('.popup__button');

const profileAvatarForm = document.forms['edit-avatar'];
const profileAvatarSubmitButton = profileAvatarForm.querySelector('.popup__button');
const profileImageInput = profileAvatarForm.avatar;
const profileAvatarPopup = document.querySelector('.popup_type_edit-avatar');

const deleteCardForm = document.forms['delete-card'];
const confirmPopup = document.querySelector('.popup_type_confirm');
const confirmPopupCloseButton = confirmPopup.querySelector('.popup__close');

// Процесс загрузки у кнопок
function loadingProgress({ buttonElement, isItLoading }) {
  buttonElement.textContent = isItLoading ? 'Сохранение...' : 'Сохранить';
}

// Обновление информации в профиле
function setProfile({ name, about, avatar }) {
  profileNameInput.textContent = name;
  profileJobInput.textContent = about;
  profileImage.style.backgroundImage = `url(${avatar})`;
}

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

  const data = { name: cardFormName.value, link: cardFormLink.value };
  loadingProgress({ buttonElement: cardFormSubmitButton, isItLoading: true });

  methodsAPI.addCard(data).then(async (data) => {
    const card = createCard({ ...data, owner_id: data.owner['_id'] }, toggleConfirmPopup, handleCardImageClick);

    renderCard(card, 'prepend');
    closeModal(cardPopup);
    cardForm.reset();
  }).catch(err => {
    console.log(err);
  }).finally(() => {
    loadingProgress({ buttonElement: cardFormSubmitButton, isItLoading: false });
  });
}

// Обработка изменений профиля
function handleFormProfileSubmit(evt) {
  evt.preventDefault();

  const data = { name: profileFormName.value, about: profileFormJob.value };
  loadingProgress({ buttonElement: profileFormSubmitButton, isItLoading: true });

  methodsAPI.updateProfile(data).then(({ name, about, avatar }) => {
    setProfile({ name, about, avatar });
    closeModal(profilePopup);
  }).catch(err => {
    console.log(err);
  }).finally(() => {
    loadingProgress({ buttonElement: profileFormSubmitButton, isItLoading: false });
  });
}

// Обработка изменений аватара профиля
function handleFormProfileAvatarSubmit(evt) {
  evt.preventDefault();

  loadingProgress({ buttonElement: profileAvatarSubmitButton, isItLoading: true });

  methodsAPI.updateProfileAvatar(profileImageInput.value).then(({ name, about, avatar }) => {
    setProfile({ name, about, avatar });
    closeModal(profileAvatarPopup);
  }).catch(err => {
    console.log(err);
  }).finally(() => {
    loadingProgress({ buttonElement: profileAvatarSubmitButton, isItLoading: false });
  });
}

// Открытие / закрытие модального окна подтверждения удаления карточки
export function toggleConfirmPopup(isOpen) {
  if (isOpen) {
    openModal(confirmPopup);
  } else {
    closeModal(confirmPopup);
  }
}

// Для связи формы с обработчиками
cardForm.addEventListener('submit', handleFormNewCardSubmit);
profileForm.addEventListener('submit', handleFormProfileSubmit);
profileAvatarForm.addEventListener('submit', handleFormProfileAvatarSubmit);
deleteCardForm.addEventListener('submit', (evt) => handeCardDelete(evt, toggleConfirmPopup));

// Открытие модального окна для редактирования профиля
profileEditButton.addEventListener('click', () => {
  profileFormName.value = profileNameInput.textContent;
  profileFormJob.value = profileJobInput.textContent;
  clearValidation(profileForm, validationConfig);
  openModal(profilePopup);
});

// Открытие модального окна для добавления карточки
cardAddButton.addEventListener('click', () => {
  cardForm.reset();
  clearValidation(cardForm, validationConfig);
  openModal(cardPopup);
});

// Открытие модального окна для редактирования аватара профиля
profileImage.addEventListener('click', () => {
  profileAvatarForm.reset();
  clearValidation(profileAvatarForm, validationConfig);
  openModal(profileAvatarPopup);
});

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

confirmPopupCloseButton.addEventListener('click', toggleConfirmPopup(false));

enableValidation(validationConfig);

// Массив промисов запросов для получения карточек и данных профиля
Promise.all([methodsAPI.getInitialCards(), methodsAPI.getProfile()]).then(([cards, user]) => {

  const { name, about, avatar, _id } = user;
  setProfile({ name, about, avatar });

  cards.forEach(async (data) => {
    const card = createCard({ ...data, owner_id: _id }, toggleConfirmPopup, handleCardImageClick);
    renderCard(card);
  });
}).catch(err => {
  console.log(err);
});
