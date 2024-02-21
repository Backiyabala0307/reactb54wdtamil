import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Search from './Search'
import List from './List'
 
function App() {
  let name = "Backiya Lakshmi";
  let list = [
    {
      title: "react",
      name: "backiya",
      points: 2
    },
    {
      title: "node",
      name: "backiya",
      points: 3
    },
    {
      title: "mongodb",
      name: "backiya",
      points: 4
    }
  ];
  return (
    <div className="App">
      <Search name={name} />
      <List list={list} name={name} />
    </div>
  )
}

export default App
