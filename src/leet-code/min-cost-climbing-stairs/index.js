var minCostClimbingStairs = function(cost) {
    const memo = {};
    function dp(list) {
        if (memo[list.length] !== undefined) {
            return memo[list.length];
        }
        if (list.length === 2) {
            memo[list.length] = Math.min(...list);
            return memo[list.length];
        }
        if (list.length === 1) {
            memo[1] = list[0];
            return memo[1];
        }
        if (list.length === 0) {
            memo[0] = 0;
            return memo[0];
        }
        memo[list.length] = Math.min(list[0] + dp(list.slice(1), list[1] + list.slice(2));
        return memo[list.length];
    }
    return dp(cost);
};

module.exports = { minCostClimbingStairs };