function add7(number) {
    return Number(number)+7;
}

function multiply(num1, num2) {
    return num1*num2;
}

function capitalize(word) {
    return (String(word).charAt(0).toUpperCase()+
    String(word).slice(1).toLowerCase())
}

function lastLetter(word) {
    return String(word).slice(-1);
}

console.log(
    add7("8"),
    multiply("4","2"),
    capitalize("c"),
    lastLetter("c"));