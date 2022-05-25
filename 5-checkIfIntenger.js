// QUESTION: how to check if a number is an intenger

// you check by seeing if there is a remainder left when you divide by 1

function isInt(num) {
    // false if there is a remainder 
    return num % 1 === 0;
}

console.log(isInt(2));
console.log(isInt(15.4));
console.log(isInt(0.1));