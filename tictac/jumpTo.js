    function jumpTo(props) {
        return props.history.map((step, move) => {
            const desc = move ? 
            'Go to move #' + move + ' (' + Math.floor(step.moveNumber / 3) + ', ' + step.moveNumber % 3 + ')' :
            'Go to game start';
            const bold = move === props.stepNumber ? {fontWeight: 'bold'} : {};
            return (
            <li key={move}>
                <button style={bold} onClick={() => {
                    props.setStepNumber(move);
                    props.setXIsNext((move % 2 ) === 0);
                    }}>
                {desc}
                </button>
            </li>
            );
        });
    }

    export default jumpTo;