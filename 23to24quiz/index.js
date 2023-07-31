// 23 24
var car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
var car1 = 'toyota';
console.log("Is car == 'toyota'? I predict True.");
console.log(car1 == 'subaru');
// console.log(true || alert("Hello"))
//   //alert is never evaluated
// console.log(false || alert("Hello"))
console.log(true || false && false); //true
console.log((true || false) && false); //false
// lllllllllllllllllllllllllll
function A() {
    console.log("called A");
    return false;
}
function B() {
    console.log("called B");
    return true;
}
console.log(A() && B());
// Logs "called A" to the console due to the call for function A,
// && evaluates to false (function A returns false), then false is logged to the console;
// the AND operator short-circuits here and ignores function B
// llllllllllllllllllllllllllllllll
console.log(true && (false || false)); // false
console.log((2 > 3) || (4 < 0) && (1 === 1)); // false
var a1 = true && true; // t && t returns true
var a2 = true && false; // t && f returns false
var a3 = false && true; // f && t returns false
var a4 = false && 3 > 4; // f && f returns false
var a5 = "Cat" && "Dog"; // t && t returns "Dog"
var a6 = false && "Cat"; // f && t returns false
var a7 = "Cat" && false; // t && f returns false
var a8 = "" && false; // f && f returns ""
var a9 = false && ""; // f && f returns false
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
console.log(a6);
console.log(a7);
console.log(a8);
console.log(a9);
