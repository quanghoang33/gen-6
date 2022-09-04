function isValid(arr, pos) {
  const size = arr.length;
  let maxLeft = arr[0], minRight = arr[size - 1];

  for (let i = 0; i <= pos; i++) {
    maxLeft = Math.max(maxLeft, arr[i]);
  }
  for (let i = pos + 1; i < size; i++) {
    minRight = Math.min(minRight, arr[i]);
  }
  return maxLeft < minRight;
}

function solution(arr) {
  let left = 0, right = arr.length - 1, res = right;

  while (right >= left) {
    const mid = left + Math.floor((right - left) / 2);
    if (isValid(arr, mid)) {
      res = Math.min(res, mid);
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return res + 1;
}

console.log(solution([5, -2, 3, 8, 6]) === 3);
console.log(solution([-5, -5, -5, -42, 6, 12]) === 4);