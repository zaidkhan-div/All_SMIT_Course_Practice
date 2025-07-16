// ========== Browser ========
// ========== WebApi =========
// setTimeOut()
// Dom APis
// fetch()
// localStorage
// console
// Location


// These are not part of core JavaScript; they are Web APIs provided by the browser that JavaScript can use to interact with the environment (like DOM, HTTP, etc.). You can think of them as "browser superpowers" given to JS — that's a nice way to put it!

// Here's a quick breakdown:
// 🔹 We use Web APIs for:
// Contacting external APIs (servers) →
// Example: fetch() is used to make HTTP requests to external APIs.
// Interacting with the browser/environment →
// Example:
// localStorage to store data in the browser
// console to log/debug
// location to get or change the page URL
// DOM APIs to change HTML content
// setTimeout() to run code after delay
// We use browser Web APIs for:
// Talking to the browser
// Talking to external services
// ✅ JavaScript acts as a bridge that uses these browser-provided tools.



// The global object in the browser is window.
// Browsers give JavaScript superpowers by exposing Web APIs through the window object.
// 🔹 Explanation:
// In browsers, window is the global object.
// All Web APIs like setTimeout, localStorage, fetch, etc. are available as properties on window.
// Example: window.setTimeout, window.localStorage
// That’s how JavaScript gets access to these browser features.
// 🔸 Final Short Version:
// window is the global object in browsers.
// Browsers give JavaScript access to Web APIs through window. ✅


console.log("Start")

setTimeout(function cb() {
    console.log("CallBack")
}, 5000);

console.log("End")

// Let's see how Event Loop and Callback Queue work.
// When we run this code, console.log goes to the Call Stack,
// is executed inside the Global Execution Context (GEC), and then it's removed.

// Now, setTimeout is delayed for 5 seconds.
// When the timer is done, the callback doesn't go directly to the Call Stack.
// First, it goes to the Callback Queue.
// Then, the Event Loop checks if the Call Stack is empty.
// If it is, it pushes the callback from the Callback Queue into the Call Stack,
// where it gets executed inside the GEC.
