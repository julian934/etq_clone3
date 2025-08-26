'use client'
import React from 'react'
import BannerModal from './bannerModal'

type Props = {}

const LowerBanner = (props: Props) => {
  return (
    <div className=' flex w-full md:h-[25vh] bg-gray-200 min-w-screen ' >
      
      <div className='flex justify-center self-center w-full ' > 
         <BannerModal/>

      </div>
      </div>
  )
}

export default LowerBanner