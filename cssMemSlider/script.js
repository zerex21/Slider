const slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot'),
      texts = document.querySelectorAll('.text'),
      dotsWrapper = document.querySelectorAll('.dot-wrapper');

let index = 0;      


const activeSlide = n =>{
     for(slide of slides){
         slide.classList.remove('active');
     }
     slides[n].classList.add('active')
}  

const activeDot = n =>{
    for(dot of dots){
        dot.classList.remove('active');
    }
    dots[n].classList.add('active')
}   

const activeText = n =>{
    for(text of texts){
        text.classList.remove('active');
    }
    texts[n].classList.add('active')
}  