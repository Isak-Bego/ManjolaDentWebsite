let menu = document.getElementsByClassName("hidden-menu");
const container = document.getElementsByClassName("container");

function myFunction(x) {
  x.classList.toggle("change");
  if (x.className != "container") {
    disableScroll();
    menu[0].style.display = "block";
  } else {
    enableScroll();
    menu[0].style.display = "none";
  }
}

function scrolling(s, navbar) {
  let prevSection;
  let height;
  if (s === "klinika") window.scrollTo(0, 0);
  else if (s === "sherbime") {
    prevSection = document.getElementsByClassName("about-section");
    height = prevSection[0].clientHeight;
    window.scrollTo(0, height);
  } else if (s === "paciente") {
    prevSection = document.getElementsByClassName("about-section");
    height = prevSection[0].clientHeight;
    prevSection = document.getElementsByClassName("Sherbime");
    height += prevSection[0].clientHeight + 30;
    window.scrollTo(0, height);
  } else {
    prevSection = document.getElementsByTagName("body");
    height = prevSection[0].clientHeight;
    window.scrollTo(0, height);
  }

  if (!navbar) {
    myFunction(container[0]);
  }
}

function disableScroll() {
  const top = window.pageYOffset;
  const left = window.pageXOffset;

  window.onscroll = function () {
    window.scrollTo(left, top);
  };
}

function enableScroll() {
  window.onscroll = function () {};
}

function disableHiddenMenu() {
  if (window.innerWidth > 640) menu[0].style.display = "none";
  else if (container[0].className != "container")
    menu[0].style.display = "block";
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
