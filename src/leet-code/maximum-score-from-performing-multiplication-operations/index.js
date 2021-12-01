/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
var maximumScore = function(nums, multipliers) {
    const memo = {};
    function dp(left, i) {
        if (multipliers.length === i) {
            return 0;
        }
        if (memo[`${left},${i}`] !== undefined) {
            return memo[`${left},${i}`];
        }
        const currentM = multipliers[i];
        memo[`${left},${i}`] = Math.max(
            nums[left] * currentM + dp(left + 1, i + 1),
            nums[nums.length - 1 - (i - left)] * currentM + dp(left, i + 1)
        );
        return memo[`${left},${i}`];
    }
    return dp(0, 0);
};

module.exports = { maximumScore }