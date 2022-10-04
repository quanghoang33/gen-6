class Solution:
    def getModifiedArray(self, length: int, updates: List[List[int]]) -> List[int]:
        ans = [0]*(length+1)
        for u in updates:
            startIdx = u[0]
            endIdx = u[1]
            value = u[2]
            ans[startIdx]+=value
            ans[endIdx+1]-=value
        for i in range(1,length+1):
            ans[i] += ans[i-1]
        ans.pop()
        return ans