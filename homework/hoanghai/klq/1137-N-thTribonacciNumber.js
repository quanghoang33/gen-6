/**
 * @param {number} n
 * @return {number}
 */
 var tribonacci = function(n) {
  let triFibo = [0,1,1]
  let i = 3;
  while (i < 38) {
      let num = triFibo[i-1] + triFibo[i-2] + triFibo[i-3]
      triFibo.push(num)
      i++
  }
  return triFibo[n]
};