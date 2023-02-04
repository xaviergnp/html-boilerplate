let season = document.querySelector("select");
let response;
// Add your code here
season.addEventListener("change", setSeason);
function setSeason() {
    if (season.value === "summer") {
        response = "The current season is Summer!";
    } else if (season.value === "winter") {
        response = "The current season is Winter!";
    } else {
        response = "The current season is UNDEFINED!!!"
    }
    const section = document.querySelector(".preview");
    section.innerHTML = " ";
    let para1 = document.createElement("p");
    para1.textContent = response;
    section.appendChild(para1);
}


// Don't edit the code below here!

