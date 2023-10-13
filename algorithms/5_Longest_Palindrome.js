var longestPalindrome = function (s) {
  let max = 0;
  let [resl, resr] = [0, 1];
  for (i in s) {
    i = Number(i);
    let count = -1;
    let [l, r] = [i, i];
    while (r < s.length && l >= 0 && s[r] == s[l]) {
      count = count + 2;
      r = r + 1;
      l = l - 1;
    }
    r=r-1;
    l=l+1;
    if (count > max) {
      resl = l;
      resr = r;
      max = count;
    }

    count = 0;
    l = i;
    r = i + 1;
    while (r < s.length && l >= 0 && s[r] == s[l]) {
      count += 2;
      l = l - 1;
      r = r + 1;
    }
    l=l+1
    r=r-1
    if (count > max) {
      resl = l;
      resr = r;
      resr;
      max = count;
    }
  }
  s = s.slice(resl,resr+1)
  return s
};

longestPalindrome("")
