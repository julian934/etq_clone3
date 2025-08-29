'use client'
import React,{useState,useEffect,useContext} from 'react'
import { StoreStateContext } from '@/app/lib/context/storeContext'
import { getSneakers } from '@/app/lib/database/connections'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
//import { useQuery } from '@tanstack/react-query'
import { getFootWear } from '@/app/lib/database/connections'
import NavBar from '@/app/components/ui/navRedux/navbar'
import Footer from '@/app/components/ui/footer/footer'
import * as motion from 'motion/react-client'
import Image from 'next/image'
import {AnimatePresence} from "motion/react"
import leftArrow from '@/app/localImages/UI/left-1.png'
import GetPrice from '@/app/components/hooks/getPrice'
import Filter from '@/app/components/ui/filterModal/filter'
import { getTrousers } from '@/app/lib/database/connections'
import filterImg from '@/app/localImages/UI/filter-black.png'
import ViewChanger from '@/app/components/ui/viewChanger/view'
import ItemModal from '@/app/components/ui/itemModal/itemModal'

type Props = {}

const Trousers = (props: Props) => {
      const ctx=useContext(StoreStateContext);
      const [filterActive,setFilterActive]=useState<boolean>(false);
     const [filteredData,setFilteredData]=useState<any>([]);
  const {data:AllData}=useQuery({
    queryKey:['trousers'],
    queryFn:()=>getTrousers(),
    staleTime:1000*60*5
  })

    useEffect(()=>{
                              let filterData=AllData?.data?.data?.filter((val:any)=>val.name?.toLowerCase().includes(ctx?.filterString?.toLowerCase()));
                              
                             setFilteredData(filterData);
                            
                       
                            
                              
                           },[ctx.filterString])
                     if(ctx.userData!=undefined) console.log(ctx.userState)
                     if(AllData!=undefined) console.log(AllData);
                     console.log(ctx.userState)
                       const stateSwitcher=()=>{
                           filterActive && setFilterActive(false);
                           !filterActive && setFilterActive(true);
                           }
                           console.log('Current Data: ', ctx.filterString);
                           console.log('Testing filterString: ', filteredData);
                           console.log('testing sort: ', ctx.sortString)
               console.log(ctx.userState)
  return (
    <div className=' bg-white text-black md:min-h-screen ' >
    <div className='w-full' >
    <NavBar/>
    </div>
    <div className='flex min-md:w-1/5  w-full justify-between px-4 space-x-2 ' >
      <Image className='self-center' src={leftArrow} alt='left arrow' />
      
      <Link className='self-center' href='/collections/menswear' >Menswear</Link>
       <hr className=' h-6 origin-center  self-center rotate-0 border-2 ' />
        <h1 className='self-center w-full  ' >Trousers</h1>
    </div>
     <div className='w-full' >
         <div className='flex justify-between p-8 ' >
           <h1 className='' >{!filteredData? AllData?.data?.data.length:filteredData.length} {filteredData && filteredData?.length>1?'items':'item'}</h1>
           <div className='relative md:left-60' >
               <ViewChanger/>
            </div>
          <div className='z-9999' >
            
            
            <motion.button className=' relative md:left-96 z-9999 ' onClick={()=>stateSwitcher()} >
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
            
            <div className='flex flex-col justify-self-between self-center bg-white p-8 ' key={items.id} >
                <Link href={`/collections/${items.id}`} >
                
                
                <ItemModal currItem={items} />
                <h1 className='text-lg w-40' >{items.name}</h1>
               
                <GetPrice id={items?.id} />
                </Link>
            </div>)}
            {AllData && ctx.filterString==null&& ctx?.sortString=='AZ' && AllData?.data?.data?.sort((a:any,b:any)=>a.name.localeCompare(b.name))?.map((items:any)=>
            <div className='flex flex-col justify-self-between self-center bg-white p-8  ' key={items.id} >
                <Link href={`/collections/${items.id}`} >
                
                
                <ItemModal currItem={items} />
                <h1 className='text-lg w-40' >{items.name}</h1>
               
                <GetPrice id={items?.id} />
                </Link>
            </div>)}
            {AllData && ctx.filterString==null&& ctx?.sortString=='ZA' && AllData?.data?.data?.sort((a:any,b:any)=>b.name.localeCompare(a.name))?.map((items:any)=>
            <div className='flex flex-col justify-self-between self-center bg-white p-8  ' key={items.id} >
                <Link href={`/collections/${items.id}`} >
                
           
                <ItemModal currItem={items} />
                <h1 className='text-lg w-40' >{items.name}</h1>
               
                <GetPrice id={items?.id} />
                </Link>
            </div>)}
            {filteredData && ctx.filterString!=null&& ctx.filterString=='inactive' && filteredData.map((items:any)=>
            <div className='flex flex-col justify-self-between self-center bg-white p-8  ' key={items.id} >
                <Link href={`/collections/${items.id}`} >
                
                
                <ItemModal currItem={items} />
                <h1 className='text-lg w-40' >{items.name}</h1>
               
                <GetPrice id={items?.id} />
                </Link>
            </div>)}
            {filteredData && ctx.filterString!=null&& ctx.filterString!='inactive' && filteredData.map((items:any)=>
            <div className='flex flex-col justify-self-between self-center bg-white p-8  ' key={items.id} >
                <Link href={`/collections/${items.id}`} >
                
                
                <ItemModal currItem={items} />
                <h1 className='text-lg w-40' >{items.name}</h1>
               
                <GetPrice id={items?.id} />
                </Link>
            </div>)}
         </div>
        </div>
    <div className=' md:flex md:pt-32' >
      <Footer/>

    </div>
    </div>
  )
}

export default Trousers