// Solution for https://leetcode.com/problems/minimum-path-sum/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const R = grid.length;
  const C = grid[0].length;

  const data = new Array(R);
  for (let i = 0; i < R; i++) {
    data[i] = new Array(C);
  }

  data[0][0] = grid[0][0];
  for (let i = 1; i < R; i++) {
    data[i][0] = data[i - 1][0] + grid[i][0];
  }

  for (let j = 1; j < C; j++) {
    data[0][j] = data[0][j - 1] + grid[0][j];
  }

  for (let i = 1; i < R; i++) {
    for (let j = 1; j < C; j++) {
      data[i][j] = Math.min(data[i - 1][j], data[i][j - 1]) + grid[i][j];
    }
  }

  return data[R - 1][C - 1];
};