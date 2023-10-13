
var lengthOfLongestSubstring = function (s) {
    if(s.length <2) return s.length
    let seen = new Set()
    let max = 0;
    let left = 0;

    for(let i = 0; i<s.length; i++)  {
        while(seen.has(s[i])) {
          console.log('has')
          seen.delete(s[left])
          left++
        }

        seen.add(s[i])
        max = Math.max(max, i-left+1)
    }

  return max;
};

const res = lengthOfLongestSubstring("abcdefghijklm");
console.log(res);

// Sliding window technique
