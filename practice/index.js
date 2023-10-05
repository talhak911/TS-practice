"use strict";
let funVar = function (a, b = "khan") { return a + " " + b; };
console.log(funVar("talha", "sadiq"));
function buildName(a, b = "Khan") { return a + " " + b; }
console.log(buildName("tk", 3));
function allName(f, ...r) {
    console.log(f + " " + r.join(" "));
}
allName("tk", "khan", "Sb");
/*
var allName:(f:string, ...r:string[])=>string=function(f:string, ...r:string[]):string{
    return f + " " + r.join(" ")
}

console.log(allName("tulha","khan","seb"))
*/
// Callback function
function toUpper(name) {
    console.log("Hello " + name);
}
function callBack(naam, fun) {
    console.log("Welcome");
    const upper = naam.toUpperCase();
    fun(upper);
}
callBack("Talha", toUpper);
