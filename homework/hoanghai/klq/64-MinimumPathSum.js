/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {
    let m = grid.length
    let n = grid[0].length
    let DPMatrix = Array.from(Array(m), () => new Array(n))
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            DPMatrix[i][j] = 0
        }
    }
    DPMatrix[0][0] = grid[0][0]
    for (let i = 1; i < m; i++) {
        DPMatrix[i][0] = DPMatrix[i-1][0] + grid[i][0] 
    }
    for (let j = 1; j < n; j++) {
        DPMatrix[0][j] = DPMatrix[0][j-1] + grid[0][j]
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            DPMatrix[i][j] = Math.min(DPMatrix[i-1][j], DPMatrix[i][j-1]) + grid[i][j]
        }
    }
    return DPMatrix[m-1][n-1]
};