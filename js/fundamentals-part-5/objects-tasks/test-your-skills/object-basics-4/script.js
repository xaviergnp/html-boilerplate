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
    obj.greeting = () => console.log(`Hello, said ${ obj.name } the ${ obj.breed }.`);
  }
  
  createGreeting(cat);
  createGreeting(cat2);
  cat.greeting(); 
  cat2.greeting();