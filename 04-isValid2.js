/**
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * This solution uses stack data structure
 */

function isValid(s) {
    const stack = [];
    const brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (brackets[char]) {
            stack.push(char); // Push opening brackets onto the stack
        } else {
            // Check if stack is empty or if the top of the stack matches the current closing bracket
            if (!stack.length || brackets[stack.pop()] !== char) {
                return false;
            }
        }
    }

    // If the stack is empty, all brackets are matched
    return stack.length === 0;
}

// Test cases
let A = "{()}";
console.log(isValid(A));
console.log(isValid("()")); // Should return true
console.log(isValid("()[]{}")); // Should return true
console.log(isValid("(]")); // Should return false
console.log(isValid("([)]")); // Should return false
console.log(isValid("{[]}")); // Should return true
