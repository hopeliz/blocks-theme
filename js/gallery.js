var slideIndex = 1;
showPhotos(slideIndex);

// Next/previous controls
function plusPhotos(n) {
  showPhotos(slideIndex += n);
}

// Thumbnail image controls

function currentPhoto(n) {
  showPhotos(slideIndex = n);
}

function showPhotos(n) {
  var i;
  var slides = document.getElementsByClassName("galleryphotos");
  
  //var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1; }
  
  if (n < 1) { slideIndex = slides.length; }
  
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  /*
   *for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  */
  
  slides[slideIndex-1].style.display = "block";
  //dots[slideIndex-1].className += " active";
}
