// Given an array of integers nums and an integer k, find the length of the longest contiguous subarray whose sum is at most k.

// Example 1:
// Input: nums = [3, 1, 2, 5, 1, 1, 2, 3], k = 8
// Output: 5
// Explanation: The subarray [1, 2, 5, 1, 1] has sum = 8, which is valid.

// Example 2:
// Input: nums = [2, 3, 1, 2, 4, 3], k = 6
// Output: 3
// Explanation: The subarray [2, 3, 1] or [1, 2, 3] both sum to ≤ 6.

// Constraints:
// 1 <= nums.length <= 10^5
// 1 <= nums[i] <= 10^4
// 1 <= k <= 10^9

class Solution {
    /**
     * @param {array} nums
     * @param {number} target
     * @returns {number}
     */
    longestSubArray(nums, target) {
        if (nums.length == 0) return 0;

        var left = 0;
        var right = 0;
        var sum = nums[0];
        var longestLength = 0;
        while (right < nums.length) {
            if (sum > target) {
                sum -= nums[left];
                left++;
                if (left > right) {
                    right = left;
                    sum = nums[right];
                }
            } else {
                longestLength = Math.max(longestLength, right - left + 1);
                right++;
                sum += nums[right];
            }
            // console.log(longestLength, nums.slice(left, right + 1), sum);
        }

        return longestLength;
    }
}

var solution = new Solution();
console.log(solution.longestSubArray([3, 1, 2, 5, 1, 1, 2, 3], 8)); // 4
console.log(solution.longestSubArray([2, 3, 1, 2, 4, 3], 6)); // 3
console.log(solution.longestSubArray([10], 5)); // 0
console.log(solution.longestSubArray([3], 5)); // 1
console.log(solution.longestSubArray([6, 7, 8, 9], 5)); // 0
console.log(solution.longestSubArray([1, 2, 3, 4, 5], 100)); // 5
console.log(solution.longestSubArray([], 5)); // 0

// Time-complexity: O(n)
// Space-complexity: O(1)
