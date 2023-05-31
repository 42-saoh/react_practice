import React from 'react';

function Crazy(props) {
    return (
        <div>
            <button onClick={() => props.setHappy(4)}>Crazy</button>
        </div>
    )
}

export default Crazy;