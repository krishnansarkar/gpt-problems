// Problem: Move Zeroes
// Given an array of integers, move all the zeros to the end while maintaining the relative order of the non-zero elements.

// Example:
// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]

// Constraints:
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

class Solution {
    /**
     *
     * @param {array} input
     */
    moveZeros(input) {
        var left = 0;
        var right = 1;

        while (input[left] != 0 && left + 1 < input.length) left++;
        right = left + 1;

        while (right < input.length) {
            let rightNum = input[right];
            if (rightNum != 0) {
                input[left] = rightNum;
                input[right] = 0;
                left++;
            }
            right++;
        }
    }
}

const solution = new Solution();
var input = [0, 1, 0, 3, 12];
console.log(input);
solution.moveZeros(input);
console.log(input); // [1, 3, 12, 0, 0]

console.log("---");
input = [0, 0, 0, 1, 2, 3];
console.log(input);
solution.moveZeros(input);
console.log(input); // [1, 2, 3, 0, 0, 0]

console.log("---");
input = [1, 0, 0, 0];
console.log(input);
solution.moveZeros(input);
console.log(input); // [1, 0, 0, 0]

console.log("---");
input = [0, 0, 1, 0, 2, 0, 3];
console.log(input);
solution.moveZeros(input);
console.log(input); // [1, 2, 3, 0, 0, 0, 0]

console.log("---");
input = [0, 0];
console.log(input);
solution.moveZeros(input);
console.log(input); // [0, 0]

console.log("---");
input = [1, 2, 3];
console.log(input);
solution.moveZeros(input);
console.log(input); // [1, 2, 3]

console.log("---");
input = [1, 0, 2, 0, 3];
console.log(input);
solution.moveZeros(input);
console.log(input); // [1, 2, 3, 0, 0]

console.log("---");
input = [1, 2, 0, 0, 3];
console.log(input);
solution.moveZeros(input);
console.log(input); // [1, 2, 3, 0, 0]
