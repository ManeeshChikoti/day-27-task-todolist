
import './App.css';
import { useState } from 'react';
import Form from './Form';
import Filter from './Filter';
import Tasks from './Tasks';
function App() {
  const[filter,setFilter]=useState("All");
  const[newId,setNewId]=useState(3)
const [tasks,setTasks]=useState([
  {    id:1,
    name:"HTML",
    done:false
},
{
    id:2,
    name:"CSS",
    done:false
}]

);
const formSumbit=(value)=>{
const newTask={
  id:newId,
  name:value,
  done:false

}
setTasks([...tasks,newTask]);
setNewId(newId+1);
}
 const onCheckboxChange=(id,checked)=>{
   setTasks(tasks.map(item=>{
     return item.id===id ? {...item,done:checked}:item;
   }));

};
const onFilterChange=(newValue)=>{
setFilter(newValue);
}
const filterTasks=()=>{
if(filter==='Active'){
  return tasks.filter(item=>item.done===false);
}else if(filter==='Completed'){
  return tasks.filter(item=>item.done===true);
}
return tasks;
}
const deleteHandler=(id)=>{
setTasks(tasks.filter(item=>item.id!==id))
}
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h1>ToDo List</h1>
              <Form  onSubmit={formSumbit}/>
              <Filter onFilterChange={onFilterChange} />
              <Tasks  tasks={filterTasks()}  onCheckboxChange={onCheckboxChange} deleteHandler={deleteHandler}/>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
