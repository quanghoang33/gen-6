class Solution:
    def maximizeSweetness(self, sweetness: List[int], k: int) -> int:
        def canSplit(arr,value):
            chunks = 0
            s = 0
            for e in arr:
                s+=e
                if s >= value:
                    chunks+=1
                    s = 0
                
            return chunks
        low = 0
        high = int(1e9)
        res = -1
        while low <= high:
            mid = (low+high)>>1
            if canSplit(sweetness,mid) >= k+1:
                res = mid
                low = mid+1
            else:
                high = mid-1
        return res