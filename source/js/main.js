import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // маска для телефона

  const phoneInput = document.querySelectorAll('input[data-phone-input]');
  const NUMBER_LENGTH = 11;

  const checkInputPhone = () => {
    phoneInput.forEach(function (item) {
      item.addEventListener('input', () => {
        const value = item.value.replace(/\D+/g, '');

        const prefixNumber = (str) => {
          if (str === '7') {
            return '7(';
          }
          if (str === '8') {
            return '7(';
          }
          if (str === '9') {
            return '7(9';
          }
          return '7(';
        };

        let result = '';

        for (let i = 0; i < value.length && i < NUMBER_LENGTH; i++) {
          switch (i) {
            case 0:
              result += prefixNumber(value[i]);
              continue;
            case 4:
              result += ') ';
              break;
            case 7:
              result += '-';
              break;
            case 9:
              result += '-';
              break;
            default:
              break;
          }
          result += value[i];
        }

        item.value = result;
      });
    });
  };

  checkInputPhone();

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

  // аккордеон

  const accordionItems = document.querySelectorAll('[data-accordion-item]');

  accordionItems.forEach((item) => {
    const button = item.querySelector('[data-accordion-button]');
    const icon = item.querySelector('[data-accordion-button-icon]');
    const content = item.querySelector('[data-accordion-content]');

    window.addEventListener('resize', () => {
      if (content.getAttribute('data-accordion-content') === 'open') {
        content.style.height = 'auto';

        const contentHeight = content.scrollHeight;
        content.style.height = `${contentHeight}px`;
      }
    });

    button.addEventListener('click', () => {
      if (content.getAttribute('data-accordion-content') !== 'open') {
        const contentHeight = content.scrollHeight;

        accordionItems.forEach((item) => {
          const icon = item.querySelector('[data-accordion-button-icon]');
          const content = item.querySelector('[data-accordion-content]');
          icon.setAttribute('data-accordion-button-icon', 'closed');
          content.setAttribute('data-accordion-content', 'closed');
          content.style.height = '0';
        });

        icon.setAttribute('data-accordion-button-icon', 'open');
        content.setAttribute('data-accordion-content', 'open');
        content.style.height = `${contentHeight}px`;
      } else {
        icon.setAttribute('data-accordion-button-icon', 'closed');
        content.setAttribute('data-accordion-content', 'closed');
        content.style.height = '0';
      }
    });
  });


  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
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
