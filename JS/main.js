
const swiper2 = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 4, // обычно делаем 3, чтобы видеть соседние слайды
    centeredSlides: true, // активный слайд по центру
    slideToClickedSlide: true, // клик по слайду двигает его в центр
    watchSlidesProgress: true, // нужно для "opacity" 
    freeMode: true,
    watchSlidesProgress: true,
})

const swiper = new Swiper(".swiperText", {
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper2, // Связка через thumbs
    },
})

