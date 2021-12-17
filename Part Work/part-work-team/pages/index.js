import { useEffect, useState } from 'react';
import AnimateModal from '../components/AnimateModal';
import Header from '../components/Header';
import Slider from '../components/Slider';

export default function Home({ storeData }) {

  const [modal,setModal]=useState(true);

  useEffect(()=>{
    setTimeout(() => {
        setModal(false)
    }, 6000);
  },[])

  return (
    <div>
      <Header storeData={storeData} />
      <Slider />

      {/* ads modal */}

        {modal && <AnimateModal setModal={setModal} />}

    </div>
  )
}


export async function getStaticProps() {
  const storeData = await fetch('https://fakestoreapi.com/products').then((response) => response.json())

  return {
    props: {
      storeData,
    }
  }
}