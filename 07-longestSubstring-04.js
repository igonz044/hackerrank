function longestSubstring(A){
    //we will save longest substring as maxB, then return its length
    let B = [];
    let maxB = [];

    for(let i = 0; i < A.length; i++){
        if(!B.includes(A[i])){
            B.push(A[i]);
            if(B.length>maxB.length){
                maxB = B;
            }
        }
        else{
            i--;
            B=[];
        }
    }
    return maxB.length;
}

//Test Cases
let A = "ab"; //output: 2
let B = "bbbb";//output: 1
let C = "pwwkew";//output: 3

console.log(longestSubstring(B));

// let C = A[0];
// let D = B.includes(A[0]);
// console.log(D);
//a,b,c,d,a,a,b,b,c,d,e,g,t,b,b,b,a,a