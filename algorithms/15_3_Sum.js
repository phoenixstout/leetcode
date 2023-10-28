var threeSum = function (nums) {
  let results = [];

  if (nums.length < 3) return results;

  nums = nums.sort((a, b) => (a > b ? 1 : -1));
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      var sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        results.push([nums[i], nums[j], nums[k]]);

        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;
        j++;
        k--;
      } else sum > 0 ? (k -= 1) : (j += 1);
    }
  }
  return results;
};

threeSum([-1, 0, 1, 2, -1, -4]);
