/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

// 3
// [[0,1],[0,2],[1,2]]
var canFinish = function(numCourses, prerequisites) {
    let graph = []
    for (let i = 0; i < numCourses; i++) {
        graph[i] = []
    }
    for (let pre of prerequisites) {
        [start, end] = pre
        graph[start].push(end)
    } // adjancy graph
    let visited = new Array(numCourses).fill(false) // visited: da ghe tham dinh
    let complete = new Array(numCourses).fill(false) // complete: da hoan thanh mon hoc nay roi

    function dfs(v) {
        visited[v] = true
        for (let course of graph[v]) {
            if (visited[course] == false && complete[course] == false){ // neu dinh nay chua duoc tham 1 lan nao
                if (dfs(course)) { // tien hanh duyet chieu sau de di xa nhat co the.
                    complete[course] = true
                }
                else {
                    return false
                }
            } else if (visited[course] == true && complete[course] == false) { // neu dinh nay da duoc tham truoc do va chua hoan thanh
                return false
            }
        }
        return true
    }
    for (let i = 0; i < numCourses; i++) {
        if (visited[i] == false && complete[i] == false) {
            if(dfs(i)) {
                complete[i] = true
            }
            else {
                return false
            }
        }
        else if (visited[i] == true && complete[i] == false) {
            return false
        }
    }

    return true
};