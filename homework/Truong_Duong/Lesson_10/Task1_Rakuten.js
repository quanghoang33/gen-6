function solution(arr) {
  let temp1 = 0, temp2 = 0;

  arr.forEach((val, idx) => {
    if(idx % 2 === 0 && arr[idx] === 1) temp1 += 1;
    if(idx % 2 === 1 && arr[idx] === 0) temp1 += 1;

    if(idx % 2 === 0 && arr[idx] === 0) temp2 += 1;
    if(idx % 2 === 1 && arr[idx] === 1) temp2 += 1;
  });

  return Math.min(temp1, temp2);
}


let arr = [1, 0, 1, 0, 1, 1];
console.log(solution(arr) === 1);
arr = [1, 1, 0, 1, 1];
console.log(solution(arr) === 2);
arr = [0, 1, 0];
console.log(solution(arr) === 0);
arr = [0, 1, 1, 0];
console.log(solution(arr) === 2);


