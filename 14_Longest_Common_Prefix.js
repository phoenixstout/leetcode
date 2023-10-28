var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return ''
    let prefix = ''
    let i = 0;
    let valid = true

    loop1:
    while(valid) {
        prefix += strs[0][i]
        if(!strs.every(str => str.startsWith(prefix))) {
            valid = false
            break
        }
        i += 1
    }

    return strs[0].slice(0,i)
}

longestCommonPrefix([""])