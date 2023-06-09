function solution(arr) {
  let ans = -1;

  const size = arr.length;
  let totalSum = 0;
  for(let ele of arr) totalSum += ele;

  let prefixSum = 0;
  for(let i = 0; i < size; i++) {
    if(prefixSum === (totalSum - arr[i] - prefixSum)) return i;

    prefixSum += arr[i];
  }

  return ans;
}

const arr = [-1, 3, -4, 5, 1, -6, 2, 1];
console.log(solution(arr));