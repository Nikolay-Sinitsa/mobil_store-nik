// slider

const swiper = new Swiper('.swiper', {
    effect: 'cube',
    slidesPerView: 1,
    speed: 800,
    loop: true,


    pagination: {
        el: '.store__pagination',
        type: 'bullets',
        clickable: true,
    },



    navigation: {
        nextEl: '.store__next',
        prevEl: '.store__prev',
    },



});