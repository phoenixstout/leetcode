import { Queue } from "@datastructures-js/queue";

var maxSubarraySumCircular = function (nums) {
    let prevMax = nums[0]
    let m = nums[0]
    let prevMin = nums[0]
    let min = nums[0]
    let max = nums[0]
    let t = nums[0]

    for(let i = 1; i<nums.length; i++) {
        let c = nums[i]

        prevMax = Math.max(c, c+prevMax)
        max = Math.max(max, prevMax)
        prevMin = Math.min(c, c+prevMin)
        min = Math.min(min, prevMin)
        t+=c
    }

    return max < 0 ?  max : Math.max(max, t-min)
};

maxSubarraySumCircular([5,-3,5]);