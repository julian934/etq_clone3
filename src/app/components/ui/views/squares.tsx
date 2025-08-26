'use client'
import React,{useState,useContext} from 'react'
import * as motion from 'motion/react-client'
import { StoreStateContext } from '@/app/lib/context/storeContext'
type Props = {}

const Squares = (props: Props) => {
  const ctx=useContext(StoreStateContext);
  const [hoverModal,setHoverModal]=useState<any>(null);
   const [modalActive,setModalActive]=useState<any>(null);
     const modeSetter=()=>{
      !modalActive && setModalActive('active')
      let currModal=modalActive
      ctx.activeSquare(currModal);
      modalActive=='active' && setModalActive(null);
      ctx.activeSquare(modalActive);
     }
     console.log('Testing Squares: ', ctx?.square);
   console.log('Testing Squares 2: ', modalActive)
  return (
    <motion.div className='z-[9999]' onClick={modeSetter} onHoverStart={()=>!hoverModal && setHoverModal(!hoverModal)} onHoverEnd={()=>hoverModal && setHoverModal(!hoverModal)} >
      <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={hoverModal?"gray":"black"} className="size-6 hover:color-orange-200 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
</svg>
<h1> {ctx.square?<span>{ctx.square}</span>:null} </h1>
    </motion.div>
  )
}

export default Squares