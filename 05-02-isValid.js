//Review #2 of isValid 
//Problem: given an input string ex: "{{[]}}"
//Output if the string is Valid 

//Following Coding Interview Framework
/*
input can be empty, return true
there can be duplicates

Step by step walkthrough of solution:
1. write a function & test cases
2. make an object with all possible opening barackets with their corresponding closing bracket
3. create a stack to push all opening brackets into, "opening-bracks"
4. loop through string and check each character
5. if it is an opening bracket we will push it to the stack
6. else, if it matches top of stack we pop the stack else, return false

return opening-brackets.isEmpty() !isEmpty does not work on arrays only on strings
*/
function isValid(s){
    let brackets = {
        "[":"]",
        "(":")",
        "{":"}"
    };

    let opening_bracks = [];
    
    for(let i = 0; i < s.length; i++){
        //if its an opening bracket
        if(brackets.hasOwnProperty(s[i])){
            opening_bracks.push(s[i]);
        }else{
            if(s[i]==brackets[opening_bracks[opening_bracks.length-1]]){
                opening_bracks.pop();
            }else{
                return false;
            }
        }
    }
    return opening_bracks.length === 0;
}
let A = "{}{}[]";//true
let B = "}[]";//false
let C = [];

console.log(isValid(A));// Should return true
console.log(isValid("()")); // Should return true
console.log(isValid("()[]{}")); // Should return true
console.log(isValid("(]")); // Should return false
console.log(isValid("([)]")); // Should return false
console.log(isValid("{[]}")); // Should return true