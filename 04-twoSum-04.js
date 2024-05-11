//return indices at which two numbers add up to target
function twoSum(s, target){
    let result = [];

    for (let i = 0; i < s.length; i++){
        for (let j = i+1; j < s.length; j++){
            if(s[i] + s[j] === target) {
                result.push(i);
                result.push(j);
            }
        }
    }
    return result;
}
let A = [1, 2, 3, 4, 5];
console.log(twoSum(A, 6));