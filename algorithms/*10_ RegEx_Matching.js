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
    if (curr_p === "." && next_p === "*") return true;
    if (curr_p === ".") curr_p = curr_letter;

    // takes care of * condition
    if (next_p === "*") {
      p.splice(0, 1);
      any = true;
      while (any) {
        if (curr_letter === curr_p) {
          curr_letter = s.shift();
        } else {
          curr_p = p.shift();
          curr_p
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
  return true;
};

isMatch("aab", "c*a*b");
