let season = "summer";
let response;

// Add your code here

if (season === "summer") {
    response = "The current season is Summer!";
} else if (season === "winter") {
    response = "The current season is Winter!";
} else {
    response = "The current season is UNDEFINED!!!"
}

// Don't edit the code below here!

const section = document.querySelector(".preview");
section.innerHTML = " ";
let para1 = document.createElement("p");
para1.textContent = response;
section.appendChild(para1);