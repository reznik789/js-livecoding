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
  const LIMIT = 2;
  const N = prices.length;
  const buySell = memoize(
    /**
     * @param {number} idx
     * @param {boolean | 0 | 1} taken
     * @param {number} count
     */
    (idx, taken, count) => {
      if (idx === N && taken) return -Infinity;
      if (idx === N) return 0;
      if (count === LIMIT) return 0;
      if (taken)
        return Math.max(
          buySell(idx + 1, taken, count),
          +prices[idx] + buySell(idx + 1, false, count + 1)
        );
      return Math.max(
        buySell(idx + 1, taken, count),
        -prices[idx] + buySell(idx + 1, true, count)
      );
    }
  );
  // return buySell(0, false, 0);

  const buySell2 = () => {
    const dp = Array.from({ length: LIMIT + 1 }, () =>
      Array.from({ length: N + 1 }, () => [0, -Infinity])
    );
    for (let k = LIMIT - 1; k >= 0; k--) {
      dp[k][N][1] = -Infinity;
      for (let idx = N - 1; idx >= 0; idx--) {
        dp[k][idx][1] = Math.max(
          dp[k][idx + 1][1],
          +prices[idx] + dp[k + 1][idx + 1][0]
        );
        dp[k][idx][0] = Math.max(
          dp[k][idx + 1][0],
          -prices[idx] + dp[k][idx + 1][1]
        );
      }
    }
    console.log(dp);
    return dp[0][0][0];
  };
  // return buySell2();
  const buySell3 = () => {
    const dp = Array.from({ length: LIMIT + 1 }, () =>
      Array.from({ length: N + 1 }, () => 0)
    );
    for (let k = LIMIT - 1; k >= 0; k--) {
      let mP = -Infinity;
      for (let idx = N - 1; idx >= 0; idx--) {
        mP = Math.max(mP, +prices[idx] + dp[k + 1][idx + 1]);
        dp[k][idx] = Math.max(dp[k][idx + 1], -prices[idx] + mP);
      }
    }
    console.log(dp);
    return dp[0][0];
  };
  // return buySell3();
  const buySell4 = () => {
    const dp = Array.from({ length: LIMIT + 1 }, () =>
      Array.from({ length: N + 1 }, () => 0)
    );
    for (let k = 1; k <= LIMIT; k += 1) {
      let mP = -Infinity;
      for (let idx = 1; idx < N; idx += 1) {
        mP = Math.max(mP, -prices[idx] + dp[k - 1][idx - 1]);
        dp[k][idx] = Math.max(dp[k][idx - 1], prices[idx] + mP);
      }
    }
    console.log(dp);
    return dp[LIMIT][N - 1];
  };
  return buySell4();
};

console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4])); // 6

// console.log(maxProfit([1, 2, 3, 4, 5])); // 4

// console.log(maxProfit(7, 6, 4, 3, 1)); // 0
