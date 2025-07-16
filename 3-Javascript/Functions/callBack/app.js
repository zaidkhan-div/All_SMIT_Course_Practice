// What is CalBack Function in Javascript 
setTimeout(() => {
    console.log('timer')
}, 3000);

function x(y) {
    console.log('y Function')
    y()
}
// passing one function to another function as an argument is called CallBack 
// why they are called CallBack becase you give the responsibility of this function to the parent one
x(function y() {
    console.log('X Function')
})

// Javascript is a synchronous and single-threaded language

// Blocking the main thread

// Power of CallBack?

// Deep about Event listeners

// Scope Demo with Event listeners 

// Garbage Collection & removeEventListeners 


// now i wanna how many times the button is clicked creating a global variable and then inside callBack count++ which is not good
function attachEventListeners() {
    let count = 0;
    document.getElementById("clickMe").addEventListener('click', function callBack() {
        console.log('Button Clicked', ++count);
        // now this function responsibility is with the eventListener
        // When btn is clicked this is will go through the callStack and then Log
    })
}
attachEventListeners()