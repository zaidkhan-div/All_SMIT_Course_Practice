// var date = new Date();
// // var convertDateIntoString = date.toString();
// // console.log(convertDateIntoString);
// // console.log(date.getDay());
// // console.log(date.getMonth());
// // console.log(date.getDate());
// // console.log(date.getFullYear());
// // console.log(date.getHours());
// // console.log(date.getMinutes());
// // console.log(date.getSeconds());
// // console.log(date.getMilliseconds());
// // console.log(date.getTime());

// var days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// var day = date.getDay();
// console.log(days[day]);

// var date = new Date("June 1, 2020");
// console.log(date);

// var birthDate = new Date("August 30, 2002");
// var date = new Date();

// var birthDateTime = birthDate.getTime();
// var currentDateTime = date.getTime();
// // milliseconds ==> seconds  ==> minutes  ==>  hours
// var hours = Math.ceil((currentDateTime - birthDateTime) / 1000 / 60 / 60);
// console.log(hours);

var date = new Date();
date.setFullYear(2000)
date.setMonth(0)
console.log(date);


let rightNow = new Date();
// suppose if i wanna aplly some slice methods and more string methods
// so rightNow.toString()

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var theDay = rightNow.getDay();
var nameOfToday = dayNames[theDay];
console.log(nameOfToday);


var doomsday = new Date("June 30, 2035");
var msToday = rightNow.getTime();
var msDoomsday = doomsday.getTime();
var doomsday = new Date("June 30, 2035");
var msDiff = msDoomsday - msToday;

var dDiff = msDiff / (1000 * 60 * 60 * 24);
dDiff=Math.floor(dDiff);
console.log(dDiff);


var d = new Date();
d.setFullYear(2001);
d.setDate(15);
d.setHours(13);
d.setMinutes(05);
d.setSeconds(55);
