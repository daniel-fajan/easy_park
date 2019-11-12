var slide = 1;

showSlides(slide);

function passarSlide(n) {
  showSlides(slide += n);
}

function bolinhaSlide(n) {
  showSlides(slide = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("bolinha");
  

  if (n > slides.length) {slide = 1}
  if (n < 1) {slide = slides.length};

  for (i = 0; i < slides.length; i++) 
  {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) 
  {
    dots[i].classList.remove("active");
  }

  slides[slide-1].style.display = "block";
  dots[slide-1].classList.add("active");
  
}

function tempoSlide()
{
  var t = 1;
  setInterval (function()
  {
    setTimeout(showSlides, 1000);
    t++;

    while (t > 4) {
      setTimeout(showSlides, 1000);
      t = 1;
    }
    slide = t;
  }, 3000);
}


