"use strict";
const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
    console.log(e.target.style.background="blue");
});

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", ()=> {
        alert(button.id);
    });
});

const keypress = document.querySelector("#input");
document.addEventListener("keydown", (e) => {
    keypress.textContent += `${e.key} `;
    console.log(e);
});
