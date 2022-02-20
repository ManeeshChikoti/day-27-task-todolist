import React from "react";

export default function Task({ name,id, done,onCheckboxChange ,deleteHandler}) {
    return (
        <div className= {"todo-item " + (done ?'complete':'')} >
            <div className="checker">
                <span className="">
                    <input type="checkbox" checked={done}  onChange={(e)=>onCheckboxChange(id,e.target.checked)}/>
                </span>
            </div>
            <span className="move">{name}</span>
            <button style={{float:"right"}} className="btn btn-danger"  onClick={()=> deleteHandler(id)}>x</button>
        </div>


    );
}