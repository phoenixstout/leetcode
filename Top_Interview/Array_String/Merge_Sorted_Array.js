var merge = function (nums1, m, nums2, n) {
  if (m === 0) {
    for (let i = 0; i < nums1.length; i++) {
      nums1[i] = nums2[i];
    }
    return;
  }
  let p = nums2.length - 1;
  for (let i = nums1.length - 1; i > 0; i--) {
    i
    if(p<0) break
    if (nums2[p] > nums1[i - 1]) {
      nums1[i] = nums2[p];
      p--;
    } else {
      [nums1[i - 1], nums1[i]] = [nums1[i], nums1[i - 1]];
      nums1;
    }
  }
  if(p===0) {
    nums1[0] = nums2[0]
  }
};

let nums1 = [2, 0];
let nums2 = [1];

merge(nums1, 1, nums2, 1);
console.log(nums1);
