// Solution for https://leetcode.com/problems/cheapest-flights-within-k-stops/

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
 var findCheapestPrice = function(n, flights, src, dst, k) {
  const adjList = {};
  
  for (let i = 0; i < n; i++) {
      adjList[i] = [];
  }
  
  for(const flight of flights) {
      const [u, v, w] = flight;
      adjList[u].push([v, w]);
  }
  
  const minHeap = new MinPriorityQueue({priority: x => x[0]});
  minHeap.enqueue([0, src, k + 1]); // cost, vertex, stops
  
  while(!minHeap.isEmpty()) {
      const [cost, curr, stops] = minHeap.dequeue().element;
      
      if (curr === dst) return cost;
      
      if(stops > 0) {
          for (const next of adjList[curr]) {
              minHeap.enqueue([cost + next[1], next[0], stops - 1]);
          }
      }
  }
  
  return -1;
};