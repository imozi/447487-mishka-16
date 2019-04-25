var menuBtn = document.querySelector('.main-nav__toggle'),
  menuList = document.querySelectorAll('.main-nav__list'),
  map = document.querySelector('.map'),
  myMap = null;

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('main-nav__toggle--close');
  for (var i = 0; i < menuList.length; i++) {
    menuList[i].classList.toggle('main-nav__list--open');
  }
});

if (map !== null) {
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

    var styleMap = document.querySelector('.ymaps-2-1-73-map');
    styleMap.style.position = 'absolute';
  }
}
