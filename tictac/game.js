import React from 'react';  
import Board from './board';
import CalculateWinner from './calculateWinner';
import jumpTo from './jumpTo';
import handleClick from './handleClick';

  function Game() {
        const [history, setHistory] = React.useState([{
            squares : Array(9).fill(null),
            moveNumber: 0,
        }]);
        const [stepNumber, setStepNumber] = React.useState(0);
        const [xIsNext, setXIsNext] = React.useState(true);
        const [isAscending, setIsAscending] = React.useState(true);
        const current = history[stepNumber];
        const winner = CalculateWinner(current.squares); 
        const isAscendingText = isAscending ? 'Ascending' : 'Descending';
        const moves = jumpTo({
            history: history,
            stepNumber: stepNumber,
            setStepNumber: setStepNumber,
            setXIsNext: setXIsNext,
        });
        if (moves !== undefined && !isAscending) {
            moves.reverse();
        }

        let status;
        let line = null;
        if (winner) {
            status = 'Winner: ' + winner.value;
            line = winner.line;
        } else {
            status = stepNumber !== 9 ? 'Next player: ' + (xIsNext ? 'X' : 'O') : 'Draw'; 
        }

        return (
            <div className="game">
              <div className="game-board">
                <Board 
                  squares={current.squares}
                  onClick={(i) => handleClick({
                    i: i,
                    history: history,
                    stepNumber: stepNumber,
                    xIsNext: xIsNext,
                    setHistory: setHistory,
                    setStepNumber: setStepNumber,
                    setXIsNext: setXIsNext,
                })}
                  line={line}
                />
              </div>
              <div className="game-info">
                <div>
                  <button onClick={() => setIsAscending(isAscending ? false : true)}>
                      {isAscendingText}
                    </button>
                </div>
                <div>{status}</div>
                <ol>{moves}</ol>
              </div>
            </div>
          );
    }

  export default Game;