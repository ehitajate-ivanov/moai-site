
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

// quiz
const tabs = document.querySelectorAll(".quiz-tab")
// console.log(tabs);
const contents = document.querySelectorAll(".quiz-content")


tabs.forEach(tab => {
    tab.addEventListener("click", () =>{
        const target = tab.dataset.tab
        // console.log(target)

        tabs.forEach(elem => elem.classList.remove("active"))
        tab.classList.add("active")

        contents.forEach(tab => tab.classList.remove("active"))
        document.getElementById(target).classList.add("active")
    })
})
