import React , {useState} from 'react'; 
import { useEffect } from 'react';
import Task from './Task';


const Main = () => {

    const initialArray = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")):[] ;

    const [tasks, setTasks]= useState(initialArray);
    const [title, setTitle]= useState("");

    const nice = (e) => {
        e.preventDefault();
        setTasks([...tasks,{title},]);
        setTitle("");
      };  

      const deleteTask=(index)=>{
        const filteredArr = tasks.filter((val,i)=>{
         return i!==index;
        });
     
        setTasks(filteredArr);
     }

     useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(tasks));
        },[tasks]);

  return (
      
    <div className="container">
        <div className='box'>
        {tasks.map((item,index)=>(
            <Task 
            key={index}
            title={item.title} 
            deleteTask={deleteTask}
            index={index}
            />
            ))}
            </div>
            <div className="down">
    <h1>Todo</h1>
    <form onSubmit={nice}>
      <input 
      type="text"
      placeholder="Title" 
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
      />
      <button type='submit'>ADD</button>
     </form>
            </div>


     
    </div>
  )
}

export default Main;
