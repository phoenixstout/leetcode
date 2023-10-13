var reverse = function (x) {
  x = String(x).split("");
  if (x[0] === "-") {
    x.splice(0, 1);
    negative = true;
  } else negative = false;
  if (x.length > 10) return 0;

  x.slice(1);
  x = x.reverse().join("");
  if (x.length === 10) {
    if (x[0] > 2) return 0;
    else if (x[0] !== 1 && Number(x.slice(1)) > 147483647) {
      return 0;
    }
  }
  return negative ? "-" + x : x;

};

reverse(-2147483412);