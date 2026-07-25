import Task from "./Task"
export default function Stage({stage,draggedItem,setDraggedItem,updateStages,handleDeleteTask}){
    const handleDragStart = (taskId) =>{
        const newDrag =  {
            from:stage.name,
            taskId,
        }
        setDraggedItem(newDrag);
    }

    const handleDragEnd = () => {
       setDraggedItem(null);
    }

    const handleDrop = ()=>{
      if(draggedItem.from === stage.name)return;
      updateStages(draggedItem.from,draggedItem.taskId,stage.name)
    }
    const filteredTasks = stage.tasks.sort((task1,task2)=>{return task2.priority - task1.priority})

    return(
        <section className=" shadow-md bg-white w-full md:w-1/3 rounded-xl overflow-clip flex flex-col min-h-70 hover:cursor-grab">
            <h2 className={`text-center text-xl ${stage.color.fg} text-black font-semibold py-2`}>{stage.name}</h2>
            <div className="flex flex-col p-5 grow gap-2" 
              onDragOver={(e)=>{e.preventDefault()}}
              onDrop={()=>{
               handleDrop()
              }}
            >
               {filteredTasks.map((task,index)=>{
                return <Task task={task} key={index} handleDragStart={handleDragStart} handleDragEnd={handleDragEnd} bgColor={stage.color.tc} stageName={stage.name} handleDeleteTask={handleDeleteTask}/>
               })}
            </div>
        </section>
    )
}