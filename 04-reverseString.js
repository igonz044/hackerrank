//Write a function reverseString that takes a string 
//as input and returns the reverse of that string.
//Example: "hello" -> "olleh"
function reverseString(oString){
    let rString=[];
    for(i = oString.length-1; i >= 0; i--){
        console.log("i: "+i);
        rString.push(oString[i]);
    }
    return rString;
}
A = "racecar";
   //01234
// reverseString(A);
console.log("reversed: " + reverseString(A));



