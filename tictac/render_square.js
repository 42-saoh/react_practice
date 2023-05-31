import React from 'react';
import Square from './square';

  function RenderSquare(props) {
    return (<Square
    isEnd={props.line && props.line.includes(props.index)}
    value={props.squares[props.index]}
    onClick={() => props.onClick(props.index)}
    />);
  }

  export default RenderSquare;