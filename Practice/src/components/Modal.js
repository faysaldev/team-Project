import {motion,AnimatePresence} from 'framer-motion'
import {useState} from 'react'
import { useDispatch } from 'react-redux';
import {login} from '../features/appSlice';

const modalVarients ={
    hidden:{
        y:-1000,
        opacity:0,
    },
    visible:{
        y:0,
        opacity:1,
        transition:{
            type:'spring',
            duration:0.9
        }
    },
}

function AnimateModal({setShowModal}) {
    const dispatch =useDispatch()

    const [text,setText]=useState('');

    
    
    
    const hideModal=()=>{
        setShowModal(false)
    }
    
    const addUser =(e)=>{
        e.preventDefault();
        dispatch(login({name:text}));

        setText('');

        setShowModal(false)
        
    }


    return (
        <AnimatePresence>
        <motion.div variants={modalVarients} animate='visible' initial='hidden' exit='hidden' className="modal__container relative shadow-lg mx-auto p-4 rounded">
            <div onClick={hideModal} className="bg-red-300 cursor-pointer absolute top-0 right-4">
               <i class="far fa-times-circle p-3 text-white rounded-lg"></i>
            </div>
        <form className='flex flex-col pb-3 pt-10'>

            <input className='flex-grow focus:outline-none border border-gray-400 p-2 rounded-lg focus:border-green-500 focus:ring focus:ring-green-300 mb-2' type="text" placeholder='Enter userName' value={text} onChange={(e)=> setText(e.target.value)}/>

            <button className='px-4 py-2 rounded-lg transfrom active:scale-90 hover:text-white bg-green-300 shadow hover:shadow-lg hover:bg-green-500 transition duration-150 focus:outline-none ml-2 focus:shadow-lg focus:bg-red-500' type="submit" onClick={addUser}>Login</button>
        </form>
        </motion.div>
        </AnimatePresence>
    )
}

export default AnimateModal
