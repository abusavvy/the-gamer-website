$(document).ready(function () {
  "use strict"; // start of use strict

  /*==============================
	Mobile navigation
	==============================*/
  $(".header__btn").on("click", function () {
    $(this).toggleClass("header__btn--active");
    $(".header__nav").toggleClass("header__nav--active");

    if ($(window).scrollTop() == 0) {
      $(".header").toggleClass("header--active");
    }
  });

  $(".header__nav a[data-scroll]").on("click", function () {
    $(".header__nav").toggleClass("header__nav--active");
    $(".header__btn").toggleClass("header__btn--active");
  });
});
