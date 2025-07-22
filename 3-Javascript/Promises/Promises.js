// const ASYNC_FUNC = async () => {
//     await setTimeout(() => {
//         console.log('Async Done');
//     }, 1000)
// };

// ASYNC_FUNC();

// console.log('This runs Immediatley');

// let myPromise = new Promise((resolve, reject) => {
//     let success = true;
//     if (success) {
//         resolve('Success');
//     } else {
//         reject('Error');
//     }
// });
// myPromise
//     .then(result => console.log(result))  // Runs if resolved
//     .catch(error => console.log(error));  // Runs if rejected



// ====== SetTimeOut ========= 

// function setTimeFunc() {
//     var i = 1;
//     setTimeout(function () { // callBack 
//         console.log(i); // this is closue which remember the lexical scope
//     }, 3000);
//     console.log('Hello World')
// }
// setTimeFunc();

// function setTimeFunc() {
//     for (let i = 1; i <= 5; i++) { // var i 
//         setTimeout(() => {
//             console.log(i)
//         }, 1000);
//         // print 6 6 6 6 6
//         // Js does not wait for anything it just runs continously
//     }
// }

// solve the issue with closure using var
function setTimeFunc() {
    for (var i = 0; i <= 5; i++) {
        function close(i) {
            setTimeout(() => {
                console.log(i)
            }, i * 1000);
        }
        close(i)
    }
}
setTimeFunc()