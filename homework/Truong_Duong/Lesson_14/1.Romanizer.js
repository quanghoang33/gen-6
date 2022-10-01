// Important rule
// I can be placed before V or X
// X can be placed before L or C
// C can be placed before D or M

function convertNumberToRoman(number) {
  let ans = '';
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  let i = 0;
  while (number !== 0) {
    while (i < values.length) {
      if (number < values[i]) i++;
      else {
        ans += romans[i];
        number -= values[i];
      }
    }
  }
  return ans;
}

function solution(arr) {
  for (const number of arr) {
    console.log(convertNumberToRoman(number));
  }
}

solution([75, 80, 99, 100, 50])