import React from 'react';
import RenderSquare from './render_square';

  function Board(props) {
    return (
      <div>
        {[...Array(3)].map((_, i) => (
          <div className="board-row" key={i}>
          {[...Array(3)].map((_, j) => <RenderSquare
            line={props.line}
            squares={props.squares}
            onClick={props.onClick}
            index={i * 3 + j}
          />)}
          </div>
        ))}
      </div>
    );
  }

  export default Board;