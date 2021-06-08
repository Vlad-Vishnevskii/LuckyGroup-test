'use strict';
(function () {

  const form = document.querySelector('.form');
  const selectCountry = form.querySelector('.form__select');
  const countryList = form.querySelector('.form__country-list');
  const inputCountryHidden = form.querySelector('.form__input-country-hidden');
  const countryNameSelected = selectCountry.querySelector('span');
  const countrySelectedFlag = selectCountry.querySelector('img');

  function openCountryList () {
    countryList.classList.remove('visually-hidden');
    countryList.removeEventListener('click', clickOnSelect);
  }

  function clickOnSelect (evt) {
    if (evt.target.closest('.form__select')) {
      openCountryList();
    }
  }

  function closeList () {
    countryList.classList.add('visually-hidden');
    countryList.addEventListener('click', clickOnSelect);
  }

  function onCountryClick (evt) {
    const target = evt.target;
    const itemCountry = target.closest('.form__country-item');
    if (itemCountry) {
      const countryNameItem = itemCountry.querySelector('span');
      const countryFlagItem = itemCountry.querySelector('img');
      countryNameSelected.textContent = countryNameItem.textContent;
      inputCountryHidden.value = countryNameItem.textContent;
      countrySelectedFlag.src = countryFlagItem.src;
      closeList();
    }
  }

  function onOverlayClick (evt) {
    const target = evt.target;
    if (!target.closest('.form__select')) {
      closeList();
    }
  }

  form.addEventListener('click', onOverlayClick);
  selectCountry.addEventListener('click', clickOnSelect);
  countryList.addEventListener('click', onCountryClick);

})();
