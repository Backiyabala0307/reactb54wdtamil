import React, { useReducer } from 'react'

function Counterwithreducer() {
    const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
      <div>
          <h1>Counter with reducer</h1>
      </div>
  )
}

export default Counterwithreducer