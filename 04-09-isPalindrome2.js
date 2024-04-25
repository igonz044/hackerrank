//find if a string is a palindrome or not
//ignore non-alphanumeric characters
function isPalindrome(A){
    //1. replace all non-alphanumeric characters
    //so we only have letters left
    let B = A.replace(/[^a-zA-Z]/g,"");
    
    //2. Lowercase all
    B = B.toLowerCase();

    let rB=[];

    //3. Reverse string
    for(let i=B.length-1; i >=0; i--){
        rB.push(B[i]);
    }
    
    rB = rB.join("");
    
    //4. Check if reverse letters match original string
    for(let j = 0; j < B.length; j++){
        //race a car rac a ecar
        if(B[j]!=rB[j]){     
            return false;
        }
    }
    return true;
}

let A = "A man, a plan, a canal: Panama"; // Should return true
let B = "race a car"; // Should return false

console.log(isPalindrome(A));
console.log(isPalindrome(B));