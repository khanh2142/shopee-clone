const attractiveImgs = [
    "https://cf.shopee.vn/file/b3535d7e56c58c4ebe9a87672d38cc5e_xhdpi",
    "https://cf.shopee.vn/file/9da9a3acb5520d601f86a90434f455a5_xhdpi",
    "https://cf.shopee.vn/file/0c09ab833bc29cb260e9b14794c56977_xhdpi",
    "https://cf.shopee.vn/file/c7decf2ed8cf3b8f03e8595a808bae03_xhdpi",
    "https://cf.shopee.vn/file/6a574d8298eed44c1062a5f1408e4c2b_xhdpi",
    "https://cf.shopee.vn/file/765ca66457ec08802f74c529f71a99b7_xhdpi",
    "https://cf.shopee.vn/file/a08ab28962514a626195ef0415411585_xhdpi",
    "https://cf.shopee.vn/file/0a3e3aa16b083d6b7e2c25a8f2c16731_xhdpi",
    "https://cf.shopee.vn/file/4e32311e7d872547962d1867d39c9027_xhdpi",
    "https://cf.shopee.vn/file/53d059b1f2592c05b8df8ae835950a2b_xhdpi"
]

const arrativeItems = document.querySelectorAll('.attractive-img');

arrativeItems.forEach((item , index )=> {
    item.style.backgroundImage = "url(" + attractiveImgs[index] +")";
});