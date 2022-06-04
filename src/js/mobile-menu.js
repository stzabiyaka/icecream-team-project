(() => {
  const menuBtnRefOpen = document.querySelector('[data-menu-button-open]');
  const menuBtnRefClose = document.querySelector('[data-menu-button-close]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mapBtn = document.querySelector('[data-map-button]');
  const mapRef = document.querySelectorAll('[data-map]');
  const frncsBtn = document.querySelector('[data-frncs-button]');
  const frncsRef = document.querySelector('[data-frncs]');

  menuBtnRefOpen.addEventListener('click', () => {
    mobileMenuRef.classList.add('is-open');
    document.body.classList.add('menu-open');
  });

  menuBtnRefClose.addEventListener('click', () => {
    mobileMenuRef.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  });

  mapBtn.addEventListener('click', () => {
    mapBtn.classList.toggle('is-map');

    mapRef.forEach(element => {
      element.classList.toggle('is-map');
    });
  });

  frncsBtn.addEventListener('click', () => {
    frncsRef.classList.toggle('is-frncs');
  });
})();
