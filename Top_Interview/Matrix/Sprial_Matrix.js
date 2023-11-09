var spiralOrder = function (matrix) {
  let cols = matrix[0].length - 1;
  let rows = matrix.length - 1;
  let out = [matrix[0][0]];
  let row = 0,
    col = 0;

  let canright = cols;
  let candown = rows;
  let canleft = 0;
  let canup = 0;

  let dir = "r";
  let size = matrix.length * matrix[0].length;

  loop1: while (out.length < size) {
    if (dir === "r") {
      if (col < canright) {
        col++;
      } else {
        dir = "d";
        canup = row + 1;
      }
    }
    if (dir === "d") {
      if (row < candown) {
        row++;
      } else {
        canright = col - 1;
        dir = "l";
      }
    }
    if (dir === "l") {
      if (col > canleft) {
        col--;
      } else {
        candown = row - 1;
        dir = "u";
      }
    }
    if (dir === "u") {
      if (row > canup) {
        row--;
      } else {
        canleft = col+1;
        dir = "r";
        continue loop1
      }
    }
    out.push(matrix[row][col]);
  }
  return out;
};

spiralOrder([[1, 2,3], [4,5,6], [7,8,9]]);
