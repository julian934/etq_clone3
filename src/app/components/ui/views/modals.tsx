import React,{useState,useContext} from 'react'
import * as motion from 'motion/react-client'
import { StoreStateContext } from '@/app/lib/context/storeContext'
type Props = {}

const Modals = (props: Props) => {
  const ctx=useContext(StoreStateContext);
   const [hoverModal,setHoverModal]=useState<any>(null);
   const [modalActive,setModalActive]=useState<any>(null);
   const modeSetter=()=>{
    !modalActive && setModalActive('active')
    let currModal=modalActive
    ctx.activeModal(currModal);
    modalActive=='active' && setModalActive(null);

    ctx.activeModal(modalActive);
   }
   console.log('Testing Modal: ', ctx?.modal);
   console.log('testing modal 2: ', modalActive)
  return (
    <motion.div className='z-[9999]' onClick={modeSetter} onHoverStart={()=>!hoverModal && setHoverModal(!hoverModal)} onHoverEnd={()=>hoverModal && setHoverModal(!hoverModal)} >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={hoverModal?"gray":"black"} className=" size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z" />
  </svg>
  <h1> {ctx.modal?<span>{ctx.modal}</span>:null} </h1>
  </motion.div>
  )
}

export default Modals