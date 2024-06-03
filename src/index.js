// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
// index.js

import './pages/index.css'; // добавьте импорт главного файла стилей
import {initialCards} from './scripts/cards.js';
import {openModal, closeModal, closeModalEsk, closeModalOverley} from './components/modal.js';

const templateCard = document.querySelector("#card-template").content.querySelector('.card');
const placesList  = document.querySelector(".places__list");

/* Функция удаления карточки */
const deleteCard = function(evt){
        const cardElement =  evt.target.closest('.card');
        cardElement.remove();
};

/* Функция создания карточки */
const createCard = function (name, url, deleteCard) {
    const card = templateCard.cloneNode(true);
    const titleCard = card.querySelector('.card__title');
    const cardImg = card.querySelector('.card__image');
    titleCard.textContent = name;
    cardImg.src = url;
    cardImg.alt = name;
    const deleteButton = card.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', deleteCard);
    return card;
};  



/* Циклом перебираем карточки из массива initialCards */
for (let i = 0; i < initialCards.length; i++){
    const nameCard = initialCards[i].name;
    const linkCard = initialCards[i].link;
    const addCard = createCard(nameCard, linkCard, deleteCard);
    placesList.appendChild(addCard);
};

const editProfileButton = document.querySelector('.profile__edit-button');//кнопка открытия для первой формы
const closeEditProfileButton = document.querySelector('.popup__close_tye_edit');// кнопка для зарытия первой формы 
const editProfilePopup = document.querySelector('.popup_type_edit');// див первой карточки с формой 
const nameInput= document.querySelector('.popup__input_type_name');//имя первой формы
const jobInput = document.querySelector('.popup__input_type_description');// должность первой формы 

const saveButton  = document.querySelector('.popup__button')//кнопка сохранить для форм
const formElement = document.querySelector('.popup__form')// формы

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');


// открытие первой карточки!!
editProfileButton.addEventListener('click',function() {
  openModal(editProfilePopup);
});
closeEditProfileButton.addEventListener('click', function() {
  closeModal(editProfilePopup);
});

// сохранение данных для первой карточки!!
editProfileButton.addEventListener('click', function() {
    // clearValidation(popapProfile, validationConfig);
    openModal(editProfilePopup);
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileDescription.textContent;
  });

function handleFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileDescription.textContent;
}
// formElement.addEventListener('submit', handleFormSubmit);



// вторая форма!!
const closeEditProfileButtonCard = document.querySelector('.popup__close_new-card');// кнопка для зарытия второй формы 
const profileAddBbutton = document.querySelector('.profile__add-button') //кнопка для открытия второй формы
const popupTypeNewCard = document.querySelector('.popup_type_new-card')//див вторай  форма 


profileAddBbutton.addEventListener('click',function() {
  openModal(popupTypeNewCard);
});

closeEditProfileButtonCard.addEventListener('click', function() {
  closeModal(popupTypeNewCard);
});


// открытие озображения!!
const popapCaption = document.querySelector('.popup__caption');//для подписи снизу 
const popupTypeIimage = document.querySelector('.popup_type_image')// открытие большой карточки изображения 
const popupImage = document.querySelector('.popup__image')
const placesItem = document.querySelector('.places__item ') //для клика по изображению 
const cardImage = document.querySelector('.card__image')
function openImg(ImgSrc,ImgName) {
  openModal(popupTypeIimage);
  popupImage.src = ImgSrc;
  popupImage.alt= ImgName;
  popapCaption.textContent= ImgName;
}

cardImage.addEventListener('click', function() {
  openImg(popupTypeIimage);
})


// 1)не работает кнопка сохранения, т.е. данные не сохраняються после редактирования 
// 2) не добавляються новые карточки 
// 3) лайки для карточек 
// 4) не работает увеличение карточек 
// 6) плавное открытие и закрытие 