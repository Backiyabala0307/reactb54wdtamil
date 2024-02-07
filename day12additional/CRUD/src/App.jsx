import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import axios from "axios"


function App() {
  const [posts, setPosts] = useState([]);

  let getPosts = async () => {
    let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(res.data);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="App">
      <h1>POSTS</h1>
      {
        posts.map(post => (
          <div key={posts.id}>
            <h1>TITLE:{post.title}</h1>
            <p>BODY:{post.body}</p>
          </div>
        ))
    }
      
    </div>
  )
}

export default App
