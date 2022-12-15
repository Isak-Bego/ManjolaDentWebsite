let menu = document.getElementsByClassName("hidden-menu");

function myFunction(x) {
  x.classList.toggle("change");
  if (x.className != "container") {
    menu[0].style.display = "block";
  } else menu[0].style.display = "none";
}

function scrolling(s){

  const container = document.getElementsByClassName('container');
  let prevSection; 
  let height; 
  if(s === 'klinika') window.scrollTo(0, 0); 
  else if(s === 'sherbime'){
    prevSection = document.getElementsByClassName('about-section'); 
    height = prevSection[0].clientHeight; 
    window.scrollTo(0, height); 
  }else{
    prevSection = document.getElementsByTagName('body'); 
    height = prevSection[0].clientHeight; 
    window.scrollTo(0,height)
  }

  myFunction(container[0]); 
}
