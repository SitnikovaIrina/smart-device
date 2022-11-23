export const accordeonInit = function () {
  let acc = document.getElementsByClassName('accordion__button');


  function getInnerWidth() {
    if (window.innerWidth >= 767) {
      document.querySelector('.accordion__panel--contacts-js').style.display = 'block';
      document.querySelector('.accordion__panel--nav-js').style.display = 'block';
    } else {
      document.querySelector('.accordion__panel--contacts-js').style.display = 'none';
      document.querySelector('.accordion__panel--nav-js').style.display = 'none';
    }
  }


  function accodrionHandler(i, evt) {
    if (evt.target.classList.contains('accordion__button--nav-js')) {


      if (!acc[i].classList.contains('active')) {

        acc[1].classList.remove('active');
        document.querySelector('.accordion__panel--contacts-js').style.display = 'none';
        document.querySelector('.accordion__panel--nav-js').style.display = 'block';
      } else {
        document.querySelector('.accordion__panel--nav-js').style.display = 'none';
        document.querySelector('.accordion__panel--contacts-js').style.display = 'none';
      }
    }
    if (evt.target.classList.contains('accordion__button--contacts-js')) {


      if (!acc[i].classList.contains('active')) {
        acc[0].classList.remove('active');
        document.querySelector('.accordion__panel--nav-js').style.display = 'none';
        document.querySelector('.accordion__panel--contacts-js').style.display = 'block';
      } else {
        document.querySelector('.accordion__panel--nav-js').style.display = 'none';
        document.querySelector('.accordion__panel--contacts-js').style.display = 'none';
      }
    }
    acc[i].classList.toggle('active');
  }


  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', (evt) => {
      accodrionHandler(i, evt);
    });
  }

  window.addEventListener('resize', getInnerWidth);

};
