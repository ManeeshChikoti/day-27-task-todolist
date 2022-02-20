import { click } from "@testing-library/user-event/dist/click";
import React,{useState} from "react"
export default function Filter({onFilterChange}){
    const filters=["All","Active","Completed"];
    const clickHandler=(currentValue)=>{
        onFilterChange(currentValue);
    }
    return(
        <ul className="nav nav-pills todo-nav">
        {
            filters.map(item=>{
                return(
                    <li key={item} role="presentation" className="nav-item all-task active"
                    onClick={()=>clickHandler(item)}>
                        <a className="nav-link" style={{cursor:"pointer"}}>{item}</a></li>
                )
            })
        }
    </ul>

    );
}