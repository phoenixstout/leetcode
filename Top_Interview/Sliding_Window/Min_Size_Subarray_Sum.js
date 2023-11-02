var minSubArrayLen = function (target, nums) {
  let start = 0
  let end = 0
  let minValue = Infinity
  let subArraySum = nums[0]
  while(start<=end && end<nums.length) {
    if(subArraySum>=target) {
        minValue = Math.min(end-start +1, minValue)
        subArraySum -= nums[start]
        start +=1
    }
    else {
        end += 1
        subArraySum += nums[end]
    }
  }
  return minValue == Infinity ? 0 : minValue
};

minSubArrayLen(11, [1,2,3,4,5]);