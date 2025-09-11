const openSearchBtn = document.getElementById('openSearch');
const form = document.querySelector('.header__form');

openSearchBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    form.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!form.contains(e.target) && !openSearchBtn.contains(e.target)) {
        form.classList.remove('active');
    }
});

/////////

const swiper = new Swiper('.swiper', {
    // effect: 'cube',
    cubeEffect: {
        shadow: false,
        slideShadows: false,
    },
    slidesPerView: 1,
    speed: 1100,
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
