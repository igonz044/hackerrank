//Review of isValid
//Problem: given an input string ex: "{{[]}}"
//Output if the string is Valid 
function isValid(s){
    const bracketStack = [];
    //Create object to map each bracket with each other
    const brackets = {
        "[":"]",
        "{":"}",
        "(":")"
    };
  
    for(let char of s){
        //if its an opening bracket add to stack
        //aka if its an object that exists in brackets
        if(brackets[char]){
            bracketStack.push(char);
            // console.log(bracketStack.pop());
        }
        else{
            console.log(char);
            console.log(brackets[bracketStack.pop()]);
            console.log(bracketStack.pop());
            
            // Check if stack is empty or if the top of the stack matches the current closing bracket
            if (!bracketStack.length || brackets[bracketStack.pop()] !== char) {
                return false;
            }
            // if(bracketStack.pop()==s[i]){
            //     return true;
            // }
        }
    }
    // If the stack is empty, all brackets are matched
    return bracketStack.length === 0;
}

let A = "[]";

console.log(isValid("{[]}")); // Should return false