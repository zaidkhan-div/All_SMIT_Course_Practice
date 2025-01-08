let string = 'Zaid';
// first way to get the first char is to string.slice(0,1)
// Modern way string.charAt(0)
console.log(string.slice(0, 1));
console.log(string.charAt(0));

var lastChar = name.charAt(name.length - 1);
let text = 'This is Finding an Alert!'
// The following code cycles through a string looking for an exclamation point. If the
// character is found, an alert displays.

for (var i = 0; i < text.length; i++) {
    if (text.charAt(i) === "!") {
        // alert("Exclamation point found!");
        break;

    }
}
var profit = "200" - "150";
console.log(profit);// sometime javascript Undrstadn strings to numbers when Arthimatic comes
// When strings appear in th e Math Expression
var result = "200" + 150;
console.log(result);


// convert String to Numbers
var integerString = "24";
var num = Number(integerString);
console.log(typeof (num));


// this is to Convert decimal to fixed amiunt
let total = 10.59675;
var prettyTotal = total.toFixed(2);
console.log(prettyTotal);

// To shorten a number to no decimals, leave the parentheses empty.
var prettyTotal = total.toFixed();
