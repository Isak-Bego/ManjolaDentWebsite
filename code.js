let menu = document.getElementsByClassName("hidden-menu");

function myFunction(x) {
  x.classList.toggle("change");
  if (x.className != "container") {
    menu[0].style.display = "block";
  } else menu[0].style.display = "none";
}
