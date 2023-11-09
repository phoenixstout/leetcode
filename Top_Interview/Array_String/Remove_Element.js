var removeElement = function (nums, val) {
    let r = nums.length-1
    let l = 0
    while(r>=l) {
        if(nums[r] === val) r--
        else if(nums[l] === val) [nums[l], nums[r]] = [nums[r], nums[l]]
        else l++
    }
    return l
};

let nums = [3, 2, 2, 3];

removeElement(nums, 3);
nums;
