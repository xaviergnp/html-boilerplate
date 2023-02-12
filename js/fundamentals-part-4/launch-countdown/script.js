"use strict";
let output = document.querySelector(".output");
output.innerHTML = "";
for(let x=10; x>=0; x--) {
    let para = document.createElement("p");
    para.textContent = "";
    output.appendChild(para);
}