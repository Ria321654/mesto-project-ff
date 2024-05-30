function openModal(popup) {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', closeModalEsk);
  };

  function closeModal(popup) {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closeModalEsk);
  };

  function closeModalEsk(evt) {
    if (evt.key === 'Escape') {
      closeModal(document.querySelector('.popup_is-opened'));
    }
  };
function closeModalOverley(evt){
    if (evt.target === evt.currentTarget) {
    closeModal(document.querySelector(".popup_is-opened"));
    };
  };

  export { openModal, closeModal, closeModalEsk, closeModalOverley}