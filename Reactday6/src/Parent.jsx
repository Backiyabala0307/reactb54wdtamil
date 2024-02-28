import React, { useState } from 'react'
import Child from './child';
function Parent() {
    const [message, setMessage] = useState("Hello from parent");
    const [data, setData] = useState("nothing");
    function handledata(data) {
        setData(data);
    }
    
  return (
      <div>
          <h1>Parent Component</h1>
          <p>{message}</p>
          <p>{ data }</p>
          <Child message={message} onhandledata={handledata} />
    </div>
  )
}

export default Parent