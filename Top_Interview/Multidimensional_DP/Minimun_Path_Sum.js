var minPathSum = function (grid) {
  let rows = grid.length;
  let cols = grid[0].length;
  let row = new Array(cols).fill(0);

  let out = Array(rows)
    .fill()
    .map(() => Array(cols).fill(0));
  out[rows - 1][cols - 1] = grid[rows - 1][cols - 1];

  for(let i = rows-2;i>=0;i--) {
    out[i][cols-1] = out[i+1][cols-1] + grid[i][cols-1]
  }

  for(let i = cols-2;i>=0;i--) {
    out[rows-1][i] = out[rows-1][i+1] + grid[rows-1][i]
  }

  for (let i = rows - 2; i >= 0; i--) {
    for (let j = cols - 2; j >= 0; j--) {
      out[i][j] = grid[i][j] + Math.min(out[i+1][j], out[i][j+1])
    }
  }

  return out[0][0]
};

let out = minPathSum([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
]);

out
