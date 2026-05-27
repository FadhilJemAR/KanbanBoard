import DragArea from "./components/DragArea"
import { initialStages } from "./data/stages";
import { useState } from "react";
export default function App(){
  const [stages,setStages] = useState(initialStages);
  const [input,setInput] = useState('');


  const handleInput = (e)=>{
    setInput(e.target.value);
  }

  const handleAddTask = () =>{
    if(!input)return;
    


     const  newStages = [...stages];
     const newTask = {
      id:Date.now(),
      name:input
     }
      const newTodo = {
        ...newStages[0],
        tasks:[...newStages[0].tasks,newTask]
      }
      newStages[0] = newTodo;

      setStages(newStages);
      setInput('');
  }

  return(
    <div className="w-full flex flex-col items-center  min-h-screen px-5 bg-sky-500">
      <h1 className="text-center mt-15 font-semibold text-5xl text-white">Kanban Board</h1>
      <div className="flex items-center gap-x-2 mt-5">
        <input placeholder="Task Name..." className="bg-white py-2 px-5 outline-none" value={input} onChange={handleInput}></input>
        <button className=" px-5 py-2 text-white bg-indigo-500 shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500/70  hover:cursor-pointer duration-200 active:scale-110" onClick={handleAddTask}> + Add New Task</button>
      </div>
      <DragArea stages={stages} setStages={setStages}/>
    </div>
  )
}