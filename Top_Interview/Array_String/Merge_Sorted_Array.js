var merge = function (nums1, m, nums2, n) {
  if(m===0) {
    for(let i=0; i<nums1.length; i++) {
      nums1[i] = nums2[i]
    }
    return
  }
  let l = m-1
  let r = m+n-1

  let ins = n
  while(ins>0){
    if(nums2[ins-1]>=nums1[l]) {
      nums1[r] = nums2[ins-1]
      r--
      ins--
    }
    else {
      nums1[r] = nums1[l]
      nums1[l] = -Infinity
      if(l>0) l--
      if(r==0) break
      else r--
    }
  }
};


let nums1 = [0,0,3,0,0,0,0,0,0];
let nums2 = [-1,1,1,1,2,3];

merge(nums1, 3, nums2, 6);
console.log(nums1);
