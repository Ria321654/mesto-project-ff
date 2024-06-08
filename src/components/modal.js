function openModal(popup) {    
  popup.classList.add("popup_is-animated");  // сначала анимация
  setTimeout(() => {
    popup.classList.add("popup_is-opened");  // потом только открытие
  }, 1);
    document.addEventListener('keydown', closeModalEsc);
    popup.addEventListener('click', closeModalOverley)
  };

  function closeModal(popup) {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closeModalEsc);
    popup.addEventListener('click', closeModalOverley)
    popup.removeEventListener('click', closeModalOverley)
  };

  function closeModalEsc(evt) {
    if (evt.key === 'Escape') {
      closeModal(document.querySelector('.popup_is-opened'));
    }
  };
function closeModalOverley(evt){
  if (evt.target === evt.currentTarget) {
    closeModal(evt.currentTarget);
   };
  };

  export { openModal, closeModal}