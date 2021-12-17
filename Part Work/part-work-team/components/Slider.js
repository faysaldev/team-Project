import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {selectUser,logoutUser} from '../slices/appSlice'
import {useSelector,useDispatch} from 'react-redux'
import {useRouter} from 'next/router'

function Slider() {

    const carouselImages = ['/photo-1550439062-609e1531270e.jpeg','/photo-1504805572947-34fad45aed93.jpeg','/photo-1534972195531-d756b9bfa9f2.jpeg','/photo-1571171637578-41bc2dd41cd2.jpeg','/photo-1590959651373-a3db0f38a961.jpeg'];

    const userInfo=useSelector(selectUser);
    const dispatch = useDispatch();
    const router =useRouter();


    const handleClick=()=>{
        if(userInfo){
            dispatch(logoutUser())
        }else{
            router.push('/login')
        }
    }

    return (
        <div className="md:h-[800px] custom_slider relative">
            <Carousel
            className="home__carousel"
            showArrows={true}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            showThumbs={false}
            interval={5000}
            transitionTime={200}
        >
        {carouselImages.map((carouselImage) => (
          <div className='w-full overflow-hidden'>
            <img className='w-full h-full object-contain' src={carouselImage} alt="carousel" />
          </div>
        ))}
      </Carousel>

            <div className='absolute top-[50%] left-[50%] custom__slider px-4 py-3'>
                <h1 className='text-xl text-white text-center md:text-2xl md:text-gray-200'>HI there. I am faysal Welcome to our websites :)</h1>

                <div className='flex flex-col items-center space-y-1 md:flex-row md:space-y-0 md:space-x-4 justify-center'>
                <button className='sliderBtn'>I' am {userInfo?userInfo.name:'Flexibile'}</button>

                <button className='sliderBtn' onClick={handleClick}>{userInfo?'Logout':'Login'}</button>
                </div>
            </div>
        </div>
    )
}

export default Slider
