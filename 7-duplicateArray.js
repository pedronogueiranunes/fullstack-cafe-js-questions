// QUESTION: Duplicate an array

let arraylist = [0,1,2,3,4,5,6];

// receives an array and duplicates it
function duplicate(arr){
    // test if is an array
    if (typeof arr === "string") {
        return "this is not an array!";
    } else {
        return arr.concat(arr);
    }
}

console.log(duplicate(arraylist));
