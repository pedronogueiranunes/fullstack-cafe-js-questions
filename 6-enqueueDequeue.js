// QUESTION: implement enqueue and dequeue using only two stacks

// enqueue means to add an element, dequeue to remove an element

let inputStack = []; //firstStack
let outputStack = []; //secondStack

// for enqueue, just push the item into the first stack
function enqueue(stackInput, item){
    return stackInput.push(item);
}

function dequeue(stackInput, stackOutput) {
    /* reverse the stack such that the first element of the output stack 
    is the last element of the input stack.
    After that, pop the top of the output to 
    get the first element that was ever pushed into the input stack*/
    if (stackOutput.length <= 0) {
        while(stackInput.length > 0) {
            let elementToOutput = stackInput.pop();
            stackOutput.push(elementToOutput);
        }
    }
    return stackOutput.pop();
}