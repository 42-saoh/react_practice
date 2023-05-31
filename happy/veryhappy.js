import React from 'react';

function VeryHappy(props) {
    return (
        <div>
            <button onClick={() => props.setHappy(2)}>VeryHappy</button>
        </div>
    )
}

export default VeryHappy;