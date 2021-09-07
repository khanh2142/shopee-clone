const nextProduct = document.querySelector('.sp-next');
const prevProduct = document.querySelector('.sp-prev');
const spContainer = document.querySelector('.sp-product');

nextProduct.addEventListener('click', () => {

    spContainer.scrollBy(100,0);


    prevProduct.style.display = "block";
});

prevProduct.addEventListener('click', () => {
    spContainer.scrollBy(-100,0);


    nextProduct.style.display = "block";

});


spContainer.addEventListener('scroll',() => {

    if ((spContainer.scrollLeft) == 0){
        prevProduct.style.display = "none";
        nextProduct.style.display = "block";
    }

    if ((spContainer.scrollLeft) > 0){
            prevProduct.style.display = "block";
    }
    
    if ((spContainer.scrollLeft) == spContainer.scrollWidth-spContainer.clientWidth){
        nextProduct.style.display = "none";
    }
});


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