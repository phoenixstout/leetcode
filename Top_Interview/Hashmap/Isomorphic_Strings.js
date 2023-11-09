var isIsomorphic = function (s, t) {
  const map1 = new Map();
  const map2 = new Map();


  for (let i = 0; i < s.length; i++) {
    if(map1[s[i]] && map1[s[i]] != t[i]) return false
    else if (map2[t[i]] && map2[t[i]] != s[i]) return false;
      map1[s[i]] = t[i];
      map2[t[i]] = s[i];
  }

  return true
};

isIsomorphic("badc", "badc");
