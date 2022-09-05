// Solution for https://leetcode.com/problems/path-with-maximum-probability/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
 var maxProbability = function(n, edges, succProb, start, end) {
  const adjList = {};
  const dists = new Array(n).fill(Number.MIN_SAFE_INTEGER);
  
  for (let i = 0; i < n; i++) {
      adjList[i] = [];
  }
  
  for (let i = 0; i < edges.length; i++) {
      const [u, v] = edges[i];
      const w = succProb[i];
      
      adjList[u].push([v, w]);
      adjList[v].push([u, w]);
  }
  
  const maxHeap = new MaxPriorityQueue({ priority: x => x[1]});
  maxHeap.enqueue([start, 1]);
  
  while(!maxHeap.isEmpty()) {
      const [u, distU] = maxHeap.dequeue().element;
      
      if(u === end) return distU;
      if(dists[u] > distU) continue;
      
      for (const [v, w] of adjList[u]) {
          if (distU * w > dists[v]) {
              dists[v] = distU * w;
              maxHeap.enqueue([v, dists[v]]);
          }
      }
  }
  
  return 0;
};