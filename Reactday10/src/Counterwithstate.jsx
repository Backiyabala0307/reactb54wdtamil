import React, { useState } from 'react'

function Counterwithstate() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const incrementby2 = () => setCount(count + 2);
  return (
    <div>
      <h1>Counter with state</h1>count:{count}
      <button onClick={increment}>plus</button>
      <button onClick={decrement}>minus</button>
      <button onClick={incrementby2}>plus2</button>
    </div>
  )
}

export default Counterwithstate