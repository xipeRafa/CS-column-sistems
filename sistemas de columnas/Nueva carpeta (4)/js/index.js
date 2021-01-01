const box = document.getElementById("box");
let pseudoBefore = window.getComputedStyle(document.querySelector(".container"), ":before").getPropertyValue("display");

box.addEventListener("click", function() {
       console.log(pseudoBefore);
       //pseudoelementy zmiana display na "block"
});

let menu = document.getElementById("menu");
menu.addEventListener("click", function(){
  menu.classList.toggle("rotate");
});