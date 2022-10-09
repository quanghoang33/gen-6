/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
// [[0,0,0],[0,1,0],[0,0,0]]
// [[0,0,0],[0,1,0],[1,1,1]]
const maximum = 99999
var updateMatrix = function(mat) {
    let rows = mat.length
    let cols = mat[0].length
    const neighbor = [
        {x: -1 , y: 0},
        {x: 0, y: 1},
        {x: 1 , y: 0},
        {x: 0, y: -1}
    ]
    let distance = []
    for (let i = 0; i < rows; i++) {
        distance[i] = []
    }
    let queue = []
    for(let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if(mat[i][j] === 0) {
                distance[i][j] = 0
                queue.push({i,j})
            }
            if (mat[i][j] === 1) {
                distance[i][j] = maximum
            }
        }
    }
    while(queue.length > 0) {
        let examineCell = queue[0]
        queue.shift()
        for (let item of neighbor) {
            let newR = item['x'] + examineCell['i']
            let newC = item['y'] + examineCell['j']
            if (newR >= 0 && newC >= 0 && newR < rows && newC < cols) {
                // Just neighbor inside matrix
                if (distance[newR][newC] > distance[examineCell['i']][examineCell['j']] + 1) {
                    distance[newR][newC] = distance[examineCell['i']][examineCell['j']] + 1
                    queue.push({
                        i: newR,
                        j: newC
                    })
                }
            }
        }

    }

    return distance
};