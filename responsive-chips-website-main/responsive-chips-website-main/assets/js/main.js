/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'); // Получаем элемент меню
const navToggle = document.getElementById('nav-toggle'); // Получаем элемент для открытия меню
const navClose = document.getElementById('nav-close'); // Получаем элемент для закрытия меню

// Открытие меню
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu'); // Добавляем класс для показа меню
    });
}

// Закрытие меню
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu'); // Удаляем класс для скрытия меню
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link'); // Получаем все ссылки меню

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    // При клике на каждую ссылку меню, удаляем класс show-menu
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction)); // Добавляем обработчик события для каждой ссылки

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header');
    // Добавляем класс, если прокрутка больше 50 пикселей
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header');
}
window.addEventListener('scroll', shadowHeader); // Добавляем обработчик события прокрутки

/*=============== SWIPER FAVORITES ===============*/ 
const swiperFavorites = new Swiper('.favorites__swiper', {
    loop: true, // Зацикливание слайдов
    grabCursor: true, // Курсор в виде руки
    slidesPerView: 'auto', // Автоматическое количество слайдов
    centeredSlides: 'auto', // Центрирование слайдов
});

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    // Добавляем класс show-scroll, если прокрутка больше 350 пикселей
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp); // Добавляем обработчик события прокрутки

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]'); // Получаем все секции с id

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        // Добавляем или удаляем класс active-link в зависимости от текущей прокрутки
        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }                                                    
    });
}
window.addEventListener('scroll', scrollActive); // Добавляем обработчик события прокрутки

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top', // Начало анимации сверху
    distance: '60px', // Дистанция анимации
    duration: 2500, // Длительность анимации
    delay: 300, // Задержка анимации
    reset: true, // Повтор анимации при прокрутке
});

// Определяем элементы для анимации и их параметры
sr.reveal(`.home__data, .favorites__container, .footer__container`);
sr.reveal(`.home__circle, .home__img`, {delay: 600, scale: .5});
sr.reveal(`.home__chips-1, .home__chips-2, .home__chips-3`, {delay: 1000, interval: 100});
sr.reveal(`.home__leaf`, {delay: 1200});
sr.reveal(`.home__tomato-1, .home__tomato-2`, {delay: 1400, interval: 100});
sr.reveal(`.care__img, .contact__img`, {origin: 'left'});
sr.reveal(`.care__list, .contact__data`, {origin: 'right'});
sr.reveal(`.banner__item, .products__card`, {interval: 100});
