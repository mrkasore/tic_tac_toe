const cells = document.querySelectorAll('.cell');
let turn = 'x';
let beforeTurn = turn;

cells.forEach(item => {
    item.addEventListener('click', move)
})

const board = createBoard();


function move(e) {
    if (board.arr[parseInt(e.target.getAttribute('data'))] == '-') {
        board.arr[parseInt(e.target.getAttribute('data'))] = turn;
        e.target.innerText = turn;
        beforeTurn = turn;
        (turn == 'x') ? turn = 'o' : turn = 'x';
        checkWin(board.arr);
    } 
}


//Create board
function createBoard() {
    let arr = [];
    for (let i = 0; i < 9; i++) {
        arr.push('-');
    }

    return {
        arr,
        setMove(i, playerMark) {
            arr[i] = playerMark;
        }
    }
}

// Checking all possible combinations
function checkWin(board) {

    const arrWin = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    if(!board.includes('-')) {
        console.log('Even');
        return 'even';
    }

    for (let i = 0; i < arrWin.length; i++) {
        // count marks
        let j = 0;
        //
        for (let x = 0; x < 3; x++) {
            console.log(turn);
            if(board[arrWin[i][x]] == beforeTurn) {
                j++;
            }
            if (j > 2) {
                console.log(beforeTurn + ' ' + 'Win!');
                return true;
            }
        }
        
    }
    return false;
}


