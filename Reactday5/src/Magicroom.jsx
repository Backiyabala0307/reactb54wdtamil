import React, { useEffect, useState } from 'react'

function Magicroom() {
    const [toy, setToy] = useState('car');
    useEffect(() => { 
        console.log("Welcome to the room");
        return () => {
            console.log("goodbye from magic room");
        }  
    }, []);
    
    useEffect(() => {
        console.log(`Now the toy name is ${toy}`);
    }, [toy]);


    return (
        <div>
            <h1>Magic Room</h1>
            <button onClick={() => setToy('doll')}>change to doll</button>
            <button onClick={() => setToy('train')}>change to train</button>
            <p>current toy is {toy}</p>
        </div>
    )

}

export default Magicroom