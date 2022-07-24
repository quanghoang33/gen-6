# Input: nums = [1,0,-1,0,-2,2], target = 0
# Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

# 1 <= nums.length <= 200
# -109 <= nums[i] <= 109
# -109 <= target <= 109
# nums[a] + nums[b] + nums[c] + nums[d] == target
def bSearch(ele,arr,start,end):
    while start<=end:
        mid = (start+end)>>1
        mem = arr[mid]
        if mem == ele:
            return True
        if mem > ele:
            end = mid-1
        else:
            start = mid+1
    return False
class Solution:
    def fourSum(self, nums, target):
        n= len(nums)
        nums.sort()
        # print("hash table ",sum12)
        ans = {}
        for a in range(n):
            for b in range(a+1,n):
                for c in range(b+1,n):
                    s = target-(nums[a]+nums[b]+nums[c])
                    if bSearch(s,nums,c+1,n-1):
                        if (nums[a],nums[b],nums[c],s) not in ans:
                            ans[(nums[a],nums[b],nums[c],s)] = True
        return list(ans.keys())

# Time complexity: O(logN * N**3)
# Space O(1)