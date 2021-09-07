const fsContainer = document.querySelector('.flashsale-container');
const fsItems = document.querySelectorAll('.flashsale-item');
const fsPrices = document.querySelectorAll('.flashsale-price');
const fsBars = document.querySelectorAll('.flashsale-bar');
const fsDiscounts = document.querySelectorAll('.flashsale-discout');
const fsQuanities = document.querySelectorAll('.flashsale-quantity');
const fsProducts = document.querySelectorAll('.flashsale-product');
const fsNext = document.querySelector('.flashsale-next');
const fsPrev = document.querySelector('.flashsale-prev');

const fsImages = [
    "https://cf.shopee.vn/file/194646e5b88eb909e75478715291aa79_tn",
    "https://cf.shopee.vn/file/f1bf94e0af73b6cd53d27906c9ee2c57_tn",
    "https://cf.shopee.vn/file/b733e38e977ec5e9489adca4fcfc37de_tn",
    "https://cf.shopee.vn/file/9962ddf9011581b718c431cb961b42a3_tn",
    "https://cf.shopee.vn/file/df948bcc03c207e240b9c17b25f53f93_tn",
    "https://cf.shopee.vn/file/70f3f15e7290a4273e4f3082f1525ee5_tn",
    "https://cf.shopee.vn/file/5619fbe127be2626c3404aca6e2d4cda_tn",
    "https://cf.shopee.vn/file/9752517cc047347c059932602514906d_tn",
    "https://cf.shopee.vn/file/2cf3cb1609b1e0dc4d33c3b892acafa8_tn",
    "https://cf.shopee.vn/file/33c32ae10106958d2544ca90a283045a_tn"
]

function refreshFlashSale(){
    fsPrices.forEach(value => {
        value.textContent = "₫" + numberWithCommas(random(1,500000));
    });
    
    fsBars.forEach(value => {
        value.style.width = random(1,99) + "%";
    });
    
    fsDiscounts.forEach(value => {
        value.children[0].textContent = random(20,99) + "%";
    });
    
    fsQuanities.forEach(value => {
        value.children[0].textContent = "đã bán " + random(1,1000);
    });
    
    fsProducts.forEach((product,index) => {
        product.style.backgroundImage = "url(" + fsImages[index] + ")";
    });
}

fsNext.addEventListener('click', () => {

    fsContainer.scrollBy(100,0);

    fsPrev.style.display = "block";
});

fsPrev.addEventListener('click', () => {

    fsContainer.scrollBy(-100,0);

    fsNext.style.display = "block";

});


fsContainer.addEventListener('scroll',() => {

    if ((fsContainer.scrollLeft) == 0){

        fsPrev.style.display = "none";
        
        fsNext.style.display = "block";
    }

    if ((fsContainer.scrollLeft) > 0){
            fsPrev.style.display = "block";
    }
    
    if (Math.round(fsContainer.scrollLeft) == fsContainer.scrollWidth - fsContainer.clientWidth){
        fsNext.style.display = "none";
    }

});

refreshFlashSale();