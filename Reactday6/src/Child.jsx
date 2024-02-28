import React from 'react'
import Grandchild from './Grandchild'
function Child(props) {
    const setdata1 = () => {
        props.onhandledata("welcome from  child")
    };
  return (
      <div>
          <h1>Child Component</h1>
          <p>data from parent:{props.message}</p>
          <button onClick={setdata1}>data from child</button>
          <Grandchild message={props.message} onhandledata={props.onhandledata} />
    </div>
  )
}

export default Child