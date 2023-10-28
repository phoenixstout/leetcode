var myAtoi = function (s) {
  if (s[0] === " ") return myAtoi(s.slice(1));
  const MAX_32 = Math.pow(2, 31) - 1;
  const MIN_32 = -Math.pow(2, 31);

  s = s.split('')

  if (s[0] === "+" || s[0] === "-") {
    var sign = s.shift();
  }
  if (isNaN(s[0])) return 0;

  let output = [];
  let curr_letter = s.shift()
  while(!isNaN(Number(curr_letter)) && curr_letter!= ' ') {
    curr_letter
    output += curr_letter
    curr_letter = s.shift()
  }
  output = Number(output)
  sign === '-' ? output *= -1 : null
  output > MAX_32 ? output = MAX_32 : null
  output < MIN_32 ? output = MIN_32 : null

  return output;
};

myAtoi("  +0 1");
