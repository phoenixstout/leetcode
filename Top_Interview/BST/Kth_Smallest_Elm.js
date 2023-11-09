var kthSmallest = function(root, k) {
    let arr = []

    const genArr = (node) => {
        arr.push(node.val)
        if(node.left) genArr(node.left)
        if(node.right) genArr(node.right)
        if(!node.left && !node.right) return 
    }

    genArr(root)

    arr.sort((a,b) => a-b)

    return arr[k-1]

};