"use strict";

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// loop starts here
for (let guest of people) {
    if(guest == "Phil" || guest == "Lola") {
        refused.textContent += `${guest}, `;
    } else {
        admitted.textContent += `${guest}, `;
    }
    console.log(guest);
}
admitted.textContent = admitted.textContent.slice(-2);
refused.textContent = refused.textContent.slice(-2)