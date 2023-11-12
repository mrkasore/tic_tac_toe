const cells = document.querySelectorAll('.cell');
let turn = 'x';
let beforeTurn = turn;
let setX = 0;

cells.forEach(item => {
    item.addEventListener('click', move)
})

const board = createBoard();


function move(e) {
    
    if (board.arr[parseInt(e.target.getAttribute('data'))] == '-') {
        console.log(e.target.getAttribute('data'));
        board.arr[parseInt(e.target.getAttribute('data'))] = turn;
        e.target.innerText = turn;
        beforeTurn = turn;
        (turn == 'x') ? turn = 'o' : turn = 'x';
        console.log(checkWin(board.arr));
    }
    
    //board.setMove(parseInt(e.target.getAttribute('data')), 'x');
    
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

    for (let i = 0; i < arrWin.length; i++) {
        let setX = 0;
        for (let x = 0; x < 3; x++) {
            console.log(turn);
            if(board[arrWin[i][x]] == beforeTurn) {
                setX++;
            }
            if (setX > 2) {
                console.log(beforeTurn + ' ' + 'Win!');
                return true;
            }
        }
        
    }
    return false;
}




//Looping game untill win
// while (!checkWin(board.arr)) {
//     let choice = prompt('Type choice', '0, x');
//     choice = choice.split(', ');
//     board.setMove(parseInt(choice[0]), choice[1]);
//     console.log(board.arr);
//     console.log(checkWin(board.arr));
// }





//const talk = prompt('Type choice', '');
//console.log(talk.split(', '));

//board.setMove(0, 'x');
//board.setMove(1, 'x');
//board.setMove(2, 'x');



