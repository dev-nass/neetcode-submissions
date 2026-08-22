class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        nums.sort()
        for val1 in range(1, len(nums)):
            if(nums[val1 - 1] == nums[val1]):
                return True
        return False