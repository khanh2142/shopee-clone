const suggestTitle = document.querySelectorAll('.suggest-title');
const suggestBar = document.querySelectorAll('.suggest-bar');

suggestTitle.forEach((item,index) => {
    item.addEventListener('click',(e) =>{
        suggestBar.forEach(bar => {
            bar.classList.remove('active');
        });
        suggestBar[index].classList.add('active');
    });
});