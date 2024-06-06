// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
// index.js

import './pages/index.css'; // добавьте импорт главного файла стилей
import {initialCards} from './scripts/cards.js';
import {openModal, closeModal} from './components/modal.js';

const templateCard = document.querySelector("#card-template").content.querySelector('.card');
const cardsContainer  = document.querySelector(".places__list");

/* Функция удаления карточки */
const deleteCard = function(evt){
        const cardElement =  evt.target.closest('.card');
        cardElement.remove();
};

/* Функция создания карточки */
const createCard = function (name, url, deleteCard, changeLikeColor) {
    const card = templateCard.cloneNode(true);
    const titleCard = card.querySelector('.card__title');
    const cardImg = card.querySelector('.card__image');
    const cardLike = card.querySelector('.card__like-button');
    titleCard.textContent = name;
    cardImg.src = url;
    cardImg.alt = name;
    const deleteButton = card.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', deleteCard);
    cardLike.addEventListener('click', changeLikeColor)
    return card;
};  

function changeLikeColor(evt) {
  evt.target.classList.toggle('card__like-button_is-active'); // Лучше использовать toggle. Он работает как add+remove. Если класс есть - удаляет. Если нет - добавляет.
}

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

// saveButton - очень плохое название. save - сохранить. А сохранить что?
const formSubmitButton = document.querySelector('.popup__button') // кнопка сохранить для формы изменения имени

// Для разных форм нужны разные обработчики событий submit
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
    // clearValidation(popapProfile, validationConfig);
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
}

formProfileChange.addEventListener('submit', handleProfileFormSubmit);
formAddCard.addEventListener('submit', handleCardFormSubmit);


// открытие озображения!!
const popapCaption = document.querySelector('.popup__caption');//для подписи снизу 
const popupTypeImage = document.querySelector('.popup_type_image')// открытие большой карточки изображения 
const popupImage = document.querySelector('.popup__image')
const popupImageCloseButton = document.querySelector('.popup__close_big-image')

// const placesItem = document.querySelector('.places__item ') //для клика по изображению 
// const cardImage = document.querySelector('.card__image')

// Ф-ция по открытию изображения
function openImg(ImgSrc,ImgName) {
  openModal(popupTypeImage);
  popupImage.src = ImgSrc;
  popupImage.alt= ImgName;
  popapCaption.textContent= ImgName;
}
// слушатель по клику на картинку карточки
cardsContainer.addEventListener('click', function(evt) {
  if(evt.target.classList.contains('card__image')) {
    const img = evt.target.closest('img');
    openImg(img.src, img.alt);
  };
})

// слушатель по клику на кнопку закрытия большого изображения
popupImageCloseButton.addEventListener('click', function() {
  closeModal(popupTypeImage);
});

/*
// для нажатия лайка!! работает только для первого сердечка
const cardLikeButton = document.querySelector('.card__like-button');
cardLikeButton.addEventListener('click', function (evt) { 
  if (evt.target.classList.contains('card__like-button_is-active')) {
    evt.target.classList.remove('card__like-button_is-active');
  } else {
    evt.target.classList.add('card__like-button_is-active');
  }
}
);
*/

// 2) не добавляются новые карточки 
// 3) лайки для карточек работает только для первого сердечка
// 6) плавное открытие и закрытие 
/*

Задачи:
1. Реализовать закрашивание лайков на всех карточках
ТЗ: Если лайкнуть сердечко, оно меняет цвет. Ф-цию обработчика лайка нужно передать в ф-цию создания карточки аргументом.
  а) Создадим функцию по смене цвета лайка.
  б) Передадим её аргументом в ф-цию создания карточки
  в) Создадим обработчик по клику на лайк и положим туда ф-цию

2. Реализовать добавление новой карточки
ТЗ: При клике на "+" открывается диалоговое окно, в которое необходимо записать имя и ссылку карточки, чтобы нажать "сохранить".
При нажатии "сохранить" новая карточка попадает в начало контейнера, а диалоговое окно закрывается и очищается форма.
 */