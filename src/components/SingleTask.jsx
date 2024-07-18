import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";

const SingleTask = ({task, onDelete, onToggle}) => {
    console.log(task.id)
    const divClassName = task.reminder === true? 'taskCard reminder': 'taskCard'
  return (
    <div className={divClassName} onDoubleClick={() => onToggle(task.id)} >
    <div className='task' key= {task.id}>
        <h4 className='taskTitle'>{task.text}</h4>
        <p className='taskP'>{task.month}</p>
        <p className='taskP'>{task.day}</p>
        <p className='taskP'>{task.year}</p>
        <p className='taskP'>{task.time}</p>

    </div>
    <p>
      <FaRegTrashAlt onClick={()=> onDelete(task.id)} style={{color :'red'}} />
    </p>
    </div>
  )
}

export default SingleTask