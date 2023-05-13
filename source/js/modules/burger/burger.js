const burgerToggle = document.getElementById('burger');
const menuHeader = document.getElementById('menu');
const menuLink = document.getElementById('menu-item');
const menuClose = document.getElementById('menu-close');


if (burgerToggle) {
  burgerToggle.addEventListener('click', function () {
    menuHeader.classList.toggle('is-open');
    document.body.classList.toggle('lock');
    menuLink.addEventListener('click', function () {
      if (menuHeader.classList.contains('is-open')) {
        menuHeader.classList.remove('is-open');
        document.body.classList.toggle('lock');
      }
    });
  });
  menuClose.addEventListener('click', function () {
    if (menuHeader.classList.contains('is-open')) {
      menuHeader.classList.remove('is-open');
      document.body.classList.toggle('lock');
    }
  });
}
