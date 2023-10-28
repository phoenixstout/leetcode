var isPalindrome = function(x) {
    if(x< 0) return false
    y = String(x).split('').reverse().join('')
    if(Number(y) === x) return true
    else return false
}

isPalindrome(121)