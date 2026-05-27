import DragArea from "./components/DragArea"
import { initialStages } from "./data/stages";
import { useState } from "react";
export default function App(){
  const [stages,setStages] = useState(initialStages);
  const [input,setInput] = useState('');
  const [deleteAfterDone,setDeleteAfterDone] = useState(false);

  const handleInput = (e)=>{
    setInput(e.target.value);
  }

  const handleAddTask = () =>{
    if(!input)return;
    


     const  newStages = [...stages];
     const newTask = {
      id:Date.now(),
      name:input,
      deleteAfterDone
     }
      const newTodo = {
        ...newStages[0],
        tasks:[...newStages[0].tasks,newTask]
      }
      newStages[0] = newTodo;

      setStages(newStages);
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
    <div className="w-full flex flex-col items-center  min-h-screen px-5 bg-sky-500">
      <h1 className="text-center mt-15 font-semibold text-5xl text-white">Kanban Board</h1>
      <div className="flex items-center gap-x-2 mt-5">
        <input placeholder="Task Name..." className="bg-white py-2 px-5 outline-none" value={input} onChange={handleInput}></input>
        <button className=" px-5 py-2 text-white bg-indigo-500 shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500/70  hover:cursor-pointer duration-200 active:scale-110" onClick={handleAddTask}> + Add New Task</button>
      </div>
      <div className="mt-3 flex gap-2 text-white">
        <input id="deleteAfterDone" type="checkbox" checked={deleteAfterDone} onChange={()=>{setDeleteAfterDone(!deleteAfterDone)}}></input>
        <label htmlFor="deleteAfterDone" >Delete after Done (5s)</label>
      </div>
      <DragArea stages={stages} setStages={setStages} handleDeleteTask={handleDeleteTask}/>
    </div>
  )
}