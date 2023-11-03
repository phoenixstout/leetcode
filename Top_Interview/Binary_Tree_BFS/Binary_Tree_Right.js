class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

var rightSideView = function(root) {
    if(root == null) return []

    let queue = [[root, 1]]
    let right = []
    let currRight = root.val, currDepth = 1;
    while(queue.length>0) {
        [node, depth] = queue.shift()
        if(depth != currDepth) {
            right.push(currRight)
            currDepth = depth
        }
        currRight = node.val
        if(node.left != null)  queue.push([node.left, depth+1])
        if(node.right != null) queue.push([node.right, depth+1])
    }
    right.push(currRight)
    return right
};


let root = new TreeNode(3, new TreeNode(9, null, null), new TreeNode(20, new TreeNode(15, null, null), new TreeNode(7, null, null)))

rightSideView(root)