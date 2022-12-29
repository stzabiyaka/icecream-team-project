(() => {
  const mapBtnRef = document.querySelector('[data-map-button]');
  const mapBtnLabelRef = document.querySelector('[data-map-button-label]');
  const mapViewRef = document.querySelectorAll('[data-map]');
  const mapBtnLabelText = 'Our Locations';
  const mapClass = 'is-map';

  mapBtnRef.addEventListener('click', () => {
    mapBtnRef.classList.toggle(mapClass);
    mapBtnLabelRef.textContent =
      mapBtnLabelRef.textContent === mapBtnLabelText
        ? 'Close'
        : mapBtnLabelText;

    mapViewRef.forEach(element => {
      element.classList.toggle(mapClass);
    });
  });
})();
