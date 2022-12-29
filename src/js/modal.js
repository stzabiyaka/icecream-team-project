(() => {
  const refs = {
    openModalBtnFirst: document.querySelector('[data-modal-open-first]'),
    openModalBtnSecond: document.querySelector('[data-modal-open-second]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtnFirst.addEventListener('click', toggleModal);
  refs.openModalBtnSecond.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function onCloseModal(event) {
    if (
      event.target === event.currentTarget ||
      event.target === refs.closeModalBtn ||
      event.target.parentElement === refs.closeModalBtn ||
      event.target.parentElement.parentElement === refs.closeModalBtn ||
      event.code === 'Escape'
    ) {
      toggleModal();
    }
  }

  function toggleModal() {
    if (document.body.classList.contains('modal-open')) {
      refs.modal.removeEventListener('click', onCloseModal);
      window.removeEventListener('keydown', onCloseModal);
    } else {
      refs.modal.addEventListener('click', onCloseModal);
      window.addEventListener('keydown', onCloseModal);
    }
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();
