/**
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * @param {string} s
 * @return {boolean}
 */
//Fix bug that causes infinite loop
function isValid(s) {
    n = s.length;
    console.log(s[n-1]);
    if(n%2!=0){
        return false;
    }else{
        for(let i = 0; i < n; i++){
            if(s[i]==s[n-1]){
                //shift to remove first
                s.shift();
                //pop to remove last
                s.pop();
                console.log("length is: " + s.length);
                if(s=null){
                    break;
                }
            }
            else{
                i--;
                if(s=null){
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
let A = "[()]";
isValid(A);//returns false
