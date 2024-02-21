import React from 'react'

function List({ list,name}) {

  return (
    <div>
          <h1>List</h1>
          <h2>{name}</h2>
          <ul>
              
              {list.map(function (item, index) {
                  console.log(index, "for testing");
                  return <li key={index}>{`${item.title},${item.name},${item.points}`}</li>
              })}
          </ul> 
    </div>
  )
}

export default List