import React from 'react'

const Task = ({title , deleteTask , index}) => {
  return (
    <div className="Task">
        <div>
            <p>{title}</p>
        </div>
        <button onClick={()=>deleteTask(index)}>X</button>
    </div>
  )
}

export default Task;