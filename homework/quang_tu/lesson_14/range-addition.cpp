class Solution {    
public:
    vector<int> getModifiedArray(int length, vector<vector<int>>& updates) {
        vector<int> res (length, 0);
        
	// init value for prefix sum array
        for (auto up: updates) {
            int start = up[0], end = up[1], inc = up[2];
            res[start] += inc;
            
            if (end + 1 < length)
                res[end + 1] -= inc;
        }
        
	// calculate prefix sum 
        for (int i = 1; i < length; ++i) {
            res[i] += res[i-1];
        }
        
        return res;
    }
};