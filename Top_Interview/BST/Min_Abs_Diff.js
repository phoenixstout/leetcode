class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

var getMinimumDifference = function(root) {
    let queue = [root]
    let arr = []
    let minDiff = Infinity
    while(queue.length>0) {
        let curr = queue.shift()
        if(curr.left) {
            queue.push(curr.left)
        }
        if(curr.right) {
            queue.push(curr.right)
        }
        arr.push(curr.val)
    }

    arr = arr.sort((a,b) => a-b)
    arr
    for(let i = 0; i<arr.length-1; i++) {
        if(arr[i+1] - arr[i] < minDiff) {
            minDiff = arr[i+1] - arr[i]
        }
    }
    return minDiff

};

let root = new TreeNode(3, new TreeNode(9, null, null), new TreeNode(20, new TreeNode(15, null, null), new TreeNode(7, null, null)))

getMinimumDifference(root)