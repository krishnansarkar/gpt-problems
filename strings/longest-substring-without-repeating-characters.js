// Problem: Longest Substring Without Repeating Characters
// Category: Strings (Hashing, Sliding Window)

// Problem Statement:
// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.

// Constraints:
// 0 <= s.length <= 10^5
// s consists of English letters, digits, symbols, and spaces.

class Solution {
    /**
     *
     * @param {string} input
     * @returns {number}
     */
    longestSubstring(input) {
        var left = 0;
        var right = 0;
        var longestLength = 0;
        var characterCount = new Map();
        while (right < input.length) {
            var rightChar = input.charAt(right);
            while (left != right && characterCount.get(rightChar) > 0) {
                var leftChar = input.charAt(left);
                characterCount.set(leftChar, characterCount.get(leftChar) - 1);
                left++;
            }

            longestLength = Math.max(longestLength, right - left + 1);
            if (characterCount.get(rightChar) == undefined) {
                characterCount.set(rightChar, 1);
            } else {
                characterCount.set(
                    rightChar,
                    characterCount.get(rightChar) + 1
                );
            }
            // console.log(characterCount);
            // console.log(input.substring(left, right + 1));
            right++;
        }

        return longestLength;
    }
}

var solution = new Solution();
console.log(solution.longestSubstring("abcabcbb")); // 3
console.log(solution.longestSubstring("bbbbb")); // 1
console.log(solution.longestSubstring("pwwkew")); // 3
console.log(solution.longestSubstring("abba")); // 2
console.log(solution.longestSubstring("a")); // 1
console.log(solution.longestSubstring("tmmzuxt")); // 5

// Time-complexity: O(n)
// Space-complexity: O(1)
