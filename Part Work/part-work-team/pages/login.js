import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";
import {useDispatch} from 'react-redux'
import {useRouter} from 'next/router'
import {loginUser} from '../slices/appSlice'




function Login(props) {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const [name,setName] =useState('')
  const [email,setEmail] =useState('')
  const [password,setPassword] =useState('');
  const router =useRouter();
  const dispatch = useDispatch();

  const loginHandler=(e)=>{
    e.preventDefault();
    dispatch(loginUser({
      name,
      email,
      password,
    }));

    router.push('/')
  }

  return (
    <>
    <div className="relative h-screen overflow-hidden">
      <div
        className="relative h-[900px] sm:h-[900px] lg:h-[800px] 2xl:h-[900px]"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        <Image
          src="https://links.papareact.com/0fm"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div  className="absolute top-[30%] md:top-[10%] lg:top-[20%] xl:top-[10%] w-full text-center">
        <motion.div
          style={{ perspective: 2000, x, y, rotateX, rotateY, z: 100, cursor:'grab' }}
          drag
          dragElastic={0.16}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: "grabbing" }}
          className="w-full"
        >
          <div className="flex flex-col justify-center place-items-center rounded-lg   md:w-[800px] md:h-[600px] mx-auto">
            <motion.div
              style={{ perspective: 2000, x, y, rotateX, rotateY, z: 100 }}
              drag
              dragElastic={0.16}
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0, }}
              whileTap={{ cursor: "grabbing" }}
              className="w-[470px] md:w-[650px] h-[500px]  md:h-[600px] lg:w-full lg:h-[700px] sm:left-0  bg-red-500 bg-opacity-80 rounded-2xl"
            >
              <motion.div
                style={{ perspective: 2000, x, y, rotateX, rotateY, z: 100, cursor:'grab' }}
                drag
                dragElastic={0.16}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileTap={{ cursor: "grabbing" }}
                className="w-full h-full"

              >
                <div  className="w-[470px] md:w-[650px] h-[500px]  md:h-[600px] lg:w-full lg:h-[700px]">
                  {/* 
                    src="https://media.giphy.com/media/WT8liQbmP3CdbVUJSx/giphy.gif" */}
                  <Image
                    src="https://media0.giphy.com/media/3og0IJLpGAqmLwnuzC/200w.webp?cid=ecf05e47x1jklka10y0hv0sqbi9i4xt5q39tzvw4kx9wte91&rid=200w.webp&ct=g"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="rounded-2xl pointer-events-none shadow-lg"
                  />
                </div>
              </motion.div>

              <motion.div
                style={{ x, y, rotateX, rotateY, z: 2000, cursor:'grab' }}
                drag
                dragElastic={0.10}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileTap={{ cursor: "grabbing" }}
                className="absolute top-0 left-0 right-0 bottom-0 w-full h-full backdrop-blur-sm -backdrop-hue-rotate-180 p-5 rounded-md shadow-2xl z-40 text-3xl"
              >
                <form className='w-full flex flex-col p-2 space-y-4'>
                  <input type="text" className='bg-transparent border border-gray-500 px-3 py-2 rounded-md ring focus:ring-2 focus:ring-green-500 custom__placeholder focus:outline-none placeholder-shown:text-xl placeholder-shown:text-white' value={name} onChange={(e)=> setName(e.target.value)} placeholder='Enter Your name...' />
                  <input type="email" className='bg-transparent border border-gray-500 px-3 py-2 rounded-md ring focus:ring-2 focus:ring-green-500 custom__placeholder focus:outline-none placeholder-shown:text-xl placeholder-shown:text-white' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Enter Your Email..' />
                  <input type="password" className='bg-transparent border border-gray-500 px-3 py-2 rounded-md ring focus:ring-2 focus:ring-green-500 custom__placeholder focus:outline-none placeholder-shown:text-xl placeholder-shown:text-white' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Enter Your Password...' />

                  <button type="submit" className='btn' onClick={loginHandler}>SIGN IN</button>

                  <motion.div
                    inherit={{x:-1000,opacity:0}}
                    animate={{x:0,opacity:1}}
                    transition={{duration:0.3}}
                    className="text-lg text-gray-700 pt-[50px] md:text-3xl md:pt-[100px]"
                  >
                   <h1>Hey There Please Give the originial Value insite this authentication.Thannks...</h1>
                   <p className='text-md underline capitalize text-pink-700 cursor-pointer' onClick={()=> router.push('/')}>Go Back to Home page.</p>
                  </motion.div>
                </form>
              </motion.div>

            </motion.div>

          </div>
        </motion.div>

      </div>
    </div>
    </>
  );
}

export default Login;