var simplifyPath = function (path) {
  let r = path.length - 1;
  let out = "";
  while (r >= 0) {
    if (path[r] === path[r - 1] && path[r] === "/") {
      r--;
      out += "/";
    } else if (path[r] === ".") {
        let count = 1
        while(path[r] === '.') {
            r-=1
            count++
            if(count === 4) out += '...'
            if(count > 4) out += '.'
        }
        out
        if(count <3) r-=count-2
        if(count>=4) out+= '/'
        // r+=1

    } else {
      out += path[r];
    }
    r--;
  }
  if (out[out.length - 1] != "/") {
    out += "/";
  }
  out = [...out].reverse();
  while (out.length > 1 && out[out.length - 1] === "/") {
    out.pop();
  }
  out = out.join("");
};

simplifyPath("f//df");
