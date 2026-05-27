import Stage from "./Stage"
import { useState } from "react"



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
        <main className="flex w-full mt-5 justify-between gap-7 grow">
            {stages.map((stage,index)=>{
              return <Stage stage={stage} key={index} draggedItem={draggedItem} setDraggedItem={setDraggedItem} updateStages={updateStages} handleDeleteTask={handleDeleteTask}/>
            })}
        </main>
    )
}