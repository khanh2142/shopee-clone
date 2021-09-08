var slideIndex = 0;
const slides = document.querySelectorAll('.mySlides');
const dots = document.querySelectorAll('.dot');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

const smSlides = document.querySelectorAll('.sm-slide');
const smDots = document.querySelectorAll('.sm-dot');
const smNext = document.querySelector('.sm-next');
const smPrev = document.querySelector('.sm-prev');
let smIndex = 0;



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


/* ---------------------------------- */

smNext.addEventListener('click',() => {

  if (smIndex == smSlides.length-1) smIndex = 0;else smIndex += 1;

  smSlides.forEach(slide => {
    slide.classList.remove('active');
  });

  smSlides[smIndex].classList.add('active');

  smDots.forEach(dot => {
    dot.classList.remove('active');
  });

  smDots[smIndex].classList.add('active');

});


smPrev.addEventListener('click',() => {


  (smIndex == 0) ? smIndex = smSlides.length-1 : --smIndex;

  smSlides.forEach(slide => {
    slide.classList.remove('active');
  });

  smSlides[smIndex].classList.add('active');

  smDots.forEach(dot => {
    dot.classList.remove('active');
  });

  smDots[smIndex].classList.add('active');

});

smDots.forEach((dot,index )=> {
  dot.addEventListener('click',() => {
    smIndex = index;

    smSlides.forEach(slide => {
      slide.classList.remove('active');
    });
  
    smSlides[smIndex].classList.add('active');
  
    smDots.forEach(dot => {
      dot.classList.remove('active');
    });
  
    smDots[smIndex].classList.add('active');
  });
});


function smSlideshow() {

  smSlides.forEach(slide => {
    slide.classList.remove('active');
  });

  smSlides[smIndex].classList.add('active');

  smDots.forEach(dot => {
    dot.classList.remove('active');
  });

  smDots[smIndex].classList.add('active');

  smIndex++;
  if (smIndex >= smSlides.length) smIndex = 0; 

  setTimeout(smSlideshow,2000);
  
};

smSlideshow();
