const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menuList = $('.menu-list');
const userMenu = $('.user-menu');
const closeMenu = $('.close-menu');
const openLoginMobile = $('#login-btn');
const openSigninMobile = $('#signin-btn');

openLoginMobile.addEventListener('click', () => {
    window.location = 'login.html';
});

openSigninMobile.addEventListener('click', () => {
    window.location = 'login.html';
});


menuList.addEventListener('click', () => {
    userMenu.classList.toggle('active');
});

closeMenu.addEventListener('click', () => {
    userMenu.classList.toggle('active');
});


