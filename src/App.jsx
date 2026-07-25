import DragArea from "./components/DragArea"
import { initialStages } from "./data/stages";
import { useState } from "react";
export default function App(){
  const [stages,setStages] = useState(initialStages);
  const [input,setInput] = useState('');
  const [deleteAfterDone,setDeleteAfterDone] = useState(false);
  const [priority,setPriority] = useState(false);


  const handleInput = (e)=>{
    setInput(e.target.value);
  }

  const handleAddTask = (e) =>{
    e.preventDefault();

     const  newStages = [...stages];
     const newTask = {
      id:Date.now(),
      name:input,
      deleteAfterDone,
      priority
     }
      const newTodo = {
        ...newStages[0],
        tasks:[...newStages[0].tasks,newTask]
      }
      newStages[0] = newTodo;
      
      setStages(newStages);

      //Save to localstorage
      localStorage.setItem('stages',JSON.stringify(newStages));

      setInput('');
  }

  const handleDeleteTask = (stgname,taskId)=>{
      let newStages = [...stages];
      
      const stage = newStages.find((stage)=>stage.name ==stgname);
      const newTasks = stage.tasks.filter((task)=>task.id !== taskId);
      const newStage = {
        ...stage,
       tasks:newTasks
      };

      const updateNewStages = newStages.map((stage)=>{
        if(stgname == stage.name){
            return newStage
        }else{
          return stage
        }
      })

     setStages(updateNewStages);

      
  }

  return(
    <div className="w-full flex flex-col items-center min-h-[95vh] px-5">
      <h1 className="text-center mt-15 font-semibold text-5xl text-gray-800">Kanban Board</h1>
      <form className="flex items-center gap-x-2 mt-5" onSubmit={handleAddTask}>
        <input  placeholder="Task Name..." className="bg-white py-2 px-5 outline-none" value={input} onChange={handleInput} required></input>
        <button type="submit" className=" px-5 py-2 text-white bg-indigo-400 shadow-lg shadow-indigo-500/50 hover:shadow-indigo-400/70  hover:cursor-pointer duration-200 active:scale-110"> + To Do</button>
      </form>
      <div className="mt-3  gap-2 text-gray-800 flex flex-wrap max-w-125">
        <input id="deleteAfterDone" type="checkbox" checked={deleteAfterDone} onChange={()=>{setDeleteAfterDone(!deleteAfterDone)}}></input>
        <label htmlFor="deleteAfterDone" >Delete after Done (5s)</label>
        <input id="priority" type="checkbox" checked={priority} onChange={()=>{setPriority(!priority)}}></input>
        <label htmlFor="priority" >Priority</label>
      </div>
      <DragArea stages={stages} setStages={setStages} handleDeleteTask={handleDeleteTask}/>
    </div>
  )
}