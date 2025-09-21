import { useState , useEffect } from 'react'
import "./card.css"

import './App.css'

function App() {
  const [users, setUsers] = useState([])//store api data 
  const [loading , setLoading] = useState(true);//for loading data
  const [error , setError] = useState(null);//for handling errors


  useEffect(() => {
    //fetch data when comp is mounted
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res)=>{
        if(!res.ok){
          throw new Error("failed to fetch data")
        }
        return res.json();
      })
      .then((data)=>{
        setUsers(data);
        setLoading(false);
      })
      .catch((err)=>{
        setError(err.message);
        setLoading(false);
      })
    
  }, [])
  if(loading) return <h2>loading...</h2>
  if(error) return <h2>error</h2>
  

  return (
    <div>
      <h1>user list</h1>
      <ul>
        {users.map((user)=>{
        
          return <div className='data'>
            <h1>{user.name}  </h1>
            <p>{user.id}</p>
            <p>{user.email}</p>
            <p>{user.city}</p>
          </div>
})}
      </ul>
    </div>
  )
}

export default App
