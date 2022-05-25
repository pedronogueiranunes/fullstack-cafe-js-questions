// QUESTION: How to check if and objetct is an array or not?


let arraylist = [1,2,3];



// uses object prototype to evalue if the type of param is an object array

function isArray(param) {
    if (Object.prototype.toString.call(arraylist) === "[object array]") {
        console.log("It an Array!")
    
    } 
    else {
        console.log("Not an Array")
    }
}

// modern way to test it
console.log(Array.isArray(arraylist));
