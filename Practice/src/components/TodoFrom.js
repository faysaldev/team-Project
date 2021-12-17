import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {addTodo,selectTodo,selectUser} from '../features/appSlice';
  import { toast } from 'react-toastify';


function TodoFrom({update}) {
    const [text,setText]=useState('');


    const dispatch =useDispatch();
    const setTodoUpdate= useSelector(selectTodo);
      const user =useSelector(selectUser);

    const clickHandler=(e)=>{
        e.preventDefault();
        if(text){
            dispatch(addTodo({
                text:text,
                username:user?.name,
                photo:null
            }));
            toast.success("Hey Faysal Todo add succesfully");
        }

        setText('');

    }

    if(setTodoUpdate){
        setText(setTodoUpdate.text);
    }

    const updateHandler=(e)=>{
        e.preventDefault();
        alert("hey")
    }

    return (
        <form className='flex items-center justify-between pb-3'>
            <input className='flex-grow focus:outline-none border border-gray-400 p-2 rounded-lg focus:border-green-500 focus:ring focus:ring-green-300' type="text" placeholder='Add a New Todo...' value={text} onChange={(e)=> setText(e.target.value)}/>

                <button disabled={!user?.name} className='px-4 py-2 rounded-lg transfrom active:scale-90 hover:text-white bg-green-300 shadow hover:shadow-lg hover:bg-green-500 transition duration-150 focus:outline-none ml-2 focus:shadow-lg focus:bg-red-500' type="submit" onClick={!update?clickHandler:updateHandler}>{!update?'Add Todo':'Update Todo'}</button>

        </form>
    )
}

export default TodoFrom
