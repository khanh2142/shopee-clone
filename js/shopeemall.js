const smpPrev = document.querySelector('.smp-prev');
const smpNext = document.querySelector('.smp-next');
const smpList = document.querySelectorAll('.sm-list');

const smpImageList = [
    "https://cf.shopee.vn/file/6bb0d452358db2c4c147cf0206dc4344_xhdpi",
    "https://cf.shopee.vn/file/6b1825bee369e8a39fbc2172c9aead32_xhdpi",
    "https://cf.shopee.vn/file/ea507ee06252bb4c0d90eed99c1db288_xhdpi",
    "https://cf.shopee.vn/file/4ff1582c2eb11423ce86999a34cc5887_xhdpi",
    "https://cf.shopee.vn/file/dca18c9ffef48a01906c1fe30e4dabe5_xhdpi",
    "https://cf.shopee.vn/file/27aca02931d04b5f0317260d76c27584_xhdpi",
    "https://cf.shopee.vn/file/1726986088fa8c54cfc47343112a3c5f_xhdpi",
    "https://cf.shopee.vn/file/65abda51c5c05651988e23fe5f3ca4ea_xhdpi",
    "https://cf.shopee.vn/file/915cd0feb271e1d9bb93eec823ac5ff0_xhdpi",
    "https://cf.shopee.vn/file/17691b1fcb845eae41c889093884a7cf_xhdpi",
    "https://cf.shopee.vn/file/24273b420d9354abf90aacf53b063ffa_xhdpi",
    "https://cf.shopee.vn/file/dfc76413fb2dc7ff207271d3ca6eb70b_xhdpi",
    "https://cf.shopee.vn/file/a04fa1753f820475db4f018659d4bab4_xhdpi",
    "https://cf.shopee.vn/file/858a41259597d11596f9908679363d4e_xhdpi",
    "https://cf.shopee.vn/file/6ffbdbde101679bac36e1fe2082e0037_xhdpi",
    "https://cf.shopee.vn/file/3a598056b48fe4f4211442e404e58f94_xhdpi",
    "https://cf.shopee.vn/file/93255b05c68d1024a8e4dab100efdcbd_xhdpi",
    "https://cf.shopee.vn/file/ad70ba5e178a7e05ed8a6daa1c5781d9_xhdpi",
    "https://cf.shopee.vn/file/7d5ddd21cc10e484de60e12d6c58734e_xhdpi",
    "https://cf.shopee.vn/file/cd87b35a9bc32ddf59024a8339aef4a6_xhdpi",
    "https://cf.shopee.vn/file/5bb493c43083f7a10b84e58c525f97f4_xhdpi",
    "https://cf.shopee.vn/file/624bcd9bddc58d8577d0a46b0a04cfdd_xhdpi",
    "https://cf.shopee.vn/file/e41adc7741d9abb45876ff2b838cc99b_xhdpi"
];

const smpContentList = [
    "Mua là có quà",
    "Ưu đãi đến 34%",
    "Deli giảm tới 50%",
    "Mua 1 tặng 1",
    "Mua là có quà",
    "Độc quyền quà khủng",
    "Mua 2 tính 1",
    "Deal sốc 9k",
    "Mát lạnh dài lâu",
    "Quà tặng cực hot",
    "Giảm đến 40%",
    "Ưu đãi tới 40%",
    "Mua 1 tặng 1",
    "Giảm đến 50%",
    "Mua là có quà",
    "Ưu đãi ngập tràn",
    "Siêu deal giảm cực đỉnh",
    "Mua Milo - săn quà đỉnh",
    "Giảm đến 50%",
    "Ưu đãi 50%",
    "Mua 1 tặng 1",
    "Mua 1 tặng 1",
    "Da khỏe sạch mụn"
];

const smpImage = document.querySelectorAll('.sm-image');
const smpContent = document.querySelectorAll('.sm-content');

smpImage.forEach((item,index) => {
    item.style.backgroundImage = "url(" + smpImageList[index] +")";
});

smpContent.forEach((item,index) => {
    item.textContent = smpContentList[index];
});

smpNext.addEventListener('click', () => {


    smpList.forEach(item => {
        if (smpList[0].clientWidth <= 412){
            item.scrollBy(150,0);
        }
        else item.scrollBy(smpList[0].clientWidth,0);
    });


    smpPrev.style.display = "block";
});

smpPrev.addEventListener('click', () => {
    smpList.forEach(item => {
        if (smpList[0].clientWidth <= 412){
            item.scrollBy(-150,0);
        }
        else item.scrollBy(-smpList[0].clientWidth,0);
    });


    smpNext.style.display = "block";

});


smpList.forEach(item => {
    item.addEventListener('scroll',() => {
    if ((item.scrollLeft) == 0){
        smpPrev.style.display = "none";
        smpNext.style.display = "block";
    }

    if ((item.scrollLeft) > 0){
            smpPrev.style.display = "block";
    }
    
    if ((Math.round(item.scrollLeft)) == item.scrollWidth-item.clientWidth){
        smpNext.style.display = "none";
    }
    });
});