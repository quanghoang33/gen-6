class Solution {
public:
    int minCostClimbingStairs(vector<int>& cost) {
        int length = cost.size();
        
        for (int i = 2; i < length; ++i) 
            cost[i] += cost[i-1] <= cost[i-2] ? cost[i-1] : cost[i-2];
        
        return cost[length-2] >= cost[length-1] ? cost[length-1] : cost[length-2];
    }
};