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
    slidesPerView: 1,
    loop: true,
    speed: 1600,
    effect: 'creative',
    creativeEffect: {
        prev: {
            translate: ['-120%', 0, -500],
            opacity: 0.4,
            scale: 0.8,
        },
        next: {
            translate: ['120%', 0, -500],
            opacity: 1,
            scale: 1,
        },
    },
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

