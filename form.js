const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const formLogin = $('#login-link');
const formSignin = $('#signin-link');
const form = $$('.form');
const title = $('.logo-content');

formLogin.addEventListener('click' , () => {
    form[0].style.display = "flex";
    title.textContent = "Đăng Nhập";
    form[1].style.display = "none";
});

formSignin.addEventListener('click', () => {
    form[0].style.display = "none";
    title.textContent = "Đăng Ký";
    form[1].style.display = "flex";
});