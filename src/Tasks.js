import React from "react"
import Task from "./Task";
export default function Tasks({tasks,onCheckboxChange,deleteHandler}){
   
    return(
        <div className="todo-list ">
{
  tasks.length> 0 ?  tasks.map(item=>{
        return <Task key={item.id} 
        name={item.name} 
        done={item.done} 
        onCheckboxChange={onCheckboxChange} 
        deleteHandler={deleteHandler} 
        id={item.id}/>
    }):<div className="text-center"><b>No Items To Display</b></div>
}
</div>

    );
}