
const swiperThumbs = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 4, // обычно делаем 3, чтобы видеть соседние слайды
    centeredSlides: true, // активный слайд по центру
    slideToClickedSlide: true, // клик по слайду двигает его в центр
    watchSlidesProgress: true, // нужно для "opacity" 
    freeMode: true,
    watchSlidesProgress: true,
})

const swiperText = new Swiper(".swiperText", {
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // thumbs: {
    //     swiper: swiperThumbs, // Связка через thumbs
    // },
})

swiperText.controller.control = swiperThumbs;
swiperThumbs.controller.control = swiperText;

