var searchInsert = function(nums, target) {
    let start = 0, end = nums.length
    const recur = (start, end) => {
        start
        end
        if(end<=0) return 0
        let mid = Math.floor((start + end)/2)
        mid
        if(nums[mid] === target) return mid
        if(nums[mid]<=target && nums[mid+1]>=target) return mid+1
        else if(nums[mid]>target && nums[mid-1]<target) return mid
        if(nums[mid] > target) return recur(start, mid-1)
        else if(nums[mid] < target) return recur(mid+1, end)
        else return mid
    }

    return recur(start, end)
};

searchInsert([1,3], 2)