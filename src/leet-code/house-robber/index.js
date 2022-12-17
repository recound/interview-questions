/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
*/
/*
* Input: nums = [1,2,3,1]
* [1,2,3,4,5,6,7,8,9]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
*
1 <= nums.length <= 100
0 <= nums[i] <= 400

* */

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function(nums) {
    const memo = new Map();
    function rec(i) {
        if (memo.has(i)) return memo.get(i);
        memo.set()
    }
    return rec(0);
};

module.exports = { rob };
