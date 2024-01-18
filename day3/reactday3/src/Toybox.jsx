import React from 'react'
import { useState } from 'react';

function Toybox() {
    const [toys, setToys] = useState(['car', 'bus']);
    const addtoy = (newtoy) => {
        setToys(toys => [...toys,newtoy]);
    }
    
  return (
      <div>
          <h1>my toybox</h1>
          <ul>
              {toys.map(toy => <li key={toy}>{toy}</li>)}
          </ul>
          <button onClick={() => addtoy('doll')}>Add doll</button>
          <button onClick={() => addtoy('puzzle')}>Add puzzle</button>
          <button onClick={() => addtoy('card')}>Add card</button>
    </div>
  )
}

export default Toybox