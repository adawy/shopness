$(document).ready(function () {
  //open-search
  $('.open-search').click(function(){
      event.preventDefault();
      $('.mob-search form').css('display','flex');
      $('.over-search').fadeIn();
  });
  $('.over-search').click(function(){
    event.preventDefault();
    $('.mob-search form').fadeOut();
    $(this).fadeOut();
});
  //open filter price
  $('.filter-price-btn').click(function(){
    $('.custom-mob').toggleClass('added')
    $(this).find('i').toggleClass('fa-times').toggleClass('fa-filter')
  });
  //filter check box
  $('.main-dep input[type=checkbox]').on('change',function(e) {
    if ($(this).prop('checked')) {
        $('.sup-dep').slideDown();
    } else {
        $('.sup-dep').slideUp();
    };
  });
  $('.sup-dep input[type=checkbox]').on('change',function(e) {
    if ($(this).prop('checked')) {
        $('.sup-sdep').slideDown();
    } else {
        $('.sup-sdep').slideUp();
    };
  });

  //fav-btn
  $('.fav-btn').click(function () {
    event.preventDefault();
    $(this).toggleClass('text-danger')
  });

  //trash-btn
  $('.trash-btn').click(function () {
    event.preventDefault();
    $(this).parents('.pro-card').remove();
  });

  //del-message
  $('.del-message').click(function () {
    event.preventDefault();
    $(this).parent().remove();
  });

  //Back
  $('#back').click(function () {
    window.history.back();
  });

  //follow-btn
  jQuery.fn.extend({
    toggleText: function (a, b) {
      var isClicked = false;
      var that = this;
      this.click(function () {
        if (isClicked) {
          that.text(a);
          isClicked = false;
        } else {
          that.text(b);
          isClicked = true;
        }
      });
      return this;
    }
  });
  $('.follow-btn , .addcart-btn').click(function () {
    event.preventDefault();
  });
  $('.follow-btn').toggleText('متابعه', 'متابع');
  $('.addcart-btn').toggleText('اضافةالى العربة', 'مضاف الي العربة')


  // Convert Password Field To Text Field

  $('.ch-pass').click(function () {
    $(this).toggleClass('active');
    $(this).toggleClass('fa-eye-slash');
    if ($(this).hasClass('active')) {
      $(this).parent().find('input').attr('type', 'text');
    } else {
      $(this).parent().find('input').attr('type', 'password');
    }
  });

  $("#submit-button").submit(function (e) {
    $('#thx').modal('show');
    return false;
  });
  //upload images
  $(function () {
    var imagesPreview = function (input, placeToInsertImagePreview) {
      $('.gallery').empty();
      if (input.files) {
        var filesAmount = input.files.length;
        for (i = 0; i < filesAmount; i++) {
          var reader = new FileReader();
          reader.onload = function (event) {
            var image = document.createElement('img');
            image.setAttribute('src', event.target.result);
            var body = document.createElement('div');
            var button = document.createElement('button');
            var input = document.createElement('input');
            input.setAttribute('name', 'images[]');
            input.setAttribute('type', 'hidden');
            button.setAttribute('class', 'close');
            button.innerHTML = '<i class="fa fa-times-circle"></i>';
            body.appendChild(image);
            body.appendChild(input);
            body.appendChild(button);
            body.setAttribute('class', 'images');
            console.log(body);
            $('.gallery').append(body);
            ($($.parseHTML(body)).appendTo(placeToInsertImagePreview));
          }
          reader.readAsDataURL(input.files[i]);
        }
      }
    };
    $(document).on('click', '.images .close', function (event) {
      event.preventDefault();
      $(this).parent().remove();
    });
    $('#gallery-photo-add').on('change', function () {
      imagesPreview(this, 'div.gallery');
    });
  });

  $(function () {
    var imagesPreview = function (input, placeToInsertImagePreview) {
      $('.gallery1').empty();
      if (input.files) {
        var filesAmount = input.files.length;
        for (i = 0; i < filesAmount; i++) {
          var reader = new FileReader();
          reader.onload = function (event) {
            var image = document.createElement('img');
            image.setAttribute('src', event.target.result);
            var body = document.createElement('div');
            var button = document.createElement('button');
            var input = document.createElement('input');
            input.setAttribute('name', 'images[]');
            input.setAttribute('type', 'hidden');
            button.setAttribute('class', 'close');
            button.innerHTML = '<i class="fa fa-times-circle"></i>';
            body.appendChild(image);
            body.appendChild(input);
            body.appendChild(button);
            body.setAttribute('class', 'images');
            console.log(body);
            $('.gallery1').append(body);
            ($($.parseHTML(body)).appendTo(placeToInsertImagePreview));
          }
          reader.readAsDataURL(input.files[i]);
        }
      }
    };
    $(document).on('click', '.images .close', function (event) {
      event.preventDefault();
      $(this).parent().remove();
    });
    $('#gallery-photo-add1').on('change', function () {
      imagesPreview(this, 'div.gallery1');
    });
  });
  //collapes
  $('.accordion button').click(function () {
    $(this).parent().find('i').toggleClass('rotat-180');
  });

  //del-address
  $('.remove-address').click(function () {
    event.preventDefault();
    $(this).parents('.remove-block').remove();
  });

  //del-noti
  $('.del-noti').click(function () {
    $(this).parent().remove();
  });

  //del-cartitem
  $('.del-cartitem').click(function () {
    $(this).parent().remove();
  });
  //mobile na 
  $('.side-nav-open').click(function () {
    $('.side-nav').toggleClass('open-side');
    $('.over-side').toggleClass('open-over');
    // $('.content').toggleClass('body-hidden')
  });
  $('.page-content').click(function () {
    $('.side-nav').removeClass('open-side');
    $('.over-side').removeClass('open-over');
  });
  $('.over-side').click(function () {
    $('.side-nav').removeClass('open-side');
    $(this).removeClass('open-over');
  });

  $(".overlay").click(function () {
    $("nav.site-nav").removeClass('nav-open');
    $(this).fadeOut();
    $(".mob-collaps span:first-child").removeClass('rotate');
    $(".mob-collaps span:nth-child(2)").removeClass('none');
    $(".mob-collaps span:nth-child(3)").removeClass('rotate2');
  });
  $('.add-wishlist , .add-like').click(function () {
    event.preventDefault();
    $(this).find('i').toggleClass('fas red');
  });
});

// Start Zoom
$('.zoom-image').each(function(){
  var originalImagePath = $(this).find('img').data('original-image');
  $(this).zoom({
    url: originalImagePath,
    magnify: 2
  });
});


//map-div
$('.open-map').click(function () {
  $('.map-div').fadeIn();
});
$('.close-map').click(function () {
  $('.map-div').fadeOut();
});

//loader
$(window).on('load', function () {
  $("#preloader_6").fadeOut(2000, function () {
      $("body").fadeIn(1000)
  })
})
// sliders
var mySwiper = new Swiper('.slider .swiper-container', {
  // Optional parameters
  loop: true,
  // autoplay: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
//pro-slider
var mySwiper = new Swiper('.pro-slider .swiper-container', {
  // Optional parameters
  slidesPerView: 5,
  // centeredSlides: true,
  spaceBetween: 10,
  loop: true,
  loopedSlides: 50,
  // autoplay: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    1024: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    786: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    689: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    425: {
      slidesPerView: 2,
      spaceBetween: 10,
    }
  }
});
//product-slider
var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 5,
  loop: true,
  freeMode: true,
  loopedSlides: 5, //looped slides should be the same
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  loop: true,
  loopedSlides: 5, //looped slides should be the same
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs,
  },
});

//number

var defaultValue = parseInt($('.number input').val()),
  $plus = $('.number .plus'),
  $minus = $('.number .minus');

$plus.click(function () {
  defaultValue += 1;
  $(this).next().val(defaultValue);
});

$minus.click(function () {
  defaultValue -= 1;
  if (defaultValue <= 0) {
    defaultValue = 0;
  }
  $(this).prev().val(defaultValue);
});

// // slider call

//price range
function collision($div1, $div2) {
  var x1 = $div1.offset().left;
  var w1 = 40;
  var r1 = x1 + w1;
  var x2 = $div2.offset().left;
  var w2 = 40;
  var r2 = x2 + w2;

  if (r1 < x2 || x1 > r2)
    return false;
  return true;
}
// Fetch Url value 
var getQueryString = function (parameter) {
  var href = window.location.href;
  var reg = new RegExp('[?&]' + parameter + '=([^&#]*)', 'i');
  var string = reg.exec(href);
  return string ? string[1] : null;
};
// End url 

$('#slider').slider({
  range: true,
  min: 1000,
  max: 10000,
  step: 1,
  values: [getQueryString('minval') ? getQueryString('minval') : 3000, getQueryString('maxval') ? getQueryString('maxval') : 6000],

  slide: function (event, ui) {

    $('.ui-slider-handle:eq(0) .price-range-min').html('$' + ui.values[0]);
    $('.ui-slider-handle:eq(1) .price-range-max').html('$' + ui.values[1]);
    $('.price-range-both').html('<i>$' + ui.values[0] + ' - </i>$' + ui.values[1]);

    // get values of min and max
    $("#minval").val(ui.values[0]);
    $("#maxval").val(ui.values[1]);

    if (ui.values[0] == ui.values[1]) {
      $('.price-range-both i').css('display', 'none');
    } else {
      $('.price-range-both i').css('display', 'inline');
    }

    if (collision($('.price-range-min'), $('.price-range-max')) == true) {
      $('.price-range-min, .price-range-max').css('opacity', '0');
      $('.price-range-both').css('display', 'block');
    } else {
      $('.price-range-min, .price-range-max').css('opacity', '1');
      $('.price-range-both').css('display', 'none');
    }

  }
});

$('.ui-slider-range').append('<span class="price-range-both value"><i>$' + $('#slider').slider('values', 0) + ' - </i>' + $('#slider').slider('values', 1) + '</span>');

$('.ui-slider-handle:eq(0)').append('<span class="price-range-min value">$' + $('#slider').slider('values', 0) + '</span>');

$('.ui-slider-handle:eq(1)').append('<span class="price-range-max value">$' + $('#slider').slider('values', 1) + '</span>');
// End url 
