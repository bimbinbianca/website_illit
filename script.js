const swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
      640: {
          slidesPerView: 1,
          spaceBetween: 10,
      },
      768: {
          slidesPerView: 2,
          spaceBetween: 20,
      },
      1024: {
          slidesPerView: 3,
          spaceBetween: 30,
      },
  },
});
  