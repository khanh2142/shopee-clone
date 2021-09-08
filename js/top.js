const topPrev = document.querySelector('.top-prev');
const topNext = document.querySelector('.top-next');
const topContainer = document.querySelector('.top-container');

topNext.addEventListener('click', () => {

    topContainer.scrollBy(100,0);

   topPrev.style.display = "block";
});

topPrev.addEventListener('click', () => {

    topContainer.scrollBy(-100,0);

    topNext.style.display = "block";

});


topContainer.addEventListener('scroll',() => {
    

    if (topContainer.scrollLeft == 0){

       topPrev.style.display = "none";
        
        topNext.style.display = "block";
    }

    if ((topContainer.scrollLeft) > 0){
           topPrev.style.display = "block";
    }
    
    if (Math.round(topContainer.scrollLeft) == topContainer.scrollWidth - topContainer.clientWidth){
        topNext.style.display = "none";
    }

});