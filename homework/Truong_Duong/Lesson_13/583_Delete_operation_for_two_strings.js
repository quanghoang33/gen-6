// Solution for https://leetcode.com/problems/delete-operation-for-two-strings/

// ans = len(s1) + len(s2) - LCS(s1, s2) * 2

function LCS(word1, word2) {
  const N1 = word1.length;
  const N2 = word2.length;

  const dp = new Array(N1 + 1);
  for (let i = 0; i < N1 + 1; i++) {
    dp[i] = new Array(N2 + 1).fill(0
  for (let i = 1; i < N1 + 1; i++) {
    for (let j = 1; j < N2 + 1; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[N1][N2];
}

var minDistance = function (word1, word2) {
  return word1.length + word2.length - 2 * LCS(word1, word2);
};