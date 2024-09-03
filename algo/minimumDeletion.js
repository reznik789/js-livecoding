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
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function (s) {
  const N = s.length;
  let run = memoize(
    /**
     *
     * @param {number} idx
     * @param {boolean | 0 | 1} taken
     * @param {number} total
     * @returns number
     */
    (idx, taken, total) => {
      if (idx >= N) return total;
      if (taken) {
        return s[idx] === "a"
          ? run(idx + 1, taken, total + 1)
          : run(idx + 1, taken, total);
      } else {
        if (s[idx] === "a") return run(idx + 1, 0, total);
        return Math.min(run(idx + 1, 0, total + 1), run(idx + 1, 1, total));
      }
    }
  );
  // return run(0, 0, 0);
  const run2 = () => {
    const dp = Array.from({ length: N + 1 }, () => [0, 0]);
    const notTaken = 0;
    const taken = 1;
    for (let i = N - 1; i >= 0; i -= 1) {
      if (s[i] === "a") {
        dp[i][notTaken] = dp[i + 1][notTaken];
        dp[i][taken] = dp[i + 1][taken] + 1;
      } else {
        dp[i][notTaken] = Math.min(dp[i + 1][notTaken] + 1, dp[i + 1][taken]);
        dp[i][taken] = dp[i + 1][taken];
      }
    }
    return dp[0][0];
  };
  // return run2();
  const run3 = () => {
    const notTaken = 0;
    const taken = 1;
    let next = [0, 0];
    let curr = [0, 0];
    for (let i = N - 1; i >= 0; i -= 1) {
      if (s[i] === "a") {
        curr[notTaken] = next[notTaken];
        curr[taken] = next[taken] + 1;
      } else {
        curr[notTaken] = Math.min(next[notTaken] + 1, next[taken]);
        curr[taken] = next[taken];
      }
      next = curr;
    }
    return curr[0];
  };
  // return run3();
  const run4 = () => {
    let notTaken = 0;
    let taken = 1;
    let nextNotTaken = 0;
    let nextTaken = 0;

    for (let i = N - 1; i >= 0; i -= 1) {
      if (s[i] === "a") {
        notTaken = nextNotTaken;
        taken = nextTaken + 1;
      } else {
        notTaken = Math.min(nextNotTaken + 1, nextTaken);
        taken = nextTaken;
      }
      nextNotTaken = notTaken;
      nextTaken = taken;
    }

    return notTaken;
  };
  // return run4();
  const run5 = () => {
    let notTaken = 0;
    let taken = 1;
    let nextNotTaken = 0;
    let nextTaken = 0;

    for (let i = 0; i < N; i += 1) {
      if (s[i] === "a") {
        notTaken = nextNotTaken;
        taken = nextTaken + 1;
      } else {
        notTaken = Math.min(nextNotTaken + 1, nextTaken);
        taken = nextTaken;
      }
      nextNotTaken = notTaken;
      nextTaken = taken;
    }

    return notTaken;
  };

  return run5();
};

console.log(minimumDeletions("aababbab"));

console.log(minimumDeletions("bbaaaaabb"));
