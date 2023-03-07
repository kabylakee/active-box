$(function () {
  const header = $("#header");
  const intro = $("#intro");
  const introHeight = intro.innerHeight();
  const nav = $("#nav");
  let scrollTop = $(window).scrollTop();

  $(window).on("scroll load resize", () => {
    scrollPosition = $(this).scrollTop();

    scrollPosition >= introHeight
      ? header.addClass("fixed")
      : header.removeClass("fixed");
  });

  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();
    let elementId = $(this).data("scroll");
    let elementOffset = $(elementId).offset().top;

    $("html, body").animate(
      {
        scrollTop: elementOffset,
      },
      2000
    );
    nav.removeClass("show");
  });

  $("#nav__toggle").on("click", function (event) {
    event.preventDefault();
    nav.toggleClass("show");
  });

  $("#reviews__slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true,
  });
});
