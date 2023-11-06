function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// do it with pointers for optimization
var sortedArrayToBST = function (nums) {
  const help = (beg, end) => {
    if (beg == end) {
      return new TreeNode(nums[beg], null, null);
    }
    let mid = Math.floor((end + beg) / 2);
    if(mid === beg) return new TreeNode(nums[beg], null, help(mid +1, end))
    return new TreeNode(nums[mid], help(beg, mid -1), help(mid +1, end));
  };
  let tree = help(0, nums.length-1);
  return tree;
};

sortedArrayToBST([-10,-3,0,5,9]);
