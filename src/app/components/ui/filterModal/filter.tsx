'use client'
import React,{useContext,useState,useEffect,useRef} from 'react'
import { StoreStateContext } from '@/app/lib/context/storeContext'
import { motion, AnimatePresence } from 'framer-motion';
import az from '@/app/localImages/UI/a-to-z.png'
import za from '@/app/localImages/UI/z-to-a.png'
import Image from 'next/image';

type Props = {}

const Filter = (items: any) => {
  const ctx=useContext(StoreStateContext);
  const [filt,setFilt]=useState<any>();
  const [sorted,setSorted]=useState<any>();
  const [currAZData,setAZData]=useState<any>();
  const [categories,setCategories]=useState<any>();
  const inputRef=useRef<any>(null);
  const filterData=async()=>{
        
  }

  const sortData=async()=>{
    
  }

  const getCategories=async()=>{

  }
  const AZData=async(flag:string)=>{

  }
  const priceFilter=async()=>{

  }

   items && console.log("Current Items: ", items);
   //filter Options: 
   //Sorting OPtions: A to Z, greatest price to lowest price, subcategories.
  return (
    <div className='absolute  md:max-h-[400px] md:max-w-[400px] top-4 right-4 z-9999 bg-gray-300 text-white px-4 py-2 rounded shadow-lg' >
        
        <motion.div className='w-full px-2' >
           <h1 className='text-lg' >Filter: </h1>
           <input className='rounded-sm' placeholder=' Type here...' onChange={filterData} ref={inputRef} />

        </motion.div>
        <div className='w-full px-2 ' >
          <h1 className='text-lg' >Sort: </h1>
           <button className='px-4' onClick={()=>AZData('AZ')}  >
             
             <Image className='' src={az} alt='A to Z filter' />
           </button>
            <button className='px-4' onClick={()=>AZData('ZA')} >
             
             <Image className='' src={za} alt='Z to A filter' />
            </button>
            <div className=''  > 
             <h3 className='text-md' >mapped subcategories </h3>
            </div>
          

        </div>

        </div>
  )
}

export default Filter