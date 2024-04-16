/**
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    // Your code here
    
    n = s.length;
    if(n%2!=0){
        
        return false;
    }else{console.log("helloo");
        for(let i = 0; i < n; i++){console.log("xxxxx");
            if(s[i]==s[n-1]){
                //shift to remove first
                s.shift();
                //pop to remove last
                s.pop();
                if(s=null){
                    break;
                }
            }
            else{console.log("oooo ");
                i--;
                if(s=null){
                    console.log(s);
                    break;
                }
            }
        }
    }
    if (s = null){
        return true;
    }
    else{
        return false;
    }
}
//Test cases
let A = "()";
isValid(A);//returns false
