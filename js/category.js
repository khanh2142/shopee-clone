const categoryImages = [
    "https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn",
    "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
    "https://cf.shopee.vn/file/978b9e4cb61c611aaaf58664fae133c5_tn",
    "https://cf.shopee.vn/file/c3f3edfaa9f6dafc4825b77d8449999d_tn",
    "https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn",
    "https://cf.shopee.vn/file/86c294aae72ca1db5f541790f7796260_tn",
    "https://cf.shopee.vn/file/74ca517e1fa74dc4d974e5d03c3139de_tn",
    "https://cf.shopee.vn/file/7abfbfee3c4844652b4a8245e473d857_tn",
    "https://cf.shopee.vn/file/6cb7e633f8b63757463b676bd19a50e4_tn",
    "https://cf.shopee.vn/file/3fb459e3449905545701b418e8220334_tn",
    "https://cf.shopee.vn/file/18fd9d878ad946db2f1bf4e33760c86f_tn",
    "https://cf.shopee.vn/file/ce8f8abc726cafff671d0e5311caa684_tn",
    "https://cf.shopee.vn/file/cdf21b1bf4bfff257efe29054ecea1ec_tn",
    "https://cf.shopee.vn/file/75ea42f9eca124e9cb3cde744c060e4d_tn",
    "https://cf.shopee.vn/file/099edde1ab31df35bc255912bab54a5e_tn",
    "https://cf.shopee.vn/file/24b194a695ea59d384768b7b471d563f_tn",
    "https://cf.shopee.vn/file/c765998fda99b2be9eb6e348df29af28_tn",
    "https://cf.shopee.vn/file/bf87b50b463f646bb7fb8a1a606d9ed2_tn",
    "https://cf.shopee.vn/file/48630b7c76a7b62bc070c9e227097847_tn",
    "https://cf.shopee.vn/file/fa6ada2555e8e51f369718bbc92ccc52_tn",
    "https://cf.shopee.vn/file/8e71245b9659ea72c1b4e737be5cf42e_tn",
    "https://cf.shopee.vn/file/c432168ee788f903f1ea024487f2c889_tn",
    "https://cf.shopee.vn/file/36013311815c55d303b0e6c62d6a8139_tn",
    "https://cf.shopee.vn/file/4540f87aa3cbe99db739f9e8dd2cdaf0_tn",
    "https://cf.shopee.vn/file/cd8e0d2e6c14c4904058ae20821d0763_tn",
    "https://cf.shopee.vn/file/b0f78c3136d2d78d49af71dd1c3f38c1_tn"

]

const categoryScroll = document.querySelectorAll('.category-list');
const categoryList = document.querySelectorAll('.category-item');

categoryList.forEach((value,index) => {
    value.children[0].src = categoryImages[index];
});

const categoryPrev = document.querySelector('.category-prev');
const categoryNext = document.querySelector('.category-next');


categoryNext.addEventListener('click', () => {

    categoryScroll.forEach(item => {
        item.scrollBy(150,0);
    });


    categoryPrev.style.display = "block";
});

categoryPrev.addEventListener('click', () => {
    categoryScroll.forEach(item => {
        item.scrollBy(-150,0);
    });


    categoryNext.style.display = "block";

});


categoryScroll.forEach(item => {
    item.addEventListener('scroll',() => {
    if ((item.scrollLeft) == 0){
        categoryPrev.style.display = "none";
        categoryNext.style.display = "block";
    }

    if ((item.scrollLeft) > 0){
            categoryPrev.style.display = "block";
    }
    
    if ((Math.round(item.scrollLeft)) == item.scrollWidth-item.clientWidth){
        categoryNext.style.display = "none";
    }
    });
});