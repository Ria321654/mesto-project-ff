// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
// index.js

import './pages/index.css'; // добавьте импорт главного файла стилей
import {initialCards} from './scripts/cards.js';
import {openModal, closeModal} from './components/modal.js';
import { createCard,deleteCard,changeLikeColor } from './components/card.js';

const templateCard = document.querySelector("#card-template").content.querySelector('.card');
const cardsContainer  = document.querySelector(".places__list");


/* Циклом перебираем карточки из массива initialCards */
for (let i = 0; i < initialCards.length; i++){
    const nameCard = initialCards[i].name;
    const linkCard = initialCards[i].link;
    const addCard = createCard(nameCard, linkCard, deleteCard, changeLikeColor);
    cardsContainer.appendChild(addCard);
};

const editProfileButton = document.querySelector('.profile__edit-button');//кнопка открытия для первой формы
const closeEditProfileButton = document.querySelector('.popup__close_tye_edit');// кнопка для зарытия первой формы 
const editProfilePopup = document.querySelector('.popup_type_edit');// контейнер первой карточки с формой 
const nameInput= document.querySelector('.popup__input_type_name');//имя первой формы
const jobInput = document.querySelector('.popup__input_type_description');// должность первой формы 

const formProfileChange = document.querySelector('.form_edit_profile') // форма изменения профиля
const formAddCard = document.querySelector('.form_add_card') // форма добавления карточки

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

const inputCardName = document.querySelector('.popup__input_type_card-name');
const inputCardUrl = document.querySelector('.popup__input_type_url');


// открытие первой карточки!!
editProfileButton.addEventListener('click',function() {
  openModal(editProfilePopup);
});
closeEditProfileButton.addEventListener('click', function() {
  closeModal(editProfilePopup);
});

// открывает форму с данными профиля!!
editProfileButton.addEventListener('click', function() {
    openModal(editProfilePopup);
    nameInput.value =  profileTitle.textContent;
    jobInput.value = profileDescription.textContent;
}); 

// Открывает форму добавления карточки
const closeEditProfileButtonCard = document.querySelector('.popup__close_new-card');// кнопка для зарытия второй формы 
const profileAddBbutton = document.querySelector('.profile__add-button') //кнопка для открытия второй формы
const popupTypeNewCard = document.querySelector('.popup_type_new-card')//контейнер второй формы 

// функция открытия второй формы
profileAddBbutton.addEventListener('click',function() {
  openModal(popupTypeNewCard);
});
// Функция закрытия второй формы
closeEditProfileButtonCard.addEventListener('click', function() {
  closeModal(popupTypeNewCard);
});


// функция сохранения формы для редактирования профиля
function handleProfileFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    profileTitle.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closeModal(editProfilePopup);
    
}

// Функция сохранения формы для добавления карточки
function handleCardFormSubmit(evt) {
  evt.preventDefault();
  closeModal(popupTypeNewCard);
  const newCard = createCard(inputCardName.value, inputCardUrl.value, deleteCard, changeLikeColor);
  cardsContainer.prepend(newCard);
  inputCardName.value = '';
  inputCardUrl.value = '';
}

formProfileChange.addEventListener('submit', handleProfileFormSubmit);
formAddCard.addEventListener('submit', handleCardFormSubmit);


// открытие озображения!!
const popapCaption = document.querySelector('.popup__caption');//для подписи снизу 
const popupTypeImage = document.querySelector('.popup_type_image')// открытие большой карточки изображения 
const popupImage = document.querySelector('.popup__image')
const popupImageCloseButton = document.querySelector('.popup__close_big-image')

// Фция по открытию изображения
function openImg(imgSrc,imgName) {
  openModal(popupTypeImage);
  popupImage.src = imgSrc;
  popupImage.alt= imgName;
  popapCaption.textContent= imgName;
}
// слушатель по клику на картинку карточки
// cardsContainer.addEventListener('click', function(evt) {
//   if(evt.target.classList.contains('card__image')) {
//     const img = evt.target.closest('img');
//     openImg(img.src, img.alt);
//   };
// })

// слушатель по клику на кнопку закрытия большого изображения
popupImageCloseButton.addEventListener('click', function() {
  closeModal(popupTypeImage);
});
////