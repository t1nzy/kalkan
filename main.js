$(function() {
  $('.under-header__item-wa').click(function() {
    $('.popup-whatsapp').removeClass("none");
    $('.popup-whatsapp').addClass("active");
  });
});
$(function() {
  $('.popup-whatsapp__closebtn').click(function() {
    $('.popup-whatsapp').removeClass("active");
    $('.popup-whatsapp').addClass("none");
  });
});
$(function() {
  $('.catalog__box-link').click(function() {
    $('.catalog-popup').removeClass("catalog-none");
    $('.catalog-popup').addClass("catalog-active");
  });
  return false;
});
$(function() {

  $('.catalog__close-btn').click(function() {
    $('.catalog-popup').removeClass("catalog-active");
    $('.catalog-popup').addClass("catalog-none");
  });
  return false;
});

var mySwiper = new Swiper('.solutions-container', {
    // Optional parameters
    loop: true,
    slidesPerView: 2,
    spaceBetween: 40,
    slidesPerGroup: 2,
    // If we need pagination


      pagination: {
        el: '.solutions-pagination',
      },
    // Navigation arrows
    navigation: {
      nextEl: '.solutions-button-next',
      prevEl: '.solutions-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        slidesPerGroup: 1,
    
      },
      1450: {    
      
        slidesPerView: 2,
        spaceBetween: 40,
        slidesPerGroup: 2,
      },
      }
    // And if we need scrollbar
  })
var mySwiper = new Swiper('.news-container', {
    // Optional parameters
    loop: true,
    slidesPerView: 2,
    spaceBetween: 40,

    // If we need pagination
    pagination: {
      el: '.news-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.news-button-next',
      prevEl: '.news-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        slidesPerGroup: 1,
      },
      1450: {
        slidesPerView: 2,
        spaceBetween: 40,
        slidesPerGroup: 2,
      },
      }
    // And if we need scrollbar
  })
  var mySwiper = new Swiper('.partners-container', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween:80,
    loopFillGroupWithBlank: true,
    // If we need pagination
  
    // Navigation arrows
    navigation: {
      nextEl: '.partners-button-next',
      prevEl: '.partners-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        slidesPerGroup: 1,
      },
      1150: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 2,
      },
      1680: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      }
    // And if we need scrollbar
  })


  (function() {

    let hamburger = {
      nav: document.querySelector('#nav'),
      navToggle: document.querySelector('.nav-toggle'),
  
      initialize() {
        this.navToggle.addEventListener('click', () => { this.toggle(); });
      },
  
      toggle() {
        this.navToggle.classList.toggle('expanded');
        this.nav.classList.toggle('expanded');
      },
    };
  
    hamburger.initialize();
  
  }());
