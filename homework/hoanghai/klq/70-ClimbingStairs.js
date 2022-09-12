/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    let remember = [0,1,2,3,5]
    let i = 3
    while (i <= 45) {
        remember[i] = remember[i-1] + remember[i-2]
        i++
    }
    return remember[n]
};