/*Interact with the hiring team*/
alert('Enock Balthazar email: edcbal17@gmail.com or esciencepi16@gmail.com')
prompt('Do you know something about JavaScript?')

/*Not possible without JavaScript*/
let favorite = 1;
carousel(favorite);


function movement(n) {
  carousel(favorite += n);
}
/*carousel is a slideshow of some content in  circles*/
function TheActual(n) {
  carousel(favorite = n);
}

function carousel(n) {
  let y; let slides = document.getElementsByClassName("carousel");let circles = document.getElementsByClassName("points");if (n > slides.length) {favorite = 1}if (n < 1) {favorite = slides.length} for (y = 0; y < slides.length; y++) {slides[y].style.display = "none";
  }
  for (y = 0; y < circles.length; y++) {circles[y].className = circles[y].className.replace(" enable", "");
  }
  slides[favorite-1].style.display = "block";circles[favorite-1].className += " enable";
} 
/*Not possible without JavaScript*/