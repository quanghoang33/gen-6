class Solution {
    
struct MyComp {
    bool operator () (const vector<int>& a, const vector<int>& b) {
        return a[0] == b[0] ? a[1] < b[1] : a[0] < b[0];
    }   
};
    
public:
    int minMeetingRooms(vector<vector<int>>& intervals) {
        sort(intervals.begin(), intervals.end(), MyComp());
        priority_queue <int, vector<int>, greater<int>> roomQueue;
        
        for (auto i: intervals) {
            if (!roomQueue.size() || i[0] < roomQueue.top()) {
                roomQueue.push(i[1]);
            } else {
                roomQueue.pop();
                roomQueue.push(i[1]);
            }
        }
        
        return roomQueue.size();
    }
};