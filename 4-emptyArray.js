// QUESTION: how do you empty an array?

let arraylist = ["a","b","c","d","e","f"];

// method 1
// this method is recommended if you dont have references to the original array in the code 

arraylist = [];

//method 2
// this method update all the reference variables which is pointing to the original array
arraylist.length = 0;

//method 3
// this way of empty an array also update all the references to the original array
arraylist.splice(0, arraylist.length);

//method 4
// makes a loop that pops each component of the array

while(arraylist.length){
    arraylist.pop();
}




