function openModal(popup) {
    popup.classList.add('popup_is-opened', 'popup_is-animated');
    document.addEventListener('keydown', closeModalEsc);
    popup.addEventListener('click', closeModalOverley)
  };

  function closeModal(popup) {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closeModalEsc);
    popup.addEventListener('click', closeModalOverley)
  };

  function closeModalEsc(evt) {
    if (evt.key === 'Escape') {
      closeModal(document.querySelector('.popup_is-opened'));
    }
  };
function closeModalOverley(evt){
    if (evt.target === evt.currentTarget) {
    closeModal(document.querySelector(".popup_is-opened"));
    };
  };

  export { openModal, closeModal}