'use client'
import React,{useContext,useState,useEffect} from 'react'
import { StoreStateContext } from '@/app/lib/context/storeContext'
import * as motion from 'motion/react-client'
import Image from 'next/image'
import RightArrow from '../arrows/rightArrow'
import LongRightArrow from '../arrows/longRightArrow'
import LeftArrow from '../arrows/leftArrrow'
import LongLeftArrow from '../arrows/longLeftArrow'
type Props = {
    currItem:any
}

const ItemModal = (props: Props) => {
    const ctx=useContext(StoreStateContext);
    const [modalActive,setModalActive]=useState<any>(null);
    const [leftHover,setLeftHover]=useState<any>(null);
    const [rightHover, setRightHover]=useState<any>(null);
    let [currImg,setCurrImg]=useState<any>(null);
    useEffect(()=>{
        !currImg && setCurrImg(props?.currItem?.images[0]);
    },[currImg])
    const indLeft=()=>{
        //Index Increase
         setCurrImg(currImg--);
        
    }
    const indRight=()=>{
        //Index Decrease
         setCurrImg(currImg++);
    }
    console.log('Current Index', props?.currItem?.images?.indexOf(currImg));
  return (
        <motion.div className=' w-64 h-64 relative '  onHoverStart={()=>setModalActive(!modalActive)} onHoverEnd={()=> modalActive && setModalActive(!modalActive)} >
            <Image className='w-full h-full' width={100} height={100} src={modalActive? props?.currItem?.images[0]: currImg!=null && currImg} alt='Item Display' />
            {modalActive &&   <motion.div className='relative z-[9999]' >
                <motion.button className='relative -top-36 bg-gray-200 rounded-2xl ' onClick={()=>indLeft()} onHoverStart={()=>!leftHover && setLeftHover(!leftHover)}  onHoverEnd={()=>leftHover && setLeftHover(!leftHover)}>{leftHover?<LongLeftArrow/>:<LeftArrow/>}</motion.button> 
                <motion.button className='relative -top-36 left-52' onClick={()=>indRight()} onHoverStart={()=>!rightHover && setRightHover(!rightHover)} onHoverEnd={()=>rightHover && setRightHover(!rightHover)} >{rightHover?<LongRightArrow/>:<RightArrow/>}</motion.button> 

              </motion.div>}
          
        </motion.div>
        
  )
}

export default ItemModal