
import React,{useState} from 'react'

function Search() {
    // let searchtext = "";
    const [searchtext, setSeachtext] = useState("");

    let handler=(event) => {
        // searchtext = event.target.value;
        setSeachtext(event.target.value);
        console.log(event.target.value);
    }
  return (
    <div>
          <h1>Search for text</h1>
          <label htmlfor="search">search:</label>
          <input type="text" id="search" onChange={handler}></input> 

          <p>searching Text :{searchtext}</p>
      </div>
  )
}

export default Search