// QUESTION: write a mul function which will properly when invoked as this syntas: mul(2)(3)(4) - output : 24

function mul(x) {
    // return an anonymous function that receives y
    return function (y) {
        // returns the multiplication from the 3 passed function variables
        return function (z) {
            return x * y * z;
        }
    }
}