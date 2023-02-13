"use strict";
function getPrime(num) {
    let primeNum = "Prime Numbers: ";
    primeLoop: 
    for (let i = 1; i<=num; i++) {
        for(let n=2; n<i; n++) {
            if (i%n == 0) continue primeLoop;
        }
        primeNum += `${i} `;
    }
    console.log(primeNum);
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Input a number: ", function (answer) {
  getPrime(answer);
  rl.close();
});