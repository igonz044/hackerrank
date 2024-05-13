//find longest substring in a given string
//last version of this program was not working for some input cases
//this version makes sure that we do not reset the entire subset,
//using map we move start pointer to last occurrence of the repeated character
function longestSubstring(A) {
    let maxLen = 0;
    let start = 0;
    let charMap = new Map();

    for (let i = 0; i < A.length; i++) {
        let char = A[i];
        if (charMap.has(char) && charMap.get(char) >= start) {
            start = charMap.get(char) + 1;
        }
        charMap.set(char, i);
        maxLen = Math.max(maxLen, i - start + 1);
    }

    return maxLen;
}

// Test Cases
let A = "aaabada"; // output: 3
let B = "bbbabdb"; // output: 4
let C = "pwwkew"; // output: 3

console.log(longestSubstring(A)); // 3
console.log(longestSubstring(B)); // 4
console.log(longestSubstring(C)); // 3