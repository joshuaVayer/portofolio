// Sidebar menu
let sidebar = document.getElementById('sidebarDiv');
let btnOpen = document.getElementById('openSidebar');
let btnClose = document.getElementById('closeSidebar');

const openSidebar = () => sidebar.classList.add('sidebar-display');
const closeSidebar = () => sidebar.classList.remove('sidebar-display');

btnOpen.addEventListener('click', openSidebar);
btnClose.addEventListener('click', closeSidebar);

//Gallery image
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("demo");
let captionText = document.getElementById("caption");

let slideIndex = 1;

showSlides(slideIndex);

const changeSlide = (n) => showSlides(slideIndex += n);
const currentSlide = (n) => showSlides(slideIndex = n);

prev.addEventListener('click', () => changeSlide(-1));
next.addEventListener('click', () => changeSlide(1));



function showSlides(n) {
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}