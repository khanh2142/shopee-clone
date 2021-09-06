var slideIndex = 0;
const slides = document.querySelectorAll('.mySlides');
const dots = document.querySelectorAll('.dot');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');



next.addEventListener('click',() => {

  if (slideIndex == slides.length-1) slideIndex = 0;else slideIndex += 1;

  slides.forEach(slide => {
    slide.classList.remove('active');
  });

  slides[slideIndex].classList.add('active');

  dots.forEach(dot => {
    dot.classList.remove('active');
  });

  dots[slideIndex].classList.add('active');

});


prev.addEventListener('click',() => {

  console.log(slideIndex);

  (slideIndex == 0) ? slideIndex = slides.length-1 : --slideIndex;

  slides.forEach(slide => {
    slide.classList.remove('active');
  });

  slides[slideIndex].classList.add('active');

  dots.forEach(dot => {
    dot.classList.remove('active');
  });

  dots[slideIndex].classList.add('active');

});

dots.forEach((dot,index )=> {
  dot.addEventListener('click',() => {
    slideIndex = index;

    slides.forEach(slide => {
      slide.classList.remove('active');
    });
  
    slides[slideIndex].classList.add('active');
  
    dots.forEach(dot => {
      dot.classList.remove('active');
    });
  
    dots[slideIndex].classList.add('active');
  });
});


function slideShow() {

  slides.forEach(slide => {
    slide.classList.remove('active');
  });

  slides[slideIndex].classList.add('active');

  dots.forEach(dot => {
    dot.classList.remove('active');
  });

  dots[slideIndex].classList.add('active');

  slideIndex++;
  if (slideIndex >= slides.length) slideIndex = 0; 

  setTimeout(slideShow,2000);
  
};

slideShow();


