var canConstruct = function (ransomNote, magazine) {
  let map = new Map();
  for (let letter of magazine) {
    if (!map[letter]) map[letter] = 1;
    else map[letter] += 1;
  }

  for(let letter of ransomNote) {
    if(map[letter]) map[letter] -=1
    else return false
  }

  return true
};

canConstruct('adca', 'advab')
