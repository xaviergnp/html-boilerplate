"use strict";
// Fizz buzz is a group word game for children to teach them about division. Players take turns to count incrementally, replacing any number divisible by three with the word "fizz", and any number divisible by five with the word "buzz", and any number divisible by both 3 and 5 with the word "fizzbuzz".

// start = 0;
// while (start <22){
//     if (start % 3 == 0 && start % 5 == 0) {
//         console.log("FizzBuzz");
//     } else if (start % 3 == 0 ) {
//         console.log("Fizz");
//     } else if (start % 5 == 0 ) {
//         console.log("Buzz");
//     } else {
//         console.log(start);
//     }
//     start++;
// }
let num = parseInt(prompt("Input a number: "));
let start = 0;
let wordList=`${0} to ${num}<br><br>`;
while (start <num){

    if (start % 3 == 0 && start % 5 == 0) {
        wordList+="FizzBuzz<br>";
    } else if (start % 3 == 0 ) {
        wordList+="Fizz<br>";
    } else if (start % 5 == 0 ) {
        wordList+="Buzz<br>";
    } else {
        wordList+=`${start}<br>`;
    }
    start++;
}
let disp = document.getElementById("display-list");
disp.innerHTML = wordList;