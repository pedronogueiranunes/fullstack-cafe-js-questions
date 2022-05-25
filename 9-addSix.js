// QUESTION: write a function that allows you to to this:

/*

let addSix = createBase(6);
addSix(10); returns 16
addSix(21); returns 27

*/

// a function that receives a basenumber to be added and returns another function that receives a random number N to be added to its parent function parameter
function createBase(baseNumber){
    return function(N) {
        // we are referencing baseNumber here even though it was declared
        //outside of this function. Closure allow us to do this in JS
        return baseNumber + N;
    }
}

let addFour = createBase(4);

console.log(addFour(22));
console.log(addFour(0));
console.log(addFour(6));
