//https://leetcode.com/problems/valid-anagram/description/
/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

input can be empty

1. convert s to a stack 
2. iterate through t
3. if the letter in t is found in s, I will pop that letter in s
4. at the end, if s is empty, return true, false otherwise
*/

function anagram(sString, t){
    //convert s to []
    let s = sString.split('');

    for(let i = 0; i < t.length; i++){
        
        if(s.includes(t[i])){
            index = s.indexOf(t[i]);
            
            s.splice(index,1);
        }
    }
    return s.length === 0;
}
let A = "race";
let B = "acer";

console.log(anagram(A,B));