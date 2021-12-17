import React from 'react'
import Item from './Item'
import TodoFrom from './TodoFrom';
import { useSelector } from 'react-redux'
import {selectTodo, selectTodos} from '../features/appSlice'

function Todo() {
    const todos= useSelector(selectTodos);
    const setTodoUpdate= useSelector(selectTodo);
    
    return (
        <div>
            
           {!setTodoUpdate && <TodoFrom />}
            <div className="alltodo">
                {todos?.map(({_id,text,username,photo}) =>(
                <Item key={text} _id={_id} username={username} photo={photo} text={text} />  
            ))}
            </div>
        </div>
    
    )
}

export default Todo
