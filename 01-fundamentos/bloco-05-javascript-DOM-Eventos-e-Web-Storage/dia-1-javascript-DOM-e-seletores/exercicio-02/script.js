document.getElementById("header-container").style.backgroundColor = "#19b38a";

document.getElementsByClassName("emergency-tasks")[0].style.backgroundColor = "pink";
document.getElementsByClassName("no-emergency-tasks")[0].style.backgroundColor = "yellow";

document.getElementById("footer-container").style.backgroundColor = "green";
document.getElementById("footer-container").style.position = "absolute";
document.getElementById("footer-container").style.width = "100%";
document.getElementById("footer-container").style.bottom = 0;

let purpleBars = document.querySelectorAll(".emergency-tasks h3");
let blackBars = document.querySelectorAll(".no-emergency-tasks h3");

for (i of purpleBars){
  i.style.backgroundColor = "#C926c1";
}

for (j of blackBars){
  j.style.backgroundColor = "black";
}