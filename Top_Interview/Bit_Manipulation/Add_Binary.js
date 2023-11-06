var addBinary = function (a, b) {
  a = [...a].reverse();
  b = [...b].reverse();
  a.length < b.length ? ([a, b] = [b, a]) : null;

  let out = "";
  let carry = 0;
  for (let i = 0; i < b.length; i++) {
    carry
    if (a[i] === "0" && b[i] === "0") {
      if (carry) {
        // both 0 and carry
        out += "1";
        carry = 0;
      } else out += "0"; // if both 0
    } else if (a[i] === "1" && b[i] === "1") {
      if (carry) {
        // both 1 and carry
        out += "1";
      } else {
        // both 1 no carry
        carry = 1;
        out += "0";
      }
    } else if (carry) {
      // 1 0 and carry
      out += "0";
    } else out += "1"; // 1 0 no carry
  }
  for (let j = b.length; j < a.length; j++) {
    a[j];
    if (a[j] === "1" && carry) {
      out += "0";
    } else if (a[j] === "0" && carry) {
      carry = 0;
      out += "1";
    } else out += a[j];
  }
  carry;
  if (carry) {
    out += "1";
  }
  out = [...out].reverse().join("");
  return out;
};

addBinary("110010", "10111");
