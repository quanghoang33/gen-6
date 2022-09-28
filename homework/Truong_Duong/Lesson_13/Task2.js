function solution(S) {
  let res = 0;

  while (S[0] === '0') {
    S = S.slice(1);
  }

  while (S !== '0') {
    const size = S.length;
    if (S[size - 1] === '0') {
      S = S.slice(0, size - 1);
    } else {
      S = S.slice(0, size - 1) + '0';
    }
    res += 1;
  }

  return res;
}

console.log(solution('011100') === 7);
console.log(solution('111') === 5);
console.log(solution('1111010101111') === 22);
