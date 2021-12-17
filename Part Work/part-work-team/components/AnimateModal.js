import {motion,AnimatePresence} from 'framer-motion'
import {useState} from 'react'
import {XIcon} from '@heroicons/react/solid'
import Image from 'next/image'

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

function AnimateModal({setModal}) {
    const [data,setData] = useState([]);

    return (
        <div className="ads__modal">
        <AnimatePresence>
        <motion.div variants={modalVarients} animate='visible' initial='hidden' exit='hidden' className="w-[500px] mx-auto rounded-md shadow-md bg-gray-100 text-black min-h-[400px] mt-[70px] relative">

            <div className="px-4 py-3 block float-right">
                <XIcon className='h-6 transform hover:scale-125 hover:text-red-500 text-gray-500 cursor-pointer' onClick={()=> setModal(false)}/>
            </div>
            {/* close Icon */}

            <div className='w-full pt-4'>
                <div className='w-[400px] mx-auto'>
                    <img src="/ads.png" className='rounded-lg shadow hover:shadow-lg cursor-pointer hover:backdrop-blur-2xl' />
                    <h2 className='text-center font-bold text-lg pt-2 pb-4'>Super Combo 30 GB+700 Minites+ 25 Taka Fayrot 30 Day Pack 899TK</h2>

                </div>                
                <div className='flex justify-center items-center pb-6'>
                    <button className='text-white bg-red-600 px-6 py-3 rounded-md hover:bg-red-800 hover:shadow-xl' onClick={()=> setModal(false)}>Okay</button>
                </div>
            </div>

        </motion.div>
        </AnimatePresence>
        </div>
    )
}

export default AnimateModal
