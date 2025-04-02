// Problem: Letter Combinations of a Phone Number
// Given a string containing digits from 2 to 9, return all possible letter combinations that the digits could represent (just like old phone keypads).

// Example:
// Input: digits = "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
// Explanation:
// 2 maps to "abc"
// 3 maps to "def"
// The combinations are all possible pairings of the letters from the two digits.

// Constraints:
// 0 <= digits.length <= 4
// digits[i] is between '2' and '9'.
class Solution {
    /**
     *
     * @param {number} digits
     * @returns {Array}
     */
    letterCombinations(digits) {
        var result = [];
        this.backtrack(digits.toString(), "", result);
        return result;
    }

    /**
     *
     * @param {string} digits
     * @param {Array} result
     */
    backtrack(digits, substring, result) {
        console.log(digits);
        if (digits.length == 0) {
            result.push(substring);
            return;
        }
        var digit = digits[0];
        var remainingDigits = digits.slice(1);

        switch (digit) {
            case "2":
                this.backtrack(remainingDigits, substring + "a", result);
                this.backtrack(remainingDigits, substring + "b", result);
                this.backtrack(remainingDigits, substring + "c", result);
                break;
            case "3":
                this.backtrack(remainingDigits, substring + "d", result);
                this.backtrack(remainingDigits, substring + "e", result);
                this.backtrack(remainingDigits, substring + "f", result);
                break;
            case "4":
                this.backtrack(remainingDigits, substring + "g", result);
                this.backtrack(remainingDigits, substring + "h", result);
                this.backtrack(remainingDigits, substring + "i", result);
                break;
            case "5":
                this.backtrack(remainingDigits, substring + "j", result);
                this.backtrack(remainingDigits, substring + "k", result);
                this.backtrack(remainingDigits, substring + "l", result);
                break;
            case "6":
                this.backtrack(remainingDigits, substring + "m", result);
                this.backtrack(remainingDigits, substring + "n", result);
                this.backtrack(remainingDigits, substring + "o", result);
                break;
            case "7":
                this.backtrack(remainingDigits, substring + "p", result);
                this.backtrack(remainingDigits, substring + "q", result);
                this.backtrack(remainingDigits, substring + "r", result);
                this.backtrack(remainingDigits, substring + "s", result);
                break;
            case "8":
                this.backtrack(remainingDigits, substring + "t", result);
                this.backtrack(remainingDigits, substring + "u", result);
                this.backtrack(remainingDigits, substring + "v", result);
                break;
            case "9":
                this.backtrack(remainingDigits, substring + "w", result);
                this.backtrack(remainingDigits, substring + "x", result);
                this.backtrack(remainingDigits, substring + "y", result);
                this.backtrack(remainingDigits, substring + "z", result);
                break;
        }
    }
}

// Time-complexity: O(4^n)
// Space-complexity: O(n)

const solution = new Solution();
console.log(solution.letterCombinations(23));
console.log(solution.letterCombinations(79));
