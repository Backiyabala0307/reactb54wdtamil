import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Toybox from './Toybox'
import Search from './Search'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {
      <App /> 
      // <Toybox />
      // <Search />
    }
  </React.StrictMode>,
)
