import React, { useEffect, useState } from 'react'
import '../styles/App.css';


const getData = async () =>{
  const rawData = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await rawData.json()
  return data
}
const Loader = () => <div id="loader">Loading...</div>
const App = () => {
  const [todos,setTodos] = useState([])
  const [loading,setloading] = useState(true)


  useEffect(()=>{
    getData().then(data=> {
      setTodos(data)
      setloading(false);

     },[])

  },[todos])
  return (
    <div id="main">
      {
        loading ? <Loader /> :
        todos.map((todo)=>{
          return(
            <div id={`todo-${todo.id}`}>{todo.title}</div>
          )
        }
        )
      }
    </div>
  )
}


export default App;
