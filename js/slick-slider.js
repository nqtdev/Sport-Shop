$(document).ready(function () {
  $(".slider-product").slick({
    infinite: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 2,
  });
});

infinite: true,
  $(document).ready(function () {
    $(".modal-content__img").slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
  });

$(document).ready(function () {
  $(".slider-browse").slick({
    infinite: true,
    // dots: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  });
});

$(document).ready(function () {
  $(".slider-latest").slick({
    infinite: true,
    // dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
  });
});
