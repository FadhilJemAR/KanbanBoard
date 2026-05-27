export default function Task({task,handleDragStart,handleDragEnd,bgColor}){
    
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
           <p className="font-semibold">{task.name}</p>
        </div>
    )
}