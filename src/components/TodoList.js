import React from "react";
import Todo from "./Todo";

function TodoList({todoList,onCheckBtnClick,onEditBtnClick,onDeleteBtnClick}){
    return(
        <div>
            {
                todoList.map((todo)=>(
                    <Todo
                        todo={todo}
                        onCheckBtnClick={onCheckBtnClick}
                        onEditBtnClick={onEditBtnClick}
                        onDeleteBtnClick={onDeleteBtnClick}
                    />
                ))
            }
        </div>
    )
}
export default TodoList

