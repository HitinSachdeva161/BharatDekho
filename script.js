let menuButton = document.getElementById('nav-icon');
let menu = document.getElementById('menus-id');
let search = document.getElementById('search-id');
menuButton.addEventListener("click",()=>{
    menu.classList.toggle("show");
  search.classList.toggle("show");
});
window.addEventListener("resize", ()=>{
  if (window.innerWidth > 768) {
    menu.classList.remove("show");
    search.classList.remove("show");
  }
});

// Below content is learnt from Youtube
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button--right');
const prevButton = document.querySelector('.carousel-button--left');
let currentIndex = 0;

const updateSlidePosition = () => {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
};

nextButton.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateSlidePosition();
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlidePosition();
    }
});


window.onscroll = function() {navscroll()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function navscroll() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}