var summaryRanges = function(nums) {
    if(nums.length === 0) return []
    let ranges = []
    let l=0, r = 1
    while(r<nums.length) {
        if(nums[r] == nums[r-1]+1) {
            r +=1
        }
        else {
            ranges.push([nums[l], nums[r-1]])
            l = r
            r = r+1

        }
    }
    ranges.push([nums[l], nums[r-1]])

    let out = []
    for(let range of ranges) {
        if(range[0] === range[1]) out.push(`${range[0]}`)
        else out.push(`${range[0]}->${range[1]}`)
    }
    out
    return(out)
};

summaryRanges([0,1,2,4,5,7,9,10,11, 13,14,15])