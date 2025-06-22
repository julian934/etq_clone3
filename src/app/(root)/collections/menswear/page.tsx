'use client'
import React, { useState,useContext, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
//import { getFootWear } from '@/app/lib/database/connections'
import { getMensWear } from '@/app/lib/database/connections'
import NavBar from '@/app/components/ui/navRedux/navbar'
import Footer from '@/app/components/ui/footer/footer'
//import * as motion from 'motion/react-client'
import { motion, AnimatePresence } from 'framer-motion';

import Image from 'next/image'
//import {AnimatePresence} from "motion/react"
import Link from 'next/link'
import filterImg from '@/app/localImages/UI/filter-black.png'
import GetPrice from '@/app/components/hooks/getPrice'
import Filter from '@/app/components/ui/filterModal/filter'
import { StoreStateContext } from '@/app/lib/context/storeContext'
type Props = {}

const MensWear = (props: Props) => {
  const ctx=useContext(StoreStateContext);
   const [filterActive,setFilterActive]=useState<boolean>(false);
   const [filteredData,setFilteredData]=useState<any>([]);
   
    const {data:AllData}=useQuery({
        queryKey:['footwear'],
        queryFn:()=>getMensWear(),
        staleTime:1000* 60 * 5,
        
    })
    useEffect(()=>{
       let filterData=AllData?.data?.data?.filter((val:any)=>val.name?.toLowerCase().includes(ctx?.filterString?.toLowerCase()));
       
      setFilteredData(filterData);
     

     
       
    },[ctx.filterString])
    if(AllData!=undefined) console.log(AllData);
      const stateSwitcher=()=>{
    filterActive && setFilterActive(false);
    !filterActive && setFilterActive(true);
    }
    console.log('Current Data: ', ctx.filterString);
    console.log('Testing filterString: ', filteredData);
    console.log('testing sort: ', ctx.sortString)
  return (
    <div className='bg-white text-black' >
        <motion.div className='w-full' >
            <NavBar/>
        </motion.div>
        <div className='relative absolute' >
            <motion.div className=' w-full max-h-64 overflow-hidden  ' >
            <h1 className=' relative  justify-self-center self-center text-xl text-white z-100 top-56 ' >MensWear</h1>
            
             
            </motion.div>
            
        </div>
        <div className='w-full' >
         <div className='flex justify-between p-8 ' >
           <h1 className='' >{!filteredData? AllData?.data?.data.length:filteredData.length} {filteredData && filteredData?.length>1?'items':'item'}</h1>
          <div className='z-9999' >
            
            
            <motion.button className='z-9999 ' onClick={()=>stateSwitcher()} >
            <Image className='flex w-6 h-6 justify-center ' src={filterImg} alt='Filter Image' />
              <h1 className='' >Filter & Sort</h1>
              </motion.button>
            </div>
            <div className=' relative md:-top-20 md:right-96  ' >
         <motion.div className='flex md:justify-center z-9999 ' >
                {filterActive && <Filter items={AllData} />}

            </motion.div>
         </div>
         </div>
        
         <div className='flex flex-wrap self-center w-full p-2 gap-x-8' >
            {AllData && ctx.filterString==null&& ctx.sortString=='' && AllData?.data?.data?.map((items:any)=>
            <div className='flex flex-col justify-self-between self-center bg-slate-100 p-8  ' key={items.id} >
                <Link href={`/collections/${items.id}`} >
                
                <Image className=' w-64 h-64 ' src={items.images[0]} width={100} height={100} quality={100} alt={items.name} />
                <h1 className='text-lg w-40' >{items.name}</h1>
               
                <GetPrice id={items?.id} />
                </Link>
            </div>)}
            {AllData && ctx.filterString==null&& ctx?.sortString=='AZ' && AllData?.data?.data?.sort((a:any,b:any)=>a.name.localeCompare(b.name))?.map((items:any)=>
            <div className='flex flex-col justify-self-between self-center bg-slate-100 p-8  ' key={items.id} >
                <Link href={`/collections/${items.id}`} >
                
                <Image className=' w-64 h-64 ' src={items.images[0]} width={100} height={100} quality={100} alt={items.name} />
                <h1 className='text-lg w-40' >{items.name}</h1>
               
                <GetPrice id={items?.id} />
                </Link>
            </div>)}
            {AllData && ctx.filterString==null&& ctx?.sortString=='ZA' && AllData?.data?.data?.sort((a:any,b:any)=>b.name.localeCompare(a.name))?.map((items:any)=>
            <div className='flex flex-col justify-self-between self-center bg-slate-100 p-8  ' key={items.id} >
                <Link href={`/collections/${items.id}`} >
                
                <Image className=' w-64 h-64 ' src={items.images[0]} width={100} height={100} quality={100} alt={items.name} />
                <h1 className='text-lg w-40' >{items.name}</h1>
               
                <GetPrice id={items?.id} />
                </Link>
            </div>)}
            {filteredData && ctx.filterString!=null&& ctx.filterString=='inactive' && filteredData.map((items:any)=>
            <div className='flex flex-col justify-self-between self-center bg-slate-100 p-8  ' key={items.id} >
                <Link href={`/collections/${items.id}`} >
                
                <Image className=' w-64 h-64 ' src={items.images[0]} width={100} height={100} quality={100} alt={items.name} />
                <h1 className='text-lg w-40' >{items.name}</h1>
               
                <GetPrice id={items?.id} />
                </Link>
            </div>)}
            {filteredData && ctx.filterString!=null&& ctx.filterString!='inactive' && filteredData.map((items:any)=>
            <div className='flex flex-col justify-self-between self-center bg-slate-100 p-8  ' key={items.id} >
                <Link href={`/collections/${items.id}`} >
                
                <Image className=' w-64 h-64 ' src={items.images[0]} width={100} height={100} quality={100} alt={items.name} />
                <h1 className='text-lg w-40' >{items.name}</h1>
               
                <GetPrice id={items?.id} />
                </Link>
            </div>)}
         </div>
        </div>
        <div>
          
        </div>
        <Footer/>
        </div>
  )
}

export default MensWear