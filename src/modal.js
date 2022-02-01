(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelectorAll('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.forEach(element => {
    addEventListener('click', toggleModal);
  });
  refs.closeModalBtn.forEach(element => {
    addEventListener('click', toggleModal);
  });

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();
