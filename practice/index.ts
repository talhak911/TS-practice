//funVar funtion typed with optional parameter and return string
let funVar:(a:string,b?:string)=>string = function (a:string,b="khan"):string{ return a+" "+b};
console.log(funVar("talha","sadiq"))
//any type parameter
function buildName(a: string, b:any = "Khan") : string { return a+" " + b}
console.log(buildName("tk",3))
//funtion with many parameters as needed
function allName(f:string, ...r:string[]){
    //separated by space " "
    console.log(f+" "+r.join(" "))}

allName("tk","khan","Sb")
/*
var allName:(f:string, ...r:string[])=>string=function(f:string, ...r:string[]):string{
    return f + " " + r.join(" ")
}

console.log(allName("tulha","khan","seb"))
*/
// Callback function
function toUpper(name: string){
    console.log("Hello "+ name)
}

function callBack(naam:string,fun:(s:string)=>void){
    console.log("Welcome");
    const upper=naam.toUpperCase();
    fun(upper)
}
callBack("Talha",toUpper)