#Method1: Using heap
import heapq as h
class Solution:
    def minMeetingRooms(self, intervals: List[List[int]]) -> int:
        intervals.sort(key = lambda x:x[0])
        rooms = []
        for i in intervals:
            if not rooms or i[0] < rooms[0]:
                h.heappush(rooms,i[1])
            else:
                h.heappop(rooms)
                h.heappush(rooms,i[1])
        return len(rooms)

#Method2: Using prefix sum
class Solution:
    def minMeetingRooms(self, intervals: List[List[int]]) -> int:
        maxSize = -1
        for i in intervals:
            maxSize = max(maxSize,max(i))
        ans = [0]*(maxSize+5)
        for i in intervals:
            startIdx = i[0]
            endIdx = i[1]
            ans[startIdx]+=1
            ans[endIdx]-=1
        # print(ans)
        for i in range(1,maxSize+5):
            ans[i]+=ans[i-1]
        # print(ans)
        return max(ans)