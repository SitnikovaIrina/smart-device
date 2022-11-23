import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {accordeonInit} from './modules/accordion';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // local storage

  const username = document.querySelector('[name=name]');
  const phone = document.querySelector('[name=tel]');
  const form = document.querySelector('#callback-form');

  form.addEventListener('submit', function (evt) {
    if (!username.value || !phone.value) {
      evt.preventDefault();
      document.classList.add('modal--error');
    } else {
      localStorage.setItem('username', username.value);
      localStorage.setItem('phone', phone.value);
    }
  });

  const modalUsername = document.querySelector('[name=modal-name]');
  const modalPhone = document.querySelector('[name=modal-tel]');
  const modalPform = document.querySelector('#modal-callback-form');

  modalPform.addEventListener('submit', function (evt) {
    if (!modalUsername.value || !modalPhone.value) {
      evt.preventDefault();
      document.classList.add('modal--error');
    } else {
      localStorage.setItem('modalUsername', modalUsername.value);
      localStorage.setItem('modalPhone', modalPhone.value);
    }
  });

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    accordeonInit();

    let element = document.querySelectorAll('input[class="phone"]');
    let maskOptions = {
      mask: '+{7}(000)000-00-00',
    };

    for (let i = 0; i < element.length; i++) {
      let mask = IMask(element[i], maskOptions);
    }

  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
