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
  const [currAZData,setAZData]=useState<any>('inactive');
  const [currZAData,setZAData]=useState<any>('inactive');
  const [categories,setCategories]=useState<any>();
  const inputRef=useRef<any>(null);
  const filterData=async()=>{
        ctx.filterStr(inputRef?.current?.value)
  }

  const sortData=async()=>{
    
  }

  const getCategories=async()=>{

  }
  const AZData=async(flag:string)=>{
    const currFlag=await flag;
   // setAZData(currFlag)
   
     if(currAZData=='AZ' || currAZData=='ZA'){
      //await currAZData=='active' && 
      setAZData('inactive'); 
     
      ctx.sortStr(currAZData)
       //&& ctx.sortStr('none');
     }else{
      //setAZData('active');
      setAZData('active');
      setZAData('inactive');
      ctx.sortStr(currFlag);
      //setZAData('inactive'); 
     }

    
  }
  const ZAData=async(flag:string)=>{
    const currFlag=await flag;
  
    if(currZAData == 'ZA' || currZAData=='AZ' ){
      //await currZAData=='active' &&
       setZAData('inactive'); 
       ctx.sortStr(currZAData);
        
       //setAZData('inactive'); //&& ctx.sortStr('none');
    }else{

      setZAData('active');
      setAZData('inactive');
      ctx.sortStr(currFlag); 
    }
    
    
  }
  const priceFilter=async()=>{

  }

   items && console.log("Current Items: ", items);
   //filter Options: 
   //Sorting OPtions: A to Z, greatest price to lowest price, subcategories.
   console.log('currentSort:', ctx.sortString);
  return (
    <div className='absolute  md:max-h-[400px] md:max-w-[400px] top-4 right-4 z-9999 bg-gray-300 text-white px-4 py-2 rounded shadow-lg' >
        
        <motion.div className='w-full px-2' >
           <h1 className='text-lg' >Filter: </h1>
           <input className='rounded-sm text-black' placeholder=' Type here...' onChange={filterData} ref={inputRef} />

        </motion.div>
        <div className='w-full px-2 ' >
          <h1 className='text-lg' >Sort: </h1>
          {currAZData=='active'?<button className='px-4 border-2 border-white rounded-md  ' onClick={()=>AZData('AZ')}  >
            
            <Image className='scale-75 shadow-2xl' src={az} alt='A to Z filter' />
          </button>:<button className='px-4 hover:border-2 hover:border-white hover:rounded-md ' onClick={()=>AZData('AZ')}  >
            
            <Image className='' src={az} alt='A to Z filter' />
          </button>}
           
          {currZAData=='active'?<button className='px-4 border-2 border-white rounded-md  ' onClick={()=>ZAData('ZA')}  >
            
            <Image className='scale-75 shadow-2xl' src={za} alt='Z to A filter' />
          </button>:<button className='px-4 hover:border-2 hover:border-white hover:rounded-md ' onClick={()=>ZAData('ZA')}  >
            
            <Image className='' src={za} alt='Z to A filter' />
          </button>}
          {/*  <div className=''  > 
             <h3 className='text-md' >mapped subcategories </h3>
            </div>*/}
           
          

        </div>

        </div>
  )
}

export default Filter