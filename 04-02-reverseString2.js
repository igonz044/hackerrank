//this does the same as before but converts
//array back into a string

function reverseString(oString){
    let rString=[];
    for(let i = oString.length-1; i >=0; i--){
        rString.push(oString[i]);
    }
    //to join array into a single string use join()
    return rString.join("");
}
let A = "hello";
console.log("reversed: "+ reverseString(A));