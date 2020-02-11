// Tic Tac Toe
var Agent = function () {

}

Agent.prototype.selectMove = function(board) {
    if (board.playerOne) {
        var bestScore = -Infinity;
        var bestMove = 0;
        for (var i = 1; i < 10; i++) {
            if (board.cellFree(i)) {
                var boardClone = board.clone();
                boardClone.move(i);
                var score = minimax(boardClone, 0, false);
                if (score > bestScore) {
                    bestScore = score;
                    bestMove = i;
                }

            } 
        }      
        return bestMove  
    }

    if (!board.playerOne) {
        var bestScore = Infinity;
        var bestMove = 0;
        for (var i = 1; i < 10; i++) {
            if (board.cellFree(i)) {
                var boardClone = board.clone();
                boardClone.move(i);
                var score = minimax(boardClone, 0, true);
                if (score < bestScore) {
                    bestScore = score;
                    bestMove = i;
                }

            } 
        }   
        return bestMove    
    }
    
}


function minimax(board, depth, isMaxPlayer) {

    if (board.gameOver() === 1) {
        return 10 - depth;
    } else if (board.gameOver() === 2) {
        return -10 + depth;
    } else if (board.gameOver() === 3) {
        return 0;
    }
    if (isMaxPlayer) {
        var bestVal = -Infinity;
        for (var i = 1; i < 10; i++) {
            if (board.cellFree(i)) {
                var boardClone = board.clone();
                boardClone.move(i);
                value = minimax(boardClone, depth + 1, false);
                bestVal = Math.max(bestVal, value);               
            } 
        }
        return bestVal  

    }   
    else {
        var bestVal = Infinity;
        for (var i = 1; i < 10; i++) {
            if (board.cellFree(i)) {
                var boardClone = board.clone();
                boardClone.move(i);
                value = minimax(boardClone, depth + 1, true);
                bestVal = Math.min(bestVal, value);                  
            }       
        }
        return bestVal   

    }     
}