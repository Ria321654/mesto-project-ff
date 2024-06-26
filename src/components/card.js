
import { openModal } from "./modal";
const templateCard = document.querySelector("#card-template").content.querySelector('.card');
const cardsContainer  = document.querySelector(".places__list");
/* Функция удаления карточки */
const deleteCard = function(evt){
    const cardElement =  evt.target.closest('.card');
    cardElement.remove();
};

// открытие озображения!!
const popapCaption = document.querySelector('.popup__caption');//для подписи снизу 
const popupTypeImage = document.querySelector('.popup_type_image')// открытие большой карточки изображения 
const popupImage = document.querySelector('.popup__image')
// Фция по открытию изображения
function openImg(imgSrc,imgName) {
  openModal(popupTypeImage);
  popupImage.src = imgSrc;
  popupImage.alt= imgName;
  popapCaption.textContent= imgName;
}

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
cardsContainer.addEventListener('click', function(evt) {
  if(evt.target.classList.contains('card__image')) {
    const img = evt.target.closest('img');
    openImg(img.src, img.alt);
  };
})
return card;
};  

function changeLikeColor(evt) {
    evt.target.classList.toggle('card__like-button_is-active'); //  использование toggle, работает как add+remove. Если класс есть - удаляет. Если нет - добавляет.
  }

export {createCard, deleteCard,changeLikeColor} 