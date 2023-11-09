var solve = function (board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === 'O' && (i == 0 || i == board.length - 1 || j == 0 || j == board[0].length - 1)) {
                search(i, j)
            }
        }
    }

    for(let i = 0; i<board.length; i++) {
        for(let j = 0; j<board[0].length; j++) {
            if(board[i][j] == 'L') board[i][j] = 'O'
            else if(board[i][j] == 'O') board[i][j] = 'X'
        }
    }

    function search(i, j) {
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] == "X" || board[i][j] == "L") {
            return
        }
        board[i][j] = "L"

        search(i + 1, j)
        search(i - 1, j)
        search(i, j + 1)
        search(i, j - 1)

    }
};