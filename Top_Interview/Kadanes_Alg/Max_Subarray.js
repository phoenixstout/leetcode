var maxSubArray = function(nums) {
    let maxes = [nums[0]]
    let currmax = nums[0]

    for(let i = 1; i<nums.length; i++) {
        let sum = nums[i] + maxes[i-1]
        if(sum > nums[i]) {
            maxes.push(sum)
        }
        else {
            maxes.push(nums[i])
        }
        currmax = Math.max(currmax, maxes[maxes.length-1])
    }

    return currmax
};

maxSubArray([5,4,-1,7,8])