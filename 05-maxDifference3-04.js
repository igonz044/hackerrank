//Problem: find the maximum difference between two 
// elements in the array, such that the larger 
// element appears after the smaller element. 
// If no such pair of elements exists, return 0.
function maxDifference(nums){
    let num = 0;
    let maxNum = 0;
    let s = 0;
    let minNum = 1000000;
    let sIndex = 0;

    for(let i = 0; i < nums.length; i++){
        s = nums[i];
        if(s < minNum){
            minNum = s;
            sIndex = i;
        }
    }
    for(let j = sIndex; j < nums.length; j++){
        num = nums[j];
        if(num > maxNum){
            maxNum = num;
        }
    }
    return maxNum - minNum;
}

//Test Cases
let A = [1, 2, 3, 5];//should return 4
let B = [7, 1, 5, 3, 6, 4]; // Should return 5 (the difference between 6 and 1)
let C = [7, 6, 4, 3, 1];// Should return 0 (no such pair of elements exists)

console.log(maxDifference(A));
console.log(maxDifference(B));
console.log(maxDifference(C));

//More concise implementation that also handles edge cases better 
function maxDifference(nums) {
    if (nums.length < 2) {
        return 0; // Edge case: Array has less than 2 elements
    }

    let minNum = nums[0];
    let maxDiff = 0;

    for (let i = 1; i < nums.length; i++) {
        let currentNum = nums[i];
        maxDiff = Math.max(maxDiff, currentNum - minNum);
        minNum = Math.min(minNum, currentNum);
    }

    return maxDiff;
}