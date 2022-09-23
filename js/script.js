let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
};


document.querySelector('#info-btn').onclick = () =>{
   contactInfo.classList.add('active');
}

document.querySelector('#close-contact-info').onclick = () =>{
   contactInfo.classList.remove('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
   contactInfo.classList.remove('active');
}




/*amenities*/

document.addEventListener("DOMContentLoaded", function () {
    const mySwiper2_wrapper = document.querySelector(".mySwiper2 .swiper-wrapper"),
    mySwiper_container = document.querySelector(".mySwiper"),
          clone = mySwiper2_wrapper.cloneNode(true);
    mySwiper_container.appendChild(clone);

    const swiper = new Swiper(".mySwiper", {
    loop: false,
    spaceBetween: 8,
    slidesPerView: mySwiper2_wrapper.childNodes.length,
    freeMode: true,
    watchSlidesProgress: true
    });
    const swiper2 = new Swiper(".mySwiper2", {
    autoplay: {
        delay: 1000,
        disableOnInteraction: false
    },
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    loopedSlides: mySwiper2_wrapper.childNodes.length,
    spaceBetween: 8,
    speed: 800,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    thumbs: {
        swiper: swiper
    }
    });
},false);



var swiper = new Swiper(".blogs-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".logo-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      450: {
         slidesPerView: 2,
       },
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1000: {
        slidesPerView: 5,
      },
   },
});


  $(document).ready(function() {
    $('.counter').counterUp({
      delay: 10,
      time: 1200
    });
  });



var swiper = new Swiper(".reviews-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});
