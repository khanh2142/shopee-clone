const fsItems = document.querySelectorAll('.flashsale-item');
const fsPrices = document.querySelectorAll('.flashsale-price');
const fsBars = document.querySelectorAll('.flashsale-bar');
const fsDiscounts = document.querySelectorAll('.flashsale-discout');
const fsQuanities = document.querySelectorAll('.flashsale-quantity');

fsPrices.forEach(value => {
    value.textContent = "₫" + numberWithCommas(random(1,500000));
});

fsBars.forEach(value => {
    value.style.width = random(1,99) + "%";
});

fsDiscounts.forEach(value => {
    value.children[0].textContent = random(1,99) + "%";
    console.log(value.children);
});

fsQuanities.forEach(value => {
    value.children[0].textContent = "đã bán " + random(1,1000);
});