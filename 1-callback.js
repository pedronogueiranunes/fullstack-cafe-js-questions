//  QUESTION: explain what a callback function is and provide a simple examples


function modifyArray(arr, callback) {
    // add a number to the end of the array
    arr.push(100);
    // callback funcion is executed after the main operation of the function is executed
    callback();
}


let arr = [1,2,3,4,5];

// main function with callback function inserted
modifyArray(arr, function() {
    console.log("the array has been sucessfully modified: ", arr);
});

    