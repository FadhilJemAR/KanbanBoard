import Stage from "./Stage";
import DeleteZone from "./DeleteZone";
import { useState } from "react";

export default function DragArea({stages,setStages,handleDeleteTask}){
    const [draggedItem,setDraggedItem] = useState(null);
    
    const updateStages = (from,taskId,dest)=>{
          let newTask;
          let newStages = stages.map((stage)=>{
            if(stage.name == from){
               newTask = stage.tasks.find((task)=>task.id == taskId);
               return {
                ...stage,
                tasks:[...stage.tasks].filter((task)=>task.id !== taskId)
               }
            }else {
                return stage
            }
          }).map((stage)=>{
            if(stage.name == dest){
                return {
                    ...stage,
                    tasks:[...stage.tasks,newTask]
                }
            }else{
                return stage
            }
          })
         
         setStages(newStages);
    }

    return(
        <main className="flex flex-col md:flex-row w-full mt-5 md:justify-between gap-7 md:items-start py-5">
            {draggedItem && (<DeleteZone handleDeleteTask={handleDeleteTask} draggedItem={draggedItem} setDraggedItem={setDraggedItem} />)}
            {stages.map((stage,index)=>{
              return <Stage stage={stage} key={index} draggedItem={draggedItem} setDraggedItem={setDraggedItem} updateStages={updateStages} handleDeleteTask={handleDeleteTask}/>
            })}
        </main>
    )
}