import React from 'react'

function Home() {
    let module = [
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
        <>
            <div>list of courses:</div>
            <ol>
                {module.map(function(item,index){
                    console.log(index, "for testing");
                    return <li key={index}>{`${item.title},${item.name},${item.points}`}</li>
                    })}
            </ol>
        </>
  )
}

export default Home