// Solution 1: Using Binary Search:
// Time complexity: O(nlogn)

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

// Solution 2: Using prefixSum to save maxValue array from left to right
// ... and minValue from right to left
// Time complexity: O(n)

function solution2(arr) {
  const size = arr.length;
  const maxLefts = new Array(size);
  const minRights = new Array(size);

  maxLefts[0] = arr[0];
  minRights[size - 1] = arr[size - 1];

  for(let i = 1; i < size; i++) {
    maxLefts[i] = Math.max(maxLefts[i-1], arr[i]);
  }
  
  for(let i = size - 2; i >= 0; i--) {
    minRights[i] = Math.min(minRights[i+1], arr[i]);
  }

  for(let i = 0; i < size - 1; i++) {
    if(maxLefts[i] < minRights[i+1]) {
      return i + 1;
    }
  }
}


console.log(solution([5, -2, 3, 8, 6]) === 3);
console.log(solution([-5, -5, -5, -42, 6, 12]) === 4);

console.log(solution2([5, -2, 3, 8, 6]) === 3);
console.log(solution2([-5, -5, -5, -42, 6, 12]) === 4);