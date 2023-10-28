var fourSum = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  let output = [];
  loop1:
  for (let i = 0; i < nums.length - 3; i++) {
    if(i>0 && nums[i] === nums[i-1]) continue loop1
    loop2:
    for (let j = i + 1; j < nums.length - 2; j++) {
        if(j>i+1 && nums[j] === nums[j-1]) continue loop2
        let k = j + 1;
        let l = nums.length - 1;
        while (k < l) {
            let sum = nums[i] + nums[j] + nums[k] + nums[l];
            if (sum === target) {
                output.push([nums[i], nums[j], nums[k], nums[l]])};
        if (sum < target) {
          k++;
          while (nums[k] === nums[k - 1]) k++;
        } else {
          l--;
          while (nums[l] === nums[l + 1]) l--;
        }
      }
    }
  }
  return output;
};

fourSum([2, 2, 2, 2, 2], 8);
