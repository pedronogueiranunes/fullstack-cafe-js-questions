// QUESTION: given a string, reverse each word in the sentence

// function that receives a string and a separator character
function reverseBySeparator(string, separator) {
    // splits the string, then reverses it, then returns the new reversed string
    return string.split(separator).reverse().join(separator);
}


let string = "Esta string tem que ser invertida";

// reverses the entire sentence, doesnt receive space as a separator
let reverseEntireSentence = reverseBySeparator(string, "");

// reverses each word, receiving space as a separator
let reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");