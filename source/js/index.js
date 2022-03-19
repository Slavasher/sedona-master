var menuIcon = document.querySelector(".nav__burger"),
  menuItems = document.querySelector(".menu__swipe");
menuItems.classList.contains("menu__swipe") ||
  (menuItems.classList.add("menu__swipe"),
    menuIcon.classList.add("nav__img")),
  menuIcon.addEventListener("click", function (event) {
    event.preventDefault(),
      menuItems.classList.contains("menu__swipe") ?
      (menuItems.classList.remove("menu__swipe"),
        menuIcon.classList.remove("nav__img")) :
      (menuItems.classList.add("menu__swipe"),
        menuIcon.classList.add("nav__img"))

  })


// const link = document.querySelector(".subtitle__link");
// const popup = document.querySelector(".subtitle__btn");
// link.addEventListener("click", function (event) {
//   event.preventDefault;
//   popup.classList.toggle("subtitle__btn--index");
// });
