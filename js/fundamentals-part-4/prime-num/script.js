"use strict";
function getPrime(num) {
    let primeNum = "Prime Numbers: ";
    for (let i = 1; i<=num; i++) {
        let primeCheck=true;
        for(let n=2; n<i; n++) {
            if (i%n == 0) {
                primeCheck=false;
                break;
            }
        }
        if (primeCheck) primeNum += `${i} `;
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