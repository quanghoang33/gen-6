class Solution {
public:
    int findNumberOfLIS(vector<int>& nums) {
        if(nums.empty()) return 0;
        int leng = nums.size();
        vector<int> dp(leng,0);
        vector<int> l(leng,1);
        int longest = 0;
        
        for(int i = 1; i < leng; ++i) {
            for(int j = 0; j < i; ++j) {
                if(nums[i] > nums[j]) {
                    if(dp[j] >= dp[i]) {
                        dp[i] = 1 + dp[j];
                        l[i] = l[j];
                    } else if(dp[j] + 1 == dp[i]) {
                        l[i] += l[j];
                    }
                }
            }
            longest = max(longest, dp[i]);
        }
        int res = 0;
        for(int i = 0; i < leng; ++i) {
            if(dp[i] == longest) res += l[i];
        }
        return res;
    }
};