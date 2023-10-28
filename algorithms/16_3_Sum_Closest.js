var threeSumClosest = function (nums, target) {
  let result = Number.MAX_SAFE_INTEGER;
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (Math.abs(target - sum) < Math.abs(target - result)) result = sum;
      if (sum > target) k--;
      else j++;
    }
  }

  return result;
};

threeSumClosest([-1, 2, 1, -4], 1);
