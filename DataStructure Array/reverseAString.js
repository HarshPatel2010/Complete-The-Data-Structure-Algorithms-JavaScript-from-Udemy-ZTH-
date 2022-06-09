function reverse(string){
    if(!string || string.length < 2 || typeof string !=="string"){
        return "string is not valid"
    }
    console.log(string.length);
    let backwards = [];
    string.split()
    let totalLength = string.length-1;
    for(let i=totalLength;i>=0;i--){
        backwards.push(string[i])
    }
    console.log(backwards);
     backwards.join("")
    return backwards;
}
reverse("hello there");


//use of built in methods in js--more modern cleaner way
function reverseBuiltIn(string){
    return string.split("").reverse().join("")
}

// use of ES6
const reverseStringUseOFES6 = string => {return string.split("").reverse().join("")}
// use of ES6
const reverseStringUseOfSpreadOperator = string => { 
    string = string.split("")
    return [...string].split("").reverse().join("")}

