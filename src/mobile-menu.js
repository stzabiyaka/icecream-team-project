(() => {
  const menuBtnRefOpen = document.querySelector('[data-menu-button-open]');
  const menuBtnRefClose = document.querySelector('[data-menu-button-close]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRefOpen.addEventListener('click', () => {
    mobileMenuRef.classList.add('is-open');
    document.body.classList.add('menu-open');
  });

  menuBtnRefClose.addEventListener('click', () => {
    mobileMenuRef.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  });
})();
