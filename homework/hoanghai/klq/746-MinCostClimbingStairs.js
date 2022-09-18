/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
    let dynamicCost = []
    let last = cost.length
    dynamicCost[0] = cost[0]
    dynamicCost[1] = cost[1]
    let index = 2
    while(index < last) {
        dynamicCost[index] = Math.min(dynamicCost[index-1] + cost[index], dynamicCost[index-2] + cost[index])
        index++
    }
    return Math.min(dynamicCost[last-1], dynamicCost[last-2])
};