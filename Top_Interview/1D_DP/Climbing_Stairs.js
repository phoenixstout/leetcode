var climbStairs = function (n) {
  let a = 1,
    b = 1,
    num = 1;
  if (n == 1) return 1;
  if (n == 2) return 2;

  while (num < n) {
    [a, b] = [b, a + b];
    num++;
  }
  return b;

};

