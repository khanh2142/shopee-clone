const fsContainer = document.querySelector('.flashsale-container');
const fsItems = document.querySelectorAll('.flashsale-item');
const fsPrices = document.querySelectorAll('.flashsale-price');
const fsBars = document.querySelectorAll('.flashsale-bar');
const fsDiscounts = document.querySelectorAll('.flashsale-discout');
const fsQuanities = document.querySelectorAll('.flashsale-quantity');
const fsNext = document.querySelector('.flashsale-next');
const fsPrev = document.querySelector('.flashsale-prev');

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


fsNext.addEventListener('click', () => {

    fsContainer.scrollBy(100,0);

    fsPrev.style.display = "block";
});

fsPrev.addEventListener('click', () => {

    fsContainer.scrollBy(-100,0);

    fsNext.style.display = "block";

});


fsContainer.addEventListener('scroll',() => {

    console.log(fsContainer.scrollLeft);

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