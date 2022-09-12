import React from "react";
import './Component.css';



export default function Todo({
    todo,
    onCheckBtnClick,
    onDeleteBtnClick,
    onEditBtnClick
}){
    return(
        <>
            <div id="todo-item">
                {todo.isCompleted ? <span className='checked'>{todo.name}</span> : <span>{todo.name}</span>}
                <span>
                    <i class="fa-solid fa-check icon" onClick={() => onCheckBtnClick(todo.id)}></i>
                    <i class="fa-sharp fa-solid fa-trash icon" onClick={()=>onDeleteBtnClick(todo.id)}></i>
                    <i class="fa-solid fa-pen-to-square icon" onClick={()=>onEditBtnClick(todo.id)}></i>
                </span>
            </div>
        
        </>
    )
}