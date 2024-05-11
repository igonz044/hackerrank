//find if a string is a palindrome or not

function isPalindrome(oString){
    let rString = [];
    //Step 1: Reverse
    for(let i=oString.length-1; i >= 0; i--){
        rString.push(oString[i]);
    }
    
    //Step 2: Check if reversed letters match original String
    for(let i=0; i < oString.length; i++){
        if(oString[i]!=rString[i]){
            return false;
        }
    }
    return true;
}
let A = "racecar"
// isPalindrome(A);
console.log(isPalindrome(A));