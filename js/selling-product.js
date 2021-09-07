const nextProduct = document.querySelector('.sp-next');
const prevProduct = document.querySelector('.sp-prev');
const spContainer = document.querySelector('.sp-product');

nextProduct.addEventListener('click', () => {

    spContainer.scrollBy(100,0);

    scrollSp();

    prevProduct.style.display = "block";
});

prevProduct.addEventListener('click', () => {
    spContainer.scrollBy(-100,0);

    scrollSp();

    nextProduct.style.display = "block";

});


function scrollSp() {

    if (Math.floor(spContainer.scrollLeft / 10) >= 80){
        nextProduct.style.display = "none";
    }

    if (Math.floor(spContainer.scrollLeft / 10) <= 16){
        prevProduct.style.display = "none";
    }
}

function random(a,b){
    return Math.floor(Math.random() * (a-b+1)) + b;
}

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1.$2");
    return x;
}

const spPrices = document.querySelectorAll('.sp-item-price');

spPrices.forEach(price => {
    price.textContent = '₫' + numberWithCommas(random(100000,1000000));
});