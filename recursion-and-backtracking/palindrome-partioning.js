// Problem: Palindrome Partitioning
// Given a string s, partition it into all possible substrings such that every substring is a palindrome.
// Return all possible palindrome partitionings.

// Example 1:
// Input: s = "aab"
// Output: [["a", "a", "b"], ["aa", "b"]]

// Example 2:
// Input: s = "a"
// Output: [["a"]]

// Example 3:
// Input: s = "racecar"
// Output: [
//     ["r", "a", "c", "e", "c", "a", "r"],
//     ["r", "a", "cec", "a", "r"],
//     ["r", "aceca", "r"],
//     ["racecar"]
// ]

// Constraints:
// 1 <= s.length <= 16
// s consists only of lowercase English letters.

class Solution {
    /**
     *
     * @param {String} s
     * @returns {Array}
     */
    partitions(s) {
        var result = [];
        this.#solve(s, [], result);
        return result;
    }

    #solve(substring, path, result) {
        // console.log(substring, path);
        if (substring.length === 0) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < substring.length; i++) {
            var s = substring.slice(0, i + 1);
            if (this.#isPalindrome(s)) {
                path.push(s);
                this.#solve(substring.slice(i + 1), path, result);
                path.pop();
            }
        }
    }

    /**
     *
     * @param {string} s
     * @return {bool}
     */
    #isPalindrome(s) {
        var left = 0;
        var right = s.length - 1;
        while (left < right) {
            if (s[left] != s[right]) return false;
            left++;
            right--;
        }
        return true;
    }
}

const solution = new Solution();
console.log(solution.partitions("aab"));
