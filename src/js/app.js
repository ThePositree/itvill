import * as nikfunctions from "./modules/functions.js";

nikfunctions.isWebp();


$(function () {
  $('.category__title').on('click', function () {
    $('.category__items-wrapper').addClass('category__items-wrapper--active');
  });
  $('.category__close').on('click', function () {
    $('.category__items-wrapper').removeClass('category__items-wrapper--active');
  });


  let cart = $('.menu-bar__cart-inner')
  $('.menu-bar__cart').on('click', function () {
    if (cart.hasClass('menu-bar__cart-inner--empty')) {
      let menuBarEmpty = $(this).closest('.menu-bar')[0];
      $(menuBarEmpty).removeClass('menu-bar--active');
    } else {
      let menuBarNoEmpty = $(this).closest('.menu-bar')[0];
      $(menuBarNoEmpty).addClass('menu-bar--active');
    }
    if ($(this).hasClass('menu-bar__cart--active')) {
      $(this).removeClass('menu-bar__cart--active');
      $('.menu-bar').removeClass('menu-bar--active');
    } else {
      $(this).addClass('menu-bar__cart--active');
    }
  });

  $('.filtres-mobile-close').on('click', function () {
    $('.products__items').removeClass('products__items--filtres');
    $('.products__filtres').removeClass('products__filtres--active');
  });


  $('.menu-bar__cart-test-btn').on('click', function (e) {
    e.stopPropagation();
    $('.menu-bar__cart-inner').toggleClass('menu-bar__cart-inner--empty');
  });


  $('.header__top-search-submit').on('click', function (e) {
    e.preventDefault();
    $('.header__top-search-list-wrapper').toggleClass('header__top-search-list-wrapper--active');
  });

  $('.product__form-color-select').styler();
  $('.product__form-number-input').styler();

  $('.product__tab').on('click', function () {
    $('.product__tab').removeClass('product__tab--active')
    $(this).addClass('product__tab--active');
  });

  $('.product__tab--desc').on('click', function () {
    $('.product__tab-content').removeClass('product__tab-content--active');
    $('.product__tab-content--desc').addClass('product__tab-content--active');
  });
  $('.product__tab--charact').on('click', function () {
    $('.product__tab-content').removeClass('product__tab-content--active');
    $('.product__tab-content--charact').addClass('product__tab-content--active');
  });
  $('.product__tab--instruction').on('click', function () {
    $('.product__tab-content').removeClass('product__tab-content--active');
    $('.product__tab-content--instruction').addClass('product__tab-content--active');
  });
  $('.product__tab--video').on('click', function () {
    $('.product__tab-content').removeClass('product__tab-content--active');
    $('.product__tab-content--video').addClass('product__tab-content--active');
  });

  $('.product-item__modal-cart-number').styler();

  $('.product-item__modal-close').on('click', function () {
    $('.product-item__modal').removeClass('product-item__modal--active');
    document.querySelector('body').style.overflow = 'scroll';
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

  $('.products__show-filtres').on('click', function (e) {
    e.stopPropagation();
    $('.products__filtres').toggleClass('products__filtres--active');
    $('.products__items').toggleClass('products__items--filtres');
  });


  $('.products__filtres').on('click', function (e) {
    e.stopPropagation();
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

  $('.product-item__hover-icon').on('click', function () {
    const modal = this.closest('.product-item-wrapper').querySelector('.product-item__modal')
    modal.classList.add('product-item__modal--active');
    document.querySelector('body').style.overflow = 'hidden';
    const sliderBig = modal.querySelector('.product-item__modal-slider-big');
    const sliderSmall = modal.querySelector('.product-item__modal-slider-small');
    const swiper = new Swiper(sliderSmall, {
      loop: true,
      spaceBetween: 8,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
      mousewheel: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    const swiper2 = new Swiper(sliderBig, {
      loop: true,
      effect: "fade",
      simulateTouch: false,
      thumbs: {
        swiper: swiper,
      },
    });
  });


  $('.product-item__modal-cart-number').val(0)
  $('.product__form-number-input').val(0)

  function checkWidth() {
    var windowWidth = $('body').innerWidth(),
      elem = $(".products__items");
    if (windowWidth < 992) {
      elem.removeClass('products__items--list');
    }
  }


  checkWidth();

  $(window).resize(function () {
    checkWidth();
  });
})

const productSliderBig = document.querySelector('.product__slider-big');
const productSliderSmall = document.querySelector('.product__slider-small');
const productSliderWith = document.querySelector('.product__with-wrapper')
console.log(productSliderBig)
const productSwiperBig = new Swiper(productSliderSmall, {
  loop: true,
  spaceBetween: 8,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  mousewheel: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const productSwiperSmall = new Swiper(productSliderBig, {
  loop: true,
  effect: "fade",
  simulateTouch: false,
  thumbs: {
    swiper: productSwiperBig,
  },
});
const productSwiperWith = new Swiper(productSliderWith, {
  pagination: {
    el: '.product__with-pagination',
    clickable: true,
  },
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    320: {
      spaceBetween: 10,
      slidesPerView: 2,
    },
    798: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 2,
    },
    1300: {
      slidesPerView: 3,
    },
  },
})

const mediaQuery = window.matchMedia('(max-width: 570px)')

function viewPortMobile(e) {
  if (e.matches) {
    document.querySelector('meta[name="viewport"]').setAttribute("content", "width=570 ,user-scalable=no");
  } else {
    document.querySelector('meta[name="viewport"]').setAttribute("content", "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no");
  }
}
mediaQuery.addEventListener('change', viewPortMobile)

viewPortMobile(mediaQuery)

window.addEventListener("orientationchange", function () {
  document.querySelector('meta[name="viewport"]').setAttribute("content", "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no");
})


const mediaQuery2 = window.matchMedia('(max-width: 880px)');


function filtresHide(e) {
  if (e.matches) {
    document.body.addEventListener('click', function (event) {
      if (event.target.className !== 'products__filtres' && event.target.className !== 'products__show-filtres') {
        document.querySelector('.products__filtres').classList.remove('products__filtres--active')
      }
    })
  } else {

  }
}


mediaQuery2.addEventListener('change', filtresHide)


filtresHide(mediaQuery2)



document.body.addEventListener('click', function (e) {
  if (!e.target.closest('.menu-bar')) {
    document.querySelector('.menu-bar__cart').classList.remove('menu-bar__cart--active')
    document.querySelector('.menu-bar').classList.remove('menu-bar--active')
  }
})


// window.addEventListener('resize', () => {
//   document.querySelector('meta[name="viewport"]').setAttribute(
//     'content',
//     'width=device-width, user-scalable=no, initial-scale=' + (window.matchMedia('(max-width: 570px)').matches ? document.clientWidth / 570 : 1.0)
//   );
// })
// window.dispatchEvent(new Event('resize'));