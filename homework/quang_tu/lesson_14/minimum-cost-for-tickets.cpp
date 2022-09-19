class Solution {
public:
    int getDayOfLassPass(int today, int passDay) {
        int a = today - passDay;
        return a < 0 ? 0 : a;
    }
    
    int mincostTickets(vector<int>& days, vector<int>& costs) {
        int totalDay = days.back();
        vector<int> costDay (totalDay + 1, 0);
        
        for (int i = 0, j = 0; i < days.size(); ++i) {
            int c = costDay[j];
            
            while (j < days[i]) {
                costDay[j] = c;
                j++;
            }
            
            costDay[days[i]] = min({
                    costDay[getDayOfLassPass(days[i], 1)] + costs[0],
                    costDay[getDayOfLassPass(days[i], 7)] + costs[1],
                    costDay[getDayOfLassPass(days[i], 30)] + costs[2],
                });
        }
        
        return costDay.back();
    }
};