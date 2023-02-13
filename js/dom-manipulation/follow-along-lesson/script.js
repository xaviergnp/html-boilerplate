"use strict";
const buttonPopup = document.querySelector("#btn");
buttonPopup.addEventListener("click", () => alert("Hello World!"));
buttonPopup.addEventListener("click", function(e){
    console.log(e.target);
    e.target.style.background = "blue";
});