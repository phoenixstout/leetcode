var permute = function(nums) {
    let out = []
    let see = new Set()
    const help = (arr) => {
        if(arr.length == nums.length) {
            out.push(arr)
            return
        }
        for(let num of nums) {
            if(!arr.includes(num)) {
                help([...arr, num])
            }
        }
    }

    help([], see)
    return out
};

permute([1,2,3])