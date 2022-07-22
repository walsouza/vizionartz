var slideIndex = [1,1,1];
var slideId = ["mySlides1", "mySlides2", "mySlides3"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}

function openModal() {
            document.getElementById("myModal").style.display = "block";
          }

          function closeModal() {
            document.getElementById("myModal").style.display = "none";
          }

          var slideIndexmodal = 1;
          showSlidesmodal(slideIndexmodal);

          function plusSlidesmodal(n) {
            showSlidesmodal(slideIndexmodal += n);
          }

          function currentSlide(n) {
            showSlidesmodal(slideIndexmodal = n);
          }

          function showSlidesmodal(n) {
            var i;
            var slides = document.getElementsByClassName("mySlidesmodal");
            var dots = document.getElementsByClassName("demo");
            var captionText = document.getElementById("caption");
            if (n > slides.length) {slideIndexmodal = 1}
            if (n < 1) {slideIndexmodal = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndexmodal-1].style.display = "block";
            dots[slideIndexmodal-1].className += " active";
            captionText.innerHTML = dots[slideIndexmodal-1].alt;
          }