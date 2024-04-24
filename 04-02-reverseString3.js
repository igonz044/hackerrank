//reverseString Review
//Problem: Output a reversed version of input string 
function reverseString(s){
    let rString = [];
    n = s.length-1;
    for(let i = n; i >= 0; i--){
        rString.push(s[i]);
    }
    //rString returns an array, we want to return a string
    //we can use join, to join all array objects into a string
    //join with no space as noted by ""
    return rString.join("");
}

let A = "hello";
console.log(reverseString(A));