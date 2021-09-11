const suggestTitle = document.querySelectorAll('.suggest-title');
const suggestBar = document.querySelectorAll('.suggest-bar');

suggestTitle.forEach((item,index) => {
    item.addEventListener('click',(e) =>{
        suggestBar.forEach(bar => {
            bar.classList.remove('active');
        });
        suggestBar[index].classList.add('active');
    });
});

const suggestPromotion = [
    "https://cf.shopee.vn/file/d23804e5a1d134511626ca364f439e65", // Freeship Xtra
    "https://cf.shopee.vn/file/94d8e46e212bf2ab327c1255f0c8ba64", // Hoàn xu Xtra
    "https://cf.shopee.vn/file/1060ad975ab9c09fe684673974c1fca3", // Hàng hiệu -50%
    "https://cf.shopee.vn/file/2eca1ef73b3396fa477abc8f018a11d7" // Freeship Xtra + Hoàn xu Xtra
];