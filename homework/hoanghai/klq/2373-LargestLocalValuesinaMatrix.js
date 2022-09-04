/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
 var largestLocal = function(grid) {
    // Buoc 1, toi uu theo tung hang, chon cua so truot size = 3 de hinh thanh matran size n x (n-2)
    // Buoc 2, toi uu theo cot, de hinh thanh ma tran size (n-2) x (n-2)
    let row = col = grid.length
    let brideStep = Array.from(Array(row), () => new Array(col-2).fill(-1))
    let result = Array.from(Array(row-2), () => new Array(col-2).fill(-1))
    for (let i = 0; i < row ; i++) {
        for (let j = 0; j < col-2; j++) {
            brideStep[i][j] = Math.max(grid[i][j], grid[i][j+1], grid[i][j+2])
        }
    }
    for (let i = 0; i < row - 2; i++) {
        for (let j = 0; j < col - 2; j++) {
            result[i][j] = Math.max(brideStep[i][j], brideStep[i+1][j], brideStep[i+2][j])
        }
    }
    return result
};
// About space: we create new array size n x (n-2) and array size (n-2) * (n-2) so total is n^2
// Time: the first for loop we caculate on (n * (n-2)) item, second we caculate (n-2) * (n-2) => n^2