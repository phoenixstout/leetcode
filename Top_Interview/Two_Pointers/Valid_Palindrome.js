var isPalindrome = function (s) {
  s = s.replace(/[^a-zA-Z0-9]+/g, "");
  s = s.toLowerCase();
  if (s.length % 2 === 1) {
    // if odd
    let mid = (s.length - 1) / 2;
    let l = mid - 1;
    let r = mid + 1;
    l;
    while (s[l] === s[r] && l >= 0) {
      l -= 1;
      r += 1;
    }
    if (l === -1) return true;
    return false;
  } else {
    // if even
    let l = s.length / 2 - 1;
    let r = s.length / 2;
    while (s[l] === s[r] && l >= 0) {
      l -= 1;
      r += 1;
    }
    if (l === -1) return true;
    return false;
  }
};

isPalindrome("0P");