"use strict";
function filterGuest(guests) {
    let refusedGuest = "";
    let admittedGuest = "";
    if (guests == "Phil" || guests == "Lola") {
        refusedGuest+=guests;
    } else {
        admittedGuest+=guests;
    }
    return [refusedGuest,admittedGuest];
}

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// loop starts here
let filteredGuest = people.forEach(filterGuest());
refused.textContent += filterGuest[0];
admitted.textContent += filterGuest[1];