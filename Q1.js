// Question 1:
// Determine the validity of an input string s, which consists solely of the characters (, ), {, }, [, and ]. You need to check the following conditions: 
//   The opening brackets: 
//   - Must match with the corresponding closing brackets of the same type 
//   - Must be closed in the correct order 
//   - Should have a corresponding opening bracket of the same type

// Input: s = "()" Output: true
// const openBrackets = ["(", "{", "["];
// const closingBrackets = [")", "}", "]"];
// "()"
// "{}"
// "[]"

function isValid(s) {
    const stack = [];
    const openBrackets = ["(", "{", "["];
    const closingBrackets = [")", "}", "]"];

    for (let char of s) {
        if (openBrackets.includes(char)) {
            stack.push(char);
    } else {
        const closingIndex = closingBrackets.indexOf(char);
        const matchingOpenBracket = openBrackets[closingIndex];
        
        if (stack.length === 0 || stack.pop() !== matchingOpenBracket) {
            return false;
        }
    }
    }

    return stack.length === 0;
}

const s1 = "()";
console.log(isValid(s1)); // Output: true

const s2 = "(){}[]";
console.log(isValid(s2)); // Output: true