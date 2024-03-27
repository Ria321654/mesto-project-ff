// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
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