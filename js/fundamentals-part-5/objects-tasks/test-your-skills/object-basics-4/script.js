"use strict";
const cat = {
    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
  }
  
  const cat2 = {
    name : 'Elfie',
    breed : 'Aphrodite Giant',
    color : 'ginger',
  }
  
  function createGreeting(obj) {
    // obj.greeting = () => console.log(`Hello, said ${ obj.name } the ${ obj.breed }.`);
    obj.greeting = `Hello, said ${ obj.name } the ${ obj.breed }.`;
  }
  
  createGreeting(cat);
  createGreeting(cat2);
  
  let section = document.querySelector("section");
  
  let para1 = document.createElement("p");
  para1.textContent = cat.greeting;
  section.appendChild(para1);

  let para2 = document.createElement("p");
  para2.textContent = cat2.greeting;
  section.appendChild(para2);