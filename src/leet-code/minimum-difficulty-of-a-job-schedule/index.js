const minDifficulty = function(jobDifficulty, d) {
    const memo = Array.from({ length: d }, () => Array.from({ length: jobDifficulty.length }))

    if (jobDifficulty.length < d) return -1;

    const callstack = [];
    function dp(jobIndex, dayIndex) {
        callstack.push([jobIndex, dayIndex])
        if (dayIndex === d - 1) {
            return Math.max(...jobDifficulty.slice(jobIndex));
        }
        if (memo[dayIndex][jobIndex] !== undefined) {
            return memo[dayIndex][jobIndex]
        }
        const jobMaxCount = jobDifficulty.length - (d - 1 - dayIndex) - jobIndex;
        const invocationArray = [];
        for (let jobCountToday = 1; jobCountToday <= jobMaxCount; jobCountToday++) {
            invocationArray.push(jobCountToday);
        }
        memo[dayIndex][jobIndex] = Math.min(...invocationArray.map((jobCountToday) => {
            const diffToday = jobDifficulty.slice(jobIndex, jobIndex + jobCountToday)
            const result = Math.max(...diffToday)
            return result + dp(jobIndex + jobCountToday, dayIndex + 1);
        }))
        return memo[dayIndex][jobIndex]
    }
    const result =  dp(0, 0);
    return result;
};

module.exports = { minDifficulty };