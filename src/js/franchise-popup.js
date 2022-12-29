(() => {
  const franchiseBtnRef = document.querySelector('[data-franchise-button]');
  const franchiseBtnLabelRef = document.querySelector(
    '[data-franchise-button-label]'
  );
  const franchiseViewRef = document.querySelector('[data-franchise]');
  const franchiseBtnLabelText = 'Franchise';
  const franchiseClass = 'is-franchise';

  franchiseBtnRef.addEventListener('click', () => {
    franchiseBtnRef.classList.toggle(franchiseClass);
    franchiseBtnLabelRef.textContent =
      franchiseBtnLabelRef.textContent === franchiseBtnLabelText
        ? 'Close'
        : franchiseBtnLabelText;

    franchiseViewRef.classList.toggle(franchiseClass);
  });
})();
