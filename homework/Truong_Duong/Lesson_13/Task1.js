function solution(arr) {
  const size = arr.length;
  let res = -1;
  let s = 0, f = 0;

  while (s < size) {
    if (arr[s] < 0) {
      s += 1;
      continue;
    }

    f = s;
    let tempSum = arr[s];
    while (f + 1 < size && arr[f + 1] >= 0) {
      f += 1;
      tempSum += arr[f];
    }
    res = Math.max(res, tempSum);
    s = f + 1;
  }

  return res;
}

console.log(solution([1, 2, -3, 4, 5, -6]) === 9);
console.log(solution([-1, -2, -3]) === -1);
console.log(solution([-1, 2, -3]) === 2);
console.log(solution([-1, 2, 3]) === 5);
console.log(solution([-1, -2, -3, 0]) === 0);
