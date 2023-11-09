// need to redo with sliding window since s can be any random string

var findSubstring = function (s, words) {
  let map = new Map();
  for (let word of words) {
    if (map[word]) map[word]++;
    else map[word] = 1;
  }

  let count = 0;
  let arr = [];
  let out = "";
  for (let i = 0; i < s.length; i++) {
    if (count <= words[0].length -1) {
      count++;
      out += s[i];
    } else {
      arr.push(out);
      count = 1;
      out = "";
      out += s[i];
    }
  }
  if(out.length === words[0].length)
  arr.push(out)


  let output = [];
  for (let i = 0; i < arr.length; i++) {
    let newMap = { ...map };
    let start = i;
    while (true) {
      if (newMap[arr[start]]) {
        newMap[arr[start]] -= 1;
        start++;
        if (start - i === words.length) {
          output.push(i * words[0].length);
          break;
        }
      } else {
        break;
      }
    }
  }
  return output;
};

findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "good"]);
