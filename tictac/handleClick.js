import CalculateWinner from './calculateWinner';
  
  function handleClick(props) {
    const History = props.history.slice(0, props.stepNumber + 1);
    const current = History[History.length - 1];
    const squares = current.squares.slice();
    if (CalculateWinner(squares) || squares[props.i]) {
      return ;
    }
    squares[props.i] = props.xIsNext ? 'X' : 'O';
    props.setHistory(
        History.concat([{
        squares: squares,
        moveNumber: props.i,
    }]));
    props.setStepNumber(History.length);
    props.setXIsNext(!props.xIsNext);
  }

  export default handleClick;