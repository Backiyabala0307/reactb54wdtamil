import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Magicroom from './Magicroom'
import Sample from './Sample';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      
      {(count < 1) ? <Magicroom /> : <Sample />}
      <button onClick={()=>{setCount(count+1)}}>sample</button>
      <button onClick={() => { setCount(count - 1) }}>magic room</button>
    </div>
  )
}

export default App
