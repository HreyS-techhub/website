//swiper.js content 

const swiper = new Swiper('.slide-content', {
    autoplay: {
      delay: 1300,
    },
    slidesPerView:2,
    spaceBetween:50,
    centerSlide:true,
    fade:true,
    loop: true,  
    loopFillGroupWithBlank:true,
    mousewheel:true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicButllets:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{
      0:{
        slidesPerView:1,
      },
      520:{
        slidesPerView:1,
      },
      950:{
        slidesPerView:2,
      },
    },
  });


  const swiper2 = new Swiper('.slide-content-2', {
    autoplay: {
      delay: 1300,
    },
    slidesPerView:4,
    spaceBetween:50,
    centerSlide:true,
    fade:true,
    loop: true,  
    loopFillGroupWithBlank:true,
    mousewheel:true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicButllets:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{
      0:{
        slidesPerView:1,
      },
      520:{
        slidesPerView:2,
      },
      950:{
        slidesPerView:3,
      },
    },
  });