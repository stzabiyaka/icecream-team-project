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

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();
