export function coinChange(_coins: number[], amount: number): number {
    const coins = _coins.reverse();
    const memo = Array.from({ length: coins.length }, (_, i) => ({}))

    function dp(i: number, amountLeft: number): number {
        // @ts-ignore
        if (memo[i][amountLeft] !== undefined) {
            // @ts-ignore
            return memo[i][amountLeft]
        }
        if (amountLeft === 0) {
            // @ts-ignore
            memo[i][amountLeft] = 0;
            // @ts-ignore
            return memo[i][amountLeft];
        }
        if (i === coins.length-1) {
            const div = amountLeft / coins[i]
            const weight = div === Math.floor(div) ? div : Infinity;
            // @ts-ignore
            memo[i][amountLeft] = weight;
            // @ts-ignore
            return memo[i][amountLeft];
        }
        // 7 / 2 = 3.5 iA = [0, 1, 2, 3]
        // 2 / 10 = 0.2 iA = [0]
        const div = Math.floor(amountLeft / coins[i]);
        const invocArray = Array.from({ length: div + 1 }, (_, index) => index);

        // @ts-ignore
        memo[i][amountLeft] = Math.min(...invocArray.map((k) => k + dp(i+1, amountLeft - coins[i]*k)))
        // @ts-ignore
        return memo[i][amountLeft];
    }

    const result = dp(0, amount);
    console.log(memo)
    if (result === Infinity) return -1
    return result;
}
