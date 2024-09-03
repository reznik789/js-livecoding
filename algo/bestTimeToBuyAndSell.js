const LIMIT = 2;

/**
 * Мемоизация функции.
 * @param {Function} fn - Исходная функция.
 * @returns {Function} Мемоизированная функция.
 */
function memoize(func) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    } else {
      const result = func.apply(this, args);
      cache.set(key, result);
      return result;
    }
  };
}

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  /**
   * @param {number} idx
   * @param {boolean | 0 | 1} taken
   * @param {number} count
   */
  const buySell = memoize((idx, taken, count) => {
    if (idx === prices.length && taken) return -Infinity;
    if (idx === prices.length) return 0;
    if (count === LIMIT) return 0;
    if (taken)
      return Math.max(
        buySell(idx + 1, 1, count),
        prices[idx] + buySell(idx + 1, 0, count + 1)
      );
    return Math.max(
      buySell(idx + 1, taken, count),
      -prices[idx] + buySell(idx + 1, 1, count)
    );
  });

  const buySell2 = () => {
    let count = 0;
    const dp = [
      [0, 0],
      [-Infinity, 0],
    ];
    const yes = 1;
    const no = 0;
    for (let i = prices.length - 1; i >= 0; i--) {
      const curIdx = i % 2;
      const prevIdx = (i + 1) % 2;
      //   dp[curIdx][yes] = Math.max(dp[prevIdx][yes], prices[i] + dp[prevIdx][no]);
      if (
        dp[prevIdx][yes] <
        prices[i] + (count === LIMIT ? 0 : dp[prevIdx][no])
      ) {
        dp[curIdx][yes] = prices[i] + (count === LIMIT ? 0 : dp[prevIdx][no]);
        count++;
      } else {
        dp[curIdx][yes] = dp[prevIdx][yes];
      }
      dp[curIdx][no] = Math.max(dp[prevIdx][no], -prices[i] + dp[prevIdx][yes]);
    }
    return dp[0][0];
  };

  return buySell2();
};
