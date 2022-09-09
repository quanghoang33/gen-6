function solution(ranks) {
  let res = 0;
  const set = new Set();
  for (const rank of ranks) {
    set.add(rank);
  }

  for (const rank of ranks) {
    if (set.has(rank + 1)) {
      res += 1;
    }
  }
  return res;
}

console.log(solution([3, 4, 3, 0, 2, 2, 3, 0, 0]) === 5);
console.log(solution([4, 2, 0]) === 0);
console.log(solution([4, 4, 3, 3, 1, 0]) === 3);