import { useState } from 'react'
import './App.css'
import Todo from './assets/todo list/todo'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Todo/>
  
      
    </div>
  )
}

export default App
