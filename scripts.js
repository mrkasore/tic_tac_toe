const cells = document.querySelectorAll('.cell');

cells.forEach(item => {
    item.addEventListener('click', move)
})

function move(e, vr) {
    console.log(e.target.getAttribute('data'));
     board.arr[parseInt(e.target.getAttribute('data'))] = 'x';
     e.target.innerText = 'x';
}

// function(e) {
//     console.log(e.target.getAttribute('data'));
//     board.arr[parseInt(e.target.getAttribute('data'))] = 'x';
//     e.target.innerText = 'x';
// })

//Create board
function createBoard() {
    const arr = [];
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
    let setX = 0;
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
        for (let x = 0; x < 3; x++) {
            if(board[i][x] === 'x') setX++;
        }
        if (setX > 2) {
            return true;
        }
    }
    return false;
}

const board = createBoard();

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



