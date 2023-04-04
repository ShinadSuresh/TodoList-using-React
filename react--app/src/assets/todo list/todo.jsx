import React, { useState } from 'react';
import './todo.css';
import AddTask from './addTask';
import ListTask from './listTask';



const Todo = () => {
    const [tasks, setTasks]=useState([
      
    ]);

    const addTask =(title)=>{
      const newTask = [...tasks,{title}]
      setTasks(newTask);
    }

    const removeTask = (index) => {
      const newTask = [...tasks];
      newTask.splice(index,1);
      setTasks(newTask);
    }
  return (
    <div className='todo-container'>
    <div className='header'>TODO App</div>
    <div className='AddTask'>
    <AddTask addTask={addTask}/>  
    </div>
    <div className='Tasks'>
    {tasks.map((task, index)=> (
      <ListTask task={task} removeTask={removeTask} index={index} key={index}/> 
      
    ))}
    
    </div>
    </div> 
  )
}

export default Todo