import React from 'react'

function Grandchild(props) {
    const setdata2 = () => {
        props.onhandledata("welcome from  grandchild")
    };
  return (
      <div>
          <h1>Grand Child</h1>
          <p>data from child:{props.message}</p>
          <button onClick={setdata2}>data from grandchild</button>

    </div>
  )
}

export default Grandchild