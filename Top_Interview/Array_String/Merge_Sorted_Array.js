var merge = function (nums1, m, nums2, n) {
  let a = m - 1;
  let b = n - 1;
  let c = m+n -1;

  while (b>=0) {
    let ins = nums2[b]
    if(ins> nums1[a]) {
        nums1[c] = ins
        c-=1
        b-=1
    }
    else {
        nums1[c] = nums1[a]
        a -=1
        c-=1
    }
  }
};

let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];

merge(nums1, 3, nums2, 3);
console.log(nums1);
