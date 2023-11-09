var isSubsequence = function(s, t) {
    let l=0, r = 0
    while(l<t.length) {
        if(t[l] === s[r]) r++
        l++
    }
    r
    if(r === s.length) return true
    return false
};

isSubsequence('ace', 'abcde')