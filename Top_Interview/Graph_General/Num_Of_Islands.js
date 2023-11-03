var numIslands = function (grid) {
  let count = 0;

  const delOnes = (grid, i, j) => {
    grid[i][j] = "2";
    if (i > 0 && grid[i - 1][j] === "1") {
      //look up
      delOnes(grid, i - 1, j);
    }
    if (i < grid.length - 1 && grid[i + 1][j] === "1") {
      //look down
      delOnes(grid, i + 1, j);
    }
    if (j > 0 && grid[i][j - 1] === "1") {
      //look left
      grid[i][j - 1] = "2";
      delOnes(grid, i, j - 1);
    }
    if (j < grid[i].length && grid[i][j + 1] === "1") {
      //look right
      delOnes(grid, i, j + 1);
    }
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        count++;
        delOnes(grid, i, j);
      }
    }
  }
  return count;
};

numIslands([
  ["1", "1", "1", "1", "1", "0", "1", "1", "1", "1"],
  ["1", "0", "1", "0", "1", "1", "1", "1", "1", "1"],
  ["0", "1", "1", "1", "0", "1", "1", "1", "1", "1"],
  ["1", "1", "0", "1", "1", "0", "0", "0", "0", "1"],
  ["1", "0", "1", "0", "1", "0", "0", "1", "0", "1"],
  ["1", "0", "0", "1", "1", "1", "0", "1", "0", "0"],
  ["0", "0", "1", "0", "0", "1", "1", "1", "1", "0"],
  ["1", "0", "1", "1", "1", "0", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1", "1", "1", "1", "0", "1"],
  ["1", "0", "1", "1", "1", "1", "1", "1", "1", "0"],
]);
