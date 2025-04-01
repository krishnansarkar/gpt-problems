// Problem: Subarray Product Less Than K
// Given an array of integers nums and an integer k,
// return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

// Example 1:
// Input: nums = [10, 5, 2, 6], k = 100
// Output: 8
// Explanation: The 8 subarrays with products less than 100 are:
// [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], and [5, 2, 6].

// Example 2:
// Input: nums = [1, 2, 3], k = 0
// Output: 0

// Constraints:
// 1 <= nums.length <= 3 * 10^4
// 1 <= nums[i] <= 1000
// 0 <= k <= 10^6

class Solution {
    /**
     *
     * @param {Array} nums
     * @param {number} k
     * @returns {number}
     */
    subArrays(nums, k) {
        var result = 0;
        var left = 0;
        var right = 0;
        var product = 1;
        while (right < nums.length) {
            // console.log("window: " + nums.slice(left, right + 1));
            product *= nums[right];
            while (product >= k && left <= right) {
                product /= nums[left];
                left++;
            }
            if (left <= right) {
                result += right - left + 1;
                // let l = left;
                // let newSubarrays = [];
                // while (l <= right) {
                //     newSubarrays.push(nums.slice(l, right + 1));
                //     l++;
                // }
                // console.log(newSubarrays);
            }
            right++;
        }
        return result;
    }
}

var solution = new Solution();
console.log(solution.subArrays([10, 5, 2, 6], 100)); // 8
console.log(solution.subArrays([1, 2, 3], 0)); // 0
console.log(solution.subArrays([100], 50)); // 0
console.log(solution.subArrays([1, 1, 1], 1)); // 0
console.log(solution.subArrays([100, 1, 1], 10)); // 3
