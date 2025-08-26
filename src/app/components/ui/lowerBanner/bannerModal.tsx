'use client'
import React,{useState} from 'react'
import * as motion from 'motion/react-client'
import Image from 'next/image'
import left from '@/app/localImages/UI/left-1.png'
import box from '@/app/localImages/UI/box.png'
import loop from '@/app/localImages/UI/oval-loop.png'

type Props = {}

const BannerModal = (props: Props) => {
  const [def,setDef]=useState<any>(null);
  return (
    <motion.div className='flex justify-self-center   '  >
  
      {def?<motion.div className='flex flex-col  md:max-w-[50vw]  justify-center self-center w-full space-y-4 ' >
        <Image  className='self-center h-10 w-10 ' src={box} alt='Box' />
        <h1 className='font-semibold self-center' >Free &amp; fast delivery </h1>
        <p className='self-center md:max-w-[30vw] px-4  text-center' > Orders placed before 23:30 are shipped the same day. Enjoy free shipping 
          on all orders above &euro;150 in the EU. </p>
          <motion.div className='flex space-x-2 self-center' >
             <button className='rounded-3xl bg-gray-100 '  onClick={()=>setDef(!def)} >
                 <Image  className=' h-8 w-8' src={left} alt='left arrow' />
             </button>
             <button className='rounded-3xl bg-gray-100 ' onClick={()=>setDef(!def)}  >
                 <Image  className='rotate-180 h-8 w-8 ' src={left} alt='right arrow' />
             </button>

            </motion.div>

      </motion.div>:<motion.div className='flex  md:max-w-[50vw] flex-col justify-self-center self-center  space-y-4 ' >
      <Image  className='self-center h-10 w-10 ' src={loop} alt='Circular' />
        <h1 className=' self-center font-semibold' >Easy returns &amp; exchanges </h1>
        <p className='self-center md:max-w-[30vw] px-4  text-center' > All orders can be easily returned or exchanged for a different size, color, or model 
          within 14 days through our return portal. </p>
          <motion.div className='flex space-x-10 self-center p-2 ' >
             <button className='rounded-3xl bg-gray-100 scale-110' onClick={()=>setDef(!def)} >
                 <Image  className=' h-6 w-6' src={left} alt='left arrow' />
             </button>
             <button className='rounded-3xl bg-gray-100 scale-110 ' onClick={()=>setDef(!def)}  >
                 <Image  className='rotate-180 h-6 w-6 ' src={left} alt='right arrow' />
             </button>

            </motion.div>

        </motion.div>}
      <div className='' >


      </div>

      </motion.div>
  )
}

export default BannerModal