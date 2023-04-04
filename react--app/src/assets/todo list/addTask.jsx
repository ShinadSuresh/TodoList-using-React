import { useState } from 'react'

const AddTask = ({addTask}) => {
    const [value, setValue] = useState("")

    const addItem=()=> {
        addTask(value)
        setValue("");
    }
  return (
    
    <div className='Input-container'>
        <input type='text' className='input' placeholder='add a new task' value={value} onChange={(e)=>{setValue(e.target.value)}}>
        </input>

        
        <button onClick={addItem} className='add-button'>Add</button>

        
    </div>
  )
}

export default AddTask 