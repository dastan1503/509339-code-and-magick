'use strict';

var arrNames = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'];
var arrFamilies = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'];
var arrCoatColor = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'];
var arrEyesColor = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'];

var generateRandomWizard = function (arr1, arr2, arr3, arr4) {
  var wizard = {
    name: arr1[Math.floor(Math.random() * arr1.length)] + ' ' + arr2[Math.floor(Math.random() * arr2.length)],
    coatColor: arr3[Math.floor(Math.random() * arr3.length)],
    eyesColor: arr4[Math.floor(Math.random() * arr4.length)]
  };
  return wizard;
};

var randomWizards = [];
for (var i = 0; i < 4; i++) {
  randomWizards[i] = generateRandomWizard(arrNames, arrFamilies, arrCoatColor, arrEyesColor);
}

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var fragment = document.createDocumentFragment();
for (var j = 0; j < randomWizards.length; j++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = randomWizards[j].name;
  wizardElement.querySelector('.wizard-coat').style.fill = randomWizards[j].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = randomWizards[j].eyesColor;
  fragment.appendChild(wizardElement);
}

similarListElement.appendChild(fragment);

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');

var switchWizardPreferences = function () {
  var popup = document.querySelector('.setup');
  var buttonOpen = document.querySelector('.setup-open');
  var userIcon = document.querySelector('.setup-open-icon');
  var buttonClose = document.querySelector('.setup-close');
  var KEYCODE_ESC = 27;
  var KEYCODE_ENTER = 13;

  var openPopup = function () {
    popup.classList.remove('hidden');
  };
  var closePopup = function () {
    popup.classList.add('hidden');
  };
  var closePopupEsc = function () {
    document.addEventListener('keydown', function (evt) {
      if (evt.keyCode === KEYCODE_ESC) {
        closePopup();
      }
    });
  };

  buttonOpen.addEventListener('click', function () {
    openPopup();
    closePopupEsc();
  });

  userIcon.addEventListener('keydown', function (evt) {
    if (evt.keyCode === KEYCODE_ENTER) {
      openPopup();
      closePopupEsc();
    }
  });

  buttonClose.addEventListener('click', function () {
    closePopup();
  });

  buttonClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === KEYCODE_ENTER) {
      closePopup();
    }
  });
};
switchWizardPreferences();
