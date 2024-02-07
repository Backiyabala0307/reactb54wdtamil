import React, { useState } from 'react'

function Fc(props) {
    const [greeting, setGreeting] = useState('hello');
  return (
      <div><p>{greeting} { props.name}</p></div>
  )
}

export default Fc