"use strict";
const output = document.querySelector(".output");
output.innerHTML = "";
for(let x=10; x>=0; x--) {
    const para = document.createElement("p");
    para.textContent = x==10? "Countdown 10" : x==0? "Blast Off!" : x;
    output.appendChild(para);
}