import * as nikfunctions from "./modules/functions.js";

nikfunctions.isWebp();

$(function () {
  $('.product-item__modal-cart-number').styler()

  $('.product-item__modal-slider-big').slick({
    arrows: false,
    fade:true,
    asNavFor: '.product-item__modal-slider-small',
    slidesToShow: 1,
    slidesToScroll: 1,
  })
  $('.product-item__modal-slider-small').slick({
    asNavFor: '.product-item__modal-slider-big',
    variableWidth: true,
    infinite: false,
  })

  $('.product-item__modal-close').on('click', function () {
    $('.product-item__modal').removeClass('product-item__modal--active');
  });

  $('.product-item__hover-icon').on('click', function () {
    const modal = this.closest('.product-item__wrapper').querySelector('.product-item__modal')
    modal.classList.add('product-item__modal--active');
  });

  $('.products__btn-show').on('click', function () {
    $('.products__btn-show').removeClass('products__btn-show--active');
    $(this).addClass('products__btn-show--active');
  });
  $('.products__show-grid').on('click', function () {
    $('.products__items').removeClass('products__items--list');
  });
  $('.products__show-list').on('click', function () {
    $('.products__items').addClass('products__items--list');
  });

  $('.products__show-filtres').on('click', function () {
    $('.products__filtres').toggleClass('products__filtres--active');
    $('.products__items').toggleClass('products__items--filtres');
  });


  $('.filtres__show').on('click', function () {
    $(this).toggleClass('filtres__show--active');
  });
  $('.filtres__reset').on('click', function () {
    $('.filtres__form')[0].reset()
  });

  var $range = $(".filtres__price-range-slider");
  var $inputFrom = $(".filtres__price-range-from");
  var $inputTo = $(".filtres__price-range-to");
  var instance;
  var min = 0;
  var max = 1000;
  var from = 0;
  var to = 0;

  $range.ionRangeSlider({
    skin: "round",
    type: "double",
    min: min,
    max: max,
    from: 0,
    to: 100,
    onStart: updateInputs,
    onChange: updateInputs,
    onFinish: updateInputs,
    hide_min_max: true,
    hide_from_to: true,
  });
  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }

  $inputFrom.on("change", function () {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val
    });

    $(this).prop("value", val);

  });

  $inputTo.on("change", function () {
    var val = $(this).prop("value");

    // validate
    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val
    });

    $(this).prop("value", val);
  });
})