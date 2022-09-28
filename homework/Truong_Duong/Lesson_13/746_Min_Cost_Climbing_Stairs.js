// Solution for https://leetcode.com/problems/min-cost-climbing-stairs/

/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
  const size = cost.length;
  const f = new Array(size).fill(0); // f[i] minimum cost that ended at ith
  f[0] = cost[0];
  f[1] = cost[1];
  
  for(let i = 2; i < size; i++) {
      f[i] = Math.min(f[i-1], f[i-2]) + cost[i];
  }
  return Math.min(f[size-1], f[size-2]);
};