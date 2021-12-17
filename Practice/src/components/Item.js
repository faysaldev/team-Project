import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {removeTodo, selectTodo, singleTodo} from '../features/appSlice';
import {motion ,AnimatePresence} from 'framer-motion'
import TodoFrom from './TodoFrom';
  import { toast } from 'react-toastify';

const itemsVaients={
    hidden:{
        y:-1000,
        opacity:0
    },
    visible:{
        y:0,
        opacity:1,
        transition:{
            type:'spring',
            duration:0.3
        }
    }
}

function Item({_id,username,photo,text}) {
    const dispatch = useDispatch();
    const setTodoUpdate= useSelector(selectTodo);

    const deleteTodo=(id)=>{
        dispatch(removeTodo({id:id}));
        toast("Todo Was Deleted SuccesFully!!!");


    }

    const update=(id)=>{
        alert(id);
        // dispatch(singleTodo({
        //     _id,
        //     text,
        //     photo,
        //     username,
        // }));
        toast.warning("There are some Problem In the code Faysal ):");
    }

    return (
        <>
        {!setTodoUpdate?(
                <AnimatePresence>
                    <motion.div variants={itemsVaients} initial='hidden' animate='visible' exit={{x:-1000}} className='flex items-center justify-between bg-yellow-200 p-2 rounded-md mt-4 hover:bg-purple-200 cursor-pointer transition duration-100 ease-out'>
                <div className='flex flex-col md:flex-row items-center cursor-pointer'>
                    <img className='w-10 h-10 rounded-full object-contain transfrom hoverImage' alt={photo} src={photo?photo: '/download.jpg'} alt={username} />
                    <h3 className='md:pl-4 md:text-md'>@{username}</h3>
                </div>

                <p className='text-xl text-black'>{text}</p>

                <div className='flex items-center px-1 space-x-4'>
                    <i onClick={()=> deleteTodo(_id)} class="far fa-trash-alt bg-green-700 rounded-full p-3 text-center text-white cursor-pointer hover:bg-green-400 hover:text-black transition duration-150"></i>
                    <i onClick={()=> update(_id)} class="fas fa-pen-alt bg-green-700 rounded-full p-3 text-center text-white cursor-pointer hover:bg-green-400 hover:text-black transition duration-150"></i>
                </div>
            </motion.div>
            </AnimatePresence>
        ):(
            <TodoFrom update />
        )}
        </>
    )
}

export default Item
