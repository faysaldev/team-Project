import React, { useEffect, useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import { motion, useTransform, useMotionValue } from "framer-motion";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import {auth,provider} from './firebase'
import {login,selectUser,logout,addTodo} from './features/appSlice';
import Modal from './components/Modal'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import TryCom from './components/TryCom';


function App() {

  const [showModal,setShowModal]=useState(false);

  const user =useSelector(selectUser);
    const dispatch =useDispatch();

      const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);

    const singIn=()=>{


    }

  //  useEffect(()=>{
  //     axios.get('http://localhost:7000/all').then((response)=> response.json()).then((data)=> {
  //       dispatch(addTodo(data))
  //     }).catch((error)=> alert(error))
  //   },[])

  return (
    <div className="bg-red-300 min-h-screen relative">
        {showModal && (
            <div className="modal">
              <Modal setShowModal={setShowModal} />
            </div>
          )}
        <div className="todos p-4 bg-white rounded-md absolute shadow-lg">



          <motion.div initial={{x:-500,opacity:0}} animate={{x:0,opacity:1}} className='flex items-center justify-center mb-4'>
             {user?.name?(
               <button onClick={()=> dispatch(logout())} className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl border focus:outline-none'>SIGN OUT</button>
             ):(
               <button onClick={()=> setShowModal(true)} className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl border focus:outline-none'>SIGN IN</button>
             )}
          </motion.div>

        <motion.div
         style={{ perspective: 2000, x, y, rotateX, rotateY, z: 100, cursor:'grab' }}
          drag
          dragElastic={0.16}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: "grabbing" }}
          className="bg-red-100 px-4 py-2 rounded-md shadow-lg"
        >
            <motion.div
             style={{ perspective: 2000, x, y, rotateX, rotateY, z: 100, cursor:'grab' }}
                drag
                dragElastic={0.16}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileTap={{ cursor: "grabbing" }}
                className="w-full h-full"
            >
              <div className='animation px-2'>
                <h1 className="text-3xl text-center text-gray-600 mb-4">Hey {user?.name?user.name:'There'} Welcome to my Project!!!</h1>
              <Todo />
              </div>
            </motion.div>

          </motion.div>
        </div>

        <ToastContainer position='top-right' />

              <TryCom />

    </div>
  );
}

export default App;
