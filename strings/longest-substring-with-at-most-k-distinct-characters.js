// Problem:
// Given a string s, find the length of the longest substring that contains at most k distinct characters.

// Example 1:
// Input: s = "eceba", k = 2
// Output: 3
// Explanation: The substring "ece" has 2 distinct characters ('e' and 'c') and is the longest valid substring.

// Example 2:
// Input: s = "aa", k = 1
// Output: 2
// Explanation: The substring "aa" has 1 distinct character and is the longest valid substring.

// Constraints:
// 1 <= s.length <= 10^5
// s consists of lowercase English letters.
// 1 <= k <= 26

class Solution {
    /**
     *
     * @param {string} s
     * @param {number} k
     */
    longestSubstring(s, k) {
        if (k == 0) return 0;

        var charCounts = new Map();
        var left = 0;
        var right = 0;
        var longestLength = 0;
        var distinctCharacterCount = 0;
        // console.log(s, k);
        while (right < s.length) {
            var rightChar = s[right];
            // console.log(s.substring(left, right + 1));
            if (!charCounts.has(rightChar) || charCounts.get(rightChar) == 0) {
                charCounts.set(rightChar, 1);
                distinctCharacterCount++;
                while (distinctCharacterCount > k) {
                    var leftChar = s[left];
                    charCounts.set(leftChar, charCounts.get(leftChar) - 1);
                    if (charCounts.get(leftChar) == 0) {
                        distinctCharacterCount--;
                    }
                    left++;
                }
                if (left > right) {
                    right = left;
                } else {
                    longestLength = Math.max(longestLength, right - left + 1);
                    right++;
                }
            } else {
                charCounts.set(rightChar, charCounts.get(rightChar) + 1);
                longestLength = Math.max(longestLength, right - left + 1);
                right++;
            }

            // console.log(charCounts, longestLength);
        }

        return longestLength;
    }
}

// Time-complexity: O(n)
// Space-complexity: O(1)

const solution = new Solution();
console.log(solution.longestSubstring("eceba", 2)); // 3
console.log(solution.longestSubstring("aa", 1)); // 2
console.log(solution.longestSubstring("", 1)); // 0
console.log(solution.longestSubstring("aaaaa", 1)); // 5
console.log(solution.longestSubstring("abc", 0)); // 0
console.log(solution.longestSubstring("ab", 3)); // 2
console.log(solution.longestSubstring("abaccc", 2)); // 4
console.log(solution.longestSubstring("aabbbcccc", 2)); // 7
