const trendPrev = document.querySelector('.trend-prev');
const trendNext= document.querySelector('.trend-next');
const trendScroll = document.querySelector('.trend-container');
const trendImage = document.querySelectorAll('.trend-image');
const trendContent = document.querySelectorAll('.trend-content');

const trendImageList = [
    "https://cf.shopee.vn/file/b7a4f323f485d3f095d1e1c7de8a9fb4",
    "https://cf.shopee.vn/file/9477f97eb71fab5708e9dfdc2864465e",
    "https://cf.shopee.vn/file/eee66edd9328631450d5d5769c4022ef",
    "https://cf.shopee.vn/file/8cbd5f00189ffbaf443da61c60cd4eff",
    "https://cf.shopee.vn/file/45afa271dcbbb68547d51a9f01b995be"
];

const trendTitle = [
    "sandal nữ",
    "sơmi nữ",
    "dép nam",
    "balo nữ",
    "croptop nữ"
];


trendImage.forEach((item,index) => {
    let randomIndex = random(0,trendImageList.length-1);
    item.src = trendImageList[randomIndex];
    trendContent[index].children[0].textContent = trendTitle[randomIndex];
    trendContent[index].children[1].textContent = random(1,999) + "k+ sản phẩm";
});

trendNext.addEventListener('click', () => {


    smpList.forEach(item => {
        trendScroll.scrollBy(100,0);
    });


    trendPrev.style.display = "block";
});

trendPrev.addEventListener('click', () => {

    trendScroll.scrollBy(-100,0);

    trendNext.style.display = "block";

});



trendScroll.addEventListener('scroll',() => {
    if ((trendScroll.scrollLeft) == 0){
        trendPrev.style.display = "none";
        trendNext.style.display = "block";
    }

    if ((trendScroll.scrollLeft) > 0){
            trendPrev.style.display = "block";
    }
    
    if ((Math.round(trendScroll.scrollLeft)) == trendScroll.scrollWidth-trendScroll.clientWidth){
        trendNext.style.display = "none";
    }
});