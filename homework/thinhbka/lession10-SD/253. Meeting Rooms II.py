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