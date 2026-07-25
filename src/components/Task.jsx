import { useEffect } from "react"

export default function Task({task,handleDragStart,handleDragEnd,bgColor,stageName,handleDeleteTask}){
    useEffect(()=>{
        if(stageName == 'Done' && task.deleteAfterDone){  
           const timeOut =  setTimeout(()=>{
                handleDeleteTask(stageName,task.id);
            },5000);
           return ()=>{
            clearTimeout(timeOut)
           }
        }
    },[])


    return(
        <div className={` ${bgColor} w-full  px-5 py-3 rounded-md `}
           draggable
           onDragStart={
            ()=>{handleDragStart(task.id)}
           }
           onDragEnd={
            ()=>{handleDragEnd()}
           }
        >
         <div className="flex flex-col gap-2">
           <p className="font-semibold">{task.name}</p>
           {task.priority && (<span className="text-sm">Priority</span>)}
         </div>
        </div>
    )
}