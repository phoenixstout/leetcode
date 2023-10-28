var isMatch = function (s, p) {
  s = s.split("");
  p = p.split("");
  let any = false;

  let curr_letter = "";
  let valid = true;
  curr_letter = s.shift();
  curr_p = p.shift();
  while (valid && curr_letter !== undefined) {
    next_p = p[0];
    if (curr_p === "." && next_p === "*" && !p[1]) return true;
    if (curr_p === ".") curr_p = curr_letter;

    // takes care of * condition
    if (next_p === "*") {
      p.splice(0, 1);
      while(p[p.length-1] === curr_p) {
        p.splice(p.length-1,1)
        p
      }
      any = true;
      while (any) {
        if (curr_letter === curr_p) {
          curr_letter = s.shift();
        } else {
          curr_p = p.shift();
          any = false;
        }
      }
      continue;
    }

    if (curr_letter === curr_p) {
      curr_letter = s.shift();
      curr_p = p.shift();
    } else return false;
  }
  curr_p
  s
  if (s.length === 0 && curr_p != undefined) return false;
  return true;
};

isMatch("aaa", "ab*a*c*a");
