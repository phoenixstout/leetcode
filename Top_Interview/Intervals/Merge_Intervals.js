var merge = function (intervals) {
  intervals = intervals.sort((a, b) => {
    if (a[0] >= b[0]) {
      return 1;
    } else {
      return -1;
    }
  });
  let out = [];

  let i = 0;

  let min = 0;
  while(i<intervals.length) {
    i
    min = intervals[i][0]
    max = intervals[i][1]
    while(i<intervals.length-1 && max>=intervals[i+1][0]) {
        i++
        max = Math.max(intervals[i][1], max)
    }
    i++
    out.push([min,max])
  }
  return out
};

const out = merge([[1,4],[2,3]]);

out;
