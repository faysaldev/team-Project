import Image from 'next/image'
import { SearchIcon,GlobeAltIcon,UserCircleIcon,MenuIcon,UsersIcon,MoonIcon,EmojiHappyIcon,XIcon,InformationCircleIcon,CollectionIcon,PhoneIcon,DocumentTextIcon,LocationMarkerIcon,UserGroupIcon,HomeIcon} from '@heroicons/react/solid'
import { useEffect, useState } from 'react'
import {useRouter} from 'next/router';
import { useTheme } from 'next-themes';
import {selectUser,logoutUser} from '../slices/appSlice'
import {useSelector,useDispatch} from 'react-redux'


function Header({storeData}) {
    const [input,setInput]= useState('');
    const [scroll,setScroll] = useState(false);
    const [productData,setProductData] =useState(storeData);
    const [sibebar, setSidebar] = useState(false);

    const { theme, setTheme } = useTheme()
    
    const router = useRouter();
    const userInfo= useSelector(selectUser);
    const dispatch = useDispatch();

    console.log(userInfo)

    
    const handleChange=(e)=>{
        e.preventDefault();
        setInput(e.target.value);
        
        if (!e.target.value.length > 0) {
            setProductData(storeData)
        }
    }

    
    useEffect(()=>{
        if(input.type === '') return;
        setProductData(()=> productData.filter((item)=> item.title.toLocaleLowerCase().match(input.toLocaleLowerCase())))
    },[input]);

    useEffect(()=>{
       window.addEventListener('scroll',()=> setScroll(true));

       return ()=>{
           window.removeEventListener('scroll',()=> setScroll(false))
       }
    },[])

    return (
        <>
        <header className={`${scroll && 'sticky top-0 z-50 bg-gray-100'} bg-white grid grid-cols-3 shadow-md p-5 md:px-10`}>
            {/* Left */}
            <div className='relative flex items-center sm:h-10 h-6 cursor-pointer my-auto animate-bounce'>
                {/* <Image src="https://links.papareact.com/qd3" layout='fill' objectFit='contain' objectPosition='left' /> */}

                <Image onClick={()=> router.push('/')} src="/logo.svg" layout='fill' objectFit='contain' objectPosition='left' />
            </div>
            {/* middle */}
            <div className="flex items-center border-2 rounded-full py-2">
                <input disabled={!userInfo} value={input} onChange={handleChange} className='outline-none pl-2 sm:pl-5 bg-transparent flex-grow text-gray-600 placeholder-gray-700 placeholder-shown:text-xs' type="text" placeholder={`Hi ${userInfo ?userInfo.name:'There!!!'}.Start your Search.`} />
                <XIcon className="hidden md:inline-flex h-6 transform hover:scale-125 hover:text-red-500 text-gray-500 cursor-pointer" onClick={()=> setInput('')} />
                <SearchIcon className='hidden md:inline-flex bg-red-400 text-white rounded-full p-2 cursor-pointer h-8 md:mx-2' />
            </div>
            {/* right */}
            <div className='flex items-center text-gray-500 sm:space-x-4 space-x-2 justify-end'>
                <p className='hidden md:inline relative cursor-pointer transition duration-200 ease-in-out tultip__p'>{`Hi ${userInfo ?userInfo.name:'Become Host'}`}
                    {userInfo &&(
                        <div className="toltip__user space-y-2 text-gray-200">
                            <h3 className='text-xl'>{userInfo.name}</h3>
                            <p>{userInfo.email}</p>
                            <span>Password Encripted</span>
                            <p className='text-md capitalize text-red-700 hover:text-white font-bold' onClick={()=> dispatch(logoutUser())}>Logout</p>
                        </div>
                    )}
                </p>
                    {
                        theme==='light'?
                        (<MoonIcon onClick={()=> setTheme(theme ==="dark"?"light":"dark")} className='h-6 cursor-pointer' />)
                        :
                        (<EmojiHappyIcon className='h-6 cursor-pointer' onClick={()=> setTheme(theme ==="dark"?"light":"dark")} />)
                    }
                    
                    <GlobeAltIcon className='h-6 cursor-pointer' />
                <div className='flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer'>
                    {userInfo ?(
                        <>
                        <MenuIcon className='h-6'  onClick={()=> setSidebar(true)} />
                        <UserCircleIcon className='h-6' onClick={()=> dispatch(logoutUser())} />
                        </>
                    ):(
                    <button onClick={()=> router.push('/login')}>Login</button>
                    )}
                </div>
            </div>

            {input && (
                <div className='flex flex-col col-span-3 mx-auto bg-gray-50 max-h-[300px] overflow-y-scroll scroll_bar_hide mt-4 dark:text-gray-500'>
                  <ul className='space-y-2'>
                      {productData?.map((item)=>(
                          <li onClick={()=> setInput(item.title)} key={item.id} className='flex items-center justify-between md:w-[600px] px-3 py-2 cursor-pointer group hover:bg-gray-200 rounded-md'>
                              <div className='flex items-center'>
                                  <div className='relative object-contain w-10 h-10'>
                                  <Image className='w-10 h-10 rounded-2xl object-contain group-hover:scale-150 transition duration-150 transform ease-out' src={item.image}  layout='fill' objectFit='contain' objectPosition='left'/>
                                  </div>
                                <h2 className='text-xs md:text-md ml-2 uppercase'>{item.category}</h2>
                              </div>

                              <div className='flex flex-col items-end space-y-2 text-xs md:text-md'>
                                <h4>{item.title}</h4>
                                <p className='font-bold'>${item.price}</p>
                              </div>
                          </li>
                      ))}
                  </ul>
                </div>
            )}

        </header>

        <div className="header__bottom">
                <p className="link menu">
                  <MenuIcon className='h-6 mx-2' onClick={()=> setSidebar(true)} />
                    All
                </p>
                <p className="link">Prime Video</p>
                <p className="link">Amazon Business</p>
                <p className="link">Today's Deals</p>
                <p className="link hidden">Electronice</p>
                <p className="link hidden">Food & Grocery</p>
                <p className="link hidden">Prime</p>
                <p className="link hidden">Buy Again</p>
                <p className="link hidden">Shopper Toolkit</p>
                <p className="link hidden">Health & Personal Care</p>
            </div>

            {/* for the side bar */}

            <div className={`sidebar__top ${sibebar && 'fixed top-0 left-0 w-screen h-screen custom__bg'}`}>
                <div className={`sibebar ${sibebar && 'show'}`}>
                    <div className="sidebar__top">
                    <div className="logo" onClick={() => router.push('/')}>
                        <img src="https://links.papareact.com/qd3" className='cursor-pointer animate-bounce' width={100} height={30} alt="" onClick={()=> router.push('/')} />
                        </div>

                        <XIcon className="closeIcon h-6 cursor-pointer transform hover:scale-150 hover:text-white transition duration-150 ease-out" onClick={() => setSidebar(false)}/>
                    </div>

                    <ul>
                        <li onClick={() => router.push('/')}><HomeIcon className='h-6' /> <span>Home</span></li>
                        <li><InformationCircleIcon className='h-6' /> <span>Our Information</span></li>
                        <li><CollectionIcon className='h-6' /> <span>About Us</span></li>
                        <li><PhoneIcon className='h-6' /> <span>Contact Us</span></li>
                        <li><DocumentTextIcon className='h-6' /> <span>Message</span></li>
                        <li><LocationMarkerIcon className='h-6' /> <span>Our Locaiton</span></li>
                        <li><UserGroupIcon className='h-6' /> <span>Join Our Community</span></li>

                      <div className='text-center text-xl p-4'>
                        <h2>{`Hi ${userInfo ?userInfo.name:'There'}!!!`}. How Are you dude?. Hope you are well. Thanks for Vesit my Website</h2>
                      </div>

                    </ul>
                </div>
            </div>

        </>
    )
}

export default Header
