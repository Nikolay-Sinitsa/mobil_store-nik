// slider

const swiper = new Swiper('.swiper', {
    effect: 'cube',
    slidesPerView: 1,
    spaceBetween: 2,
    speed: 600,


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