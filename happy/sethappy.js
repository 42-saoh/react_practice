import React from 'react';

function SetHappy(props) {
    switch (props.happy) {
        case 1:
            return (
                <div>'Happy'</div>
            )

        case 2:
            return (
                <div>'VeryHappy'</div>
            )

        case 3:
            return (
                <div>'SuperHappy'</div>
            )

        case 4:
            return (
                <div>'Crazy'</div>
            )
    
        default:
            return ;
    }
    
}

export default SetHappy;