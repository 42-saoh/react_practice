import React from 'react';

function SuperHappy(props) {
    return (
        <div>
            <button onClick={() => props.setHappy(3)}>SuperHappy</button>
        </div>
    )
}

export default SuperHappy;