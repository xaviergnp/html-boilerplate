"use strict";
let bandInfo;

// Put your code here
let band = {
name: "Bocchi",
nationality: "Japan",
genre: "Rock",
members: 5,
formed: 2023,
split: false,
albums: [
{name: "SummerDay", released: 2023},
{name: "WinterNight", released: 2023}
]
}

bandInfo = `Hello! The band ${band.name} was formed on ${band.formed} in ${band.nationality}. It currently has ${band.members} members. They also have two albums which are ${band.albums[0].name} and ${band.albums[1].name}.`;

// Don't edit the code below here
let section = document.querySelector("section");
let para1 = document.createElement('p');
para1.textContent = bandInfo;
section.appendChild(para1);