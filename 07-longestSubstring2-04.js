//find longest substring in a given string
//next review May21st

function longestSubstring(A){
    let B = [];
    let maxB = [];
    for(let i = 0; i < A.length; i++){
        if(!B.includes(A[i])){
            B.push(A[i]);
            if(B.length>maxB.length)
            {
                maxB = B;
            }
        }
        else{
            i--;
            B=[];
        }
    }
    return maxB;
}

//Test Cases
let A = "aaabada";//output: 2
let B = "bbbabdb";//output: 1
let C = "pwwkew";//output: 3

console.log(longestSubstring(A));//ab or 2
console.log(longestSubstring(B));//b or 1
console.log(longestSubstring(C));//wke or 3

// let C = A[0];
// let D = B.includes(A[0]);
// console.log(D);
//a,b,c,d,a,a,b,b,c,d,e,g,t,b,b,b,a,a