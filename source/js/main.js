var menuBtn = document.querySelector('.main-nav__toggle'),
    menuList = document.querySelectorAll('.main-nav__list');

    menuBtn.addEventListener('click', function(){
      menuBtn.classList.toggle('main-nav__toggle--close');
      for (var i = 0; i < menuList.length; i++) {
        menuList[i].classList.toggle('main-nav__list--open');
      }
    });
