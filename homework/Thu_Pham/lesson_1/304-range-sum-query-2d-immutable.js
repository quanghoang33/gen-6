//Solution for https://leetcode.com/problems/range-sum-query-2d-immutable/

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  this.rows = matrix.length;
  this.cols = matrix[0].length;
  this.sum = Array(this.rows + 1)
    .fill()
    .map(() => Array(this.cols + 1).fill(0)); //O(rows * cols)

  for (let i = 1; i <= this.rows; i++) { // O(rows * cols)
    for (let j = 1; j <= this.cols; j++) {
      this.sum[i][j] =
        this.sum[i][j - 1] +
        this.sum[i - 1][j] -
        this.sum[i - 1][j - 1] +
        matrix[i - 1][j - 1];
    }
  }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  return (
    this.sum[row2 + 1][col2 + 1] -
    this.sum[row2 + 1][col1] -
    this.sum[row1][col2 + 1] +
    this.sum[row1][col1]
  ); //O(1)
};

//runtime O(rows * cols + rows * cols)
//space O(rows * cols)

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
