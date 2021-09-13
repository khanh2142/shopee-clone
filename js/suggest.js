const suggestTitle = document.querySelectorAll('.suggest-title');
const suggestBar = document.querySelectorAll('.suggest-bar');
const suggestProduct = document.querySelector('.suggest-product');
const suggestBtn = document.querySelector('.suggest-add');


suggestTitle.forEach((item,index) => {
    item.addEventListener('click',(e) =>{
        suggestBar.forEach(bar => {
            bar.classList.remove('active');
        });

        suggestBar[index].classList.add('active');

        suggestProduct.innerHTML = "";

        addProduct();
        
    });
});

const suggestPromotion = [
    "https://cf.shopee.vn/file/d23804e5a1d134511626ca364f439e65", // Freeship Xtra
    "https://cf.shopee.vn/file/94d8e46e212bf2ab327c1255f0c8ba64", // Hoàn xu Xtra
    "https://cf.shopee.vn/file/1060ad975ab9c09fe684673974c1fca3", // Hàng hiệu -50%
    "https://cf.shopee.vn/file/2eca1ef73b3396fa477abc8f018a11d7" // Freeship Xtra + Hoàn xu Xtra
];

const suggestProducts = [

    {
        "image" : "https://cf.shopee.vn/file/cf385ab1a184b082276098a75ddac53a_tn",
        "name" : "[🔔 XẢ KHO] Giày 𝐍𝐢𝐤𝐞 trắng, 𝐍𝐢𝐤𝐞 AF1 Màu Trắng Bản Đẹp Tiêu Chuẩn Hot Hit 2021",
    },
    {
        "image" : "https://cf.shopee.vn/file/2dd923298ba0685a2288af4ae443c51c_tn",
        "name" : "Apple iPhone 12 Pro Max 128GB"
    },
    {
        "image" : "https://cf.shopee.vn/file/cf265a38a10c55e044e2af1a083d0bfd_tn",
        "name" : "Tai Nghe iPhone 7/8/X/11 - Kết Nối Bluetooth - Có Mic Đàm Thoại - BẢO HÀNH 12 THÁNG - Tương Thích Từ IP7 Đến 12 Pro Max"
    },
    {
        "image" : "https://cf.shopee.vn/file/a2b7dc89a74702eed0eb66931e5fa85b_tn",
        "name" : "Ốp lưng trong suốt nhám chống sốc thời trang cho IPHONE X XS MAX XR 9 8 7 6 6S PLUS 11 PRO MAX"
    },
    {
        "image" : "https://cf.shopee.vn/file/2d91551dc94a0844859c9c2158fa1a93_tn",
        "name" : "Tai nghe nhét tai U19 giắc cắm 3.5mm dành cho điện thoại Android/iOs 6s 6plus/Samsung"
    },
    {
        "image" : "https://cf.shopee.vn/file/90dbd37684a0e5824ecd52e2f4a6a904_tn",
        "name" : "Tai nghe nhét tai có dây U19 giắc cắm 3.5mm tích hợp micro chất lượng cao dành cho Android & iOS - Awifi Case L3-2"
    },
    {
        "image" : "https://cf.shopee.vn/file/a6d210137557070a7296e8054dbc7ca6_tn",
        "name" : "Tai Nghe Bluetooth Không Dây inpods i12 TWS | Vỏ ốp lưng Case Airpods 1/2 - Awifi Case"
    },
    {
        "image" : "https://cf.shopee.vn/file/25fecab4d0c9dbfc7dc590df1e732026_tn",
        "name" : "Ốp lưng iphone Color Mojito cạnh vuông BVC 5s/6/6plus/6s/6splus/7/7plus/8/8plus/x/xr/xs/11/12/pro/max/plus/promax/mini"
    },
    {
        "image" : "https://cf.shopee.vn/file/8c676c6b5e024eba8c252e14e8df8f85_tn",
        "name" : "Ốp lưng iphone Logo Táo Mạ Vàng 5/5s/6/6plus/6s/6splus/7/7plus/8/8plus/x/xr/xs/11/12/pro/max/plus/promax"
    }
];

const suggestSticker = [
    {
        "color" : "#f25220",
        "content" : "Yêu thích+"
    },
    {
        "color" : "#f25220",
        "content" : "Yêu thích+"
    },
    {
        "color" : "#d0011b",
        "content" : "Mall"
    }
];



function addProduct(){
    for (let i = 0;i<18;i++){

        let randomImage = random(0,8);
        let randomPromotion = random(0,3);
        let randomSticker = random(0,2);



        let item = document.createElement('a');
        item.className = "suggest-item";
        item.innerHTML = `<div class="suggest-image">
        <img src="${suggestProducts[randomImage].image}" alt="" class="product-img">
        <img class="suggest-promotion ${"disable" + random(0,1)}" src="${suggestPromotion[randomPromotion]}"></img>
         </div>
         <div class="suggest-content">
        <div class="suggest-description">
            <p>${suggestProducts[randomImage].name}</p>
            <div class="suggest-ticket ${"disable" + random(0,1)}">
                <svg class="suggest-svg-first">
                    <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" stroke="currentColor" fill="#f69113"> </path>
                </svg>
                <div class="suggest-ticket-price">
                    <span>Giảm ₫${random(1,100)}k</span>
                </div>
                <svg class="suggest-svg-last">
                    <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="rotate(180) translate(-3 -15)" stroke="currentColor" fill="#f69113"></path>
                </svg>
            </div>
        </div>
     
        <div class="suggest-info">
            <div class="suggest-price">
                <p>₫${numberWithCommas(random(10000,1000000))}</p>
            </div>
            <div class="suggest-sold">
                <p>Đã bán ${random(1,10) + "," + random(1,9)}k</p>
            </div>
        </div>
        <div class="suggest-hover">Tìm sản phẩm tương tự</div>
        <div class="suggest-discount ${"disable" + random(0,1)}">
            <p>${random(1,99)}%</p>
            <span>GIẢM</span>
        </div>
        <div class="suggest-sticker ${"disable" + random(0,1)}" style="background-color: ${suggestSticker[randomSticker].color};">
            <div class="suggest-sticker-content">${suggestSticker[randomSticker].content}</div>
        </div>
        <div class="suggest-support ${"disable" + random(0,1)}">
            <p>Tài trợ</p>
        </div>
         </div>`;
         suggestProduct.appendChild(item);

    }
 
};

addProduct();

suggestBtn.addEventListener('click',() => {
    addProduct();
});


