var combine = function (n, k) {
  let res = []
  let comb = []

  const backtrack = (start) => {
    if(comb.length === k) {
        res.push([...comb])
        return
    }

    for(let num =start; num<=n; num++) {
        comb.push(num)
        backtrack(num+1)
        comb.pop()
    }
  }
  backtrack(1)
  return res
};

let res = combine(4, 2);
res
