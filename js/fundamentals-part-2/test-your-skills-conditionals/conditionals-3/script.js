let response;
let score = 75;
let machineActive = false;

// Add your code here
if(machineActive) {
    switch(score) {
        case 75 || 90:
            response = "Good!";
        default:
            response = "Error!!!";
    }
} else {
    response = "The machine is turned off. Turn it on to process your score."
}
// if (!machineActive) {
//     response = "Machine is turned off! Switch the machine on!";
// } else {
//     if (score <0 || score>100) {
//         response = "This is not possible, an error has occured.";
//     } else if (score >= 0 && score <=19) {
//         response = "That was a terrible score - total fail!"
//     } else if (score >=20 && score <=39) {
//         response = "You know some things, but it\'s a pretty bad score. Needs improvement. "
//     } else if (score >=40 && score <=69) {
//         response = "You did a passable job, not bad!"
//     } else if (score >=70 && score <= 89) {
//         response = "That\'s a great score, you really know your stuff."
//     } else if (score >=90 && score <=100) {
//         response = "What an amazing score! Did you cheat? Are you for real!"
//     } else {
//         response = "Error!!!"
//     }
// }

// Don't edit the code below here!

const section = document.querySelector("section");

let para1 = document.createElement("p");
let para2 = document.createElement("p");

para1.textContent = `Your score is ${ score }.`;
para2.textContent = response;

section.appendChild(para1);
section.appendChild(para2);