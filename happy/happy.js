import React from 'react';

function Happy(props) {
    return (
        <div>
            <button onClick={() => props.setHappy(1)}>Happy</button>
        </div>
    )
}

export default Happy;