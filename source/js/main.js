var menuBtn = document.querySelector('.main-nav__toggle'),
  menuList = document.querySelectorAll('.main-nav__list'),
  map = document.querySelector('.map'),
  addProduct = document.querySelector('.popular-product__link'),
  bay = document.querySelectorAll('.product__link'),
  modal = document.querySelector('.modal'),
  modalClose = document.querySelector('.modal__overlay'),
  myMap = null;

/** Влючен js **/
menuBtn.classList.remove('main-nav__toggle--hidden');

for (var i = 0; i < menuList.length; i++) {
  menuList[i].classList.remove('main-nav__list--open');
}

/** Открытие закрытие меню **/
menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('main-nav__toggle--close');
  for (var i = 0; i < menuList.length; i++) {
    menuList[i].classList.toggle('main-nav__list--open');
  }
});

/** Карта **/
if (map) {
  window.onload = function () {
    ymaps.ready(init);

    function init() {

      myMap = new ymaps.Map('map', {
        center: [59.93863106, 30.32305450],
        zoom: 16
      });

      var myPlacemark = new ymaps.Placemark([59.93862872, 30.32305125], {
        balloonContent: 'Интернет-магазин игрушек ручной работы "Мишка" <br> <strong>г. Санкт-Петербург, ул. Б. Конюшенная, д. 19/8, офис 101</strong>'
      }, {
          iconLayout: 'default#imageWithContent',
          iconImageHref: 'img/icon-map-pin.svg',
          iconImageSize: [66, 100],
          iconImageOffset: [-33, -100]
        });
      myMap.geoObjects.add(myPlacemark);

      var styleMap = document.querySelector('.map ymaps');
      styleMap.classList.add('map__ya');
      styleMap.style.position = 'absolute';
    }
  }
}

/** Модальное окно **/

if (addProduct) {
  addProduct.addEventListener('click', function (e) {
    e.preventDefault();
    modal.classList.add('modal--show');
  })
};

if (bay) {
  for (var i = 0; i < bay.length; i++) {
    bay[i].addEventListener('click', function (e) {
      e.preventDefault();
      modal.classList.add('modal--show');
    })
  }
}

if (modalClose) {
  modalClose.addEventListener('click', function () {
    modal.classList.remove('modal--show');
  })
}

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    if (modal.classList.contains("modal--show")) {
      modal.classList.remove("modal--show");
    }
  }
});
