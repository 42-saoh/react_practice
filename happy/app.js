import React from 'react';
import Happy from './happy';
import VeryHappy from './veryhappy';
import SuperHappy from './superhappy';
import Crazy from './crazy';
import SetHappy from './sethappy';

function App() {
    const [happy, setHappy] = React.useState(0);
    return (
        <>
            <Happy 
                setHappy = {setHappy}
                />
            <VeryHappy
                setHappy = {setHappy}
            />
            <SuperHappy
                setHappy = {setHappy}
            />
            <Crazy
                setHappy = {setHappy}
            />
            <SetHappy
                happy = {happy}
            />
        </>
    )
}

export default App;