import { Trash } from "lucide-react"
export default function DeleteZone({handleDeleteTask,draggedItem,setDraggedItem}){
    return(
        <div 
            className="fixed left-1/2  bottom-2 rounded-full  p-3 -translate-8 text-white bg-red-400"
            onDragOver={(e)=>{e.preventDefault()}}
            onDrop={()=>{
                handleDeleteTask(draggedItem.from,draggedItem.taskId);
                setDraggedItem(null);
            }}
        >
            <Trash/>
        </div>
    )
}