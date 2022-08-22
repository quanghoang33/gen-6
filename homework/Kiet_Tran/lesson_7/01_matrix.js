/**
 * https://leetcode.com/problems/01-matrix/
 * 
 * @param {*} mat 
 * @returns 
 */
var updateMatrix = function(mat) {
    var rows = mat.length;
    if (rows === 0) {
        return mat;
    }

    var cols = mat[0].length;
    var distance = [];
    var queue = [];

    for (i = 0; i < rows; i++) {
        distance[i] = [];
        for (j = 0; j < cols; j++) {
            if (mat[i][j] === 0) {
                distance[i][j] = 0;
                queue.push({i, j});
            }
        }
    }

    var direction = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];

    while (queue.length) {
        var curr = queue[0];
        queue.pop();
        for (i = 0; i < 4; i++) {
            var newRow = curr[0] + direction[i][0];
            var newCol = curr[1] + direction[i][1];
            if (newRow >= 0 && newCol >= 0 && newRow < rows && newCol < cols) {
                if (distance[newRow][newCol] > distance[curr[0]][curr[1]] + 1) {
                    distance[newRow][newCol] = distance[curr[0]][curr[1]] + 1;
                    queue.push({newRow, newCol});
                }
            }
        }
    }

    return distance;
};
