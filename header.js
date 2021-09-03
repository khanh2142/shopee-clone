const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menuList = $('.menu-list');
const userMenu = $('.user-menu');
const closeMenu = $('.close-menu');

menuList.addEventListener('click', () => {
    userMenu.classList.toggle('active');
});

closeMenu.addEventListener('click', () => {
    userMenu.classList.toggle('active');
});