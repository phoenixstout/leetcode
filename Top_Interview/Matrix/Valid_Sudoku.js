var isValidSudoku = function (board) {
  return checkBoxes(board) && checkCols(board) && checkRows(board);
};

const checkRows = (board) => {
  loop1: for (let row of board) {
    let seen = new Set();
    loop2: for (let elm of row) {
      if (elm === ".") continue loop2;
      if (seen.has(elm)) return false;
      else seen.add(elm);
    }
  }
  return true;
};

const checkCols = (board) => {
  for (let i = 0; i < 9; i++) {
    let seen = new Set();
    loop2: for (let row of board) {
      if (row[i] === ".") continue loop2;
      if (seen.has(row[i])) return false;
      seen.add(row[i]);
    }
  }
  return true;
};

const checkBoxes = (board) => {
  let left = 0;
  let top = 0;
  while (true) {
      let seen = new Set();
    for (let i = left; i < left + 3; i++) {
      loop2: for (let j = top; j < top + 3; j++) {
        if (board[i][j] === ".") continue loop2;
        if (seen.has(board[i][j])) return false;
        seen.add(board[i][j]);
      }
    }
    if (left + 3 === 9) {
      left = 0;
      top += 3;
      if (top === 9) return true;
    } else {
      left += 3;
    }
  }
};

const out = isValidSudoku([
  ["4", ".", ".", ".", "5", ".", ".", "1", "."],
  [".", "4", ".", "3", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "3", ".", ".", "1"],
  ["8", ".", ".", ".", ".", ".", ".", "2", "."],
  [".", ".", "2", ".", "7", ".", ".", ".", "."],
  [".", "1", "5", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "2", ".", ".", "."],
  [".", "2", ".", "9", ".", ".", ".", ".", "."],
  [".", ".", "4", ".", ".", ".", ".", ".", "."],
]);

out;
