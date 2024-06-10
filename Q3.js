// Question 3:
// You are given an array heights representing the heights of students in a class. The students are standing in a line, and their heights are listed in the order they appear from left to right. The school wants to arrange the students in a non-decreasing order by their heights. However, when they rearrange the students, a few may end up in different positions from their original positions.
// You need to write a function heightChecker(heights) that determines the minimum number of students who are not standing in the correct positions after the rearrangement. Implement the function heightChecker and return the minimum number of students who are not positioned correctly.

// Input: heights = [1, 1, 4, 2, 1, 3]
// Sorted = [1, 1, 1, 2, 3, 4]

// Index 0: same - '1' vs '1'
// Index 1: same - '1' vs '1'
// Index 2: different - '4' vs '1'
// Index 3: same - '2' vs '2'
// Index 4: different - '1' vs '3'
// Index 5: different - '3' vs '4'
// Index 2, 4, 5 is dfferent, so output is 3


function heightChecker(heights) {
    const sortedHeights = [...heights].sort((a, b) => a - b);
    let count = 0;

    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sortedHeights[i]) {
            count++;
        }
    }
    return count;
}

console.log(heightChecker(heights)); // Output: 3