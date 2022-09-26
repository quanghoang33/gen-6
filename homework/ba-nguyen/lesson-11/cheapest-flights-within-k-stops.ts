function findCheapestPrice(
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number
): number {
  const hashMap = new Map();

  for (const flight of flights) {
    if (!hashMap.has(flight[0])) {
      hashMap.set(flight[0], []);
    }
    hashMap.get(flight[0]).push(flight.slice(1));
  }

  const queue: number[][] = [[src, 0]];
  const distances: number[] = Array(n).fill(Number.MAX_SAFE_INTEGER);
  k++;

  while (!!queue.length && k-- >= 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const [currPos, cost] = queue.shift() as number[];

      if (cost > distances[currPos]) continue;
      distances[currPos] = cost;

      if (!hashMap.get(currPos)) continue;
      for (const next of hashMap.get(currPos)) {
        if (cost + next[1] <= distances[next[0]]) {
          queue.push([next[0], cost + next[1]]);
        }
      }
    }
  }

  return distances[dst] === Number.MAX_SAFE_INTEGER ? -1 : distances[dst];
}
