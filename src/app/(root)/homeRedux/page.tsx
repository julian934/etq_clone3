'use client'
import React from 'react'
import * as motion from 'motion/react-client'
import NavBar from '@/app/components/ui/navRedux/navbar'
import Footer from '@/app/components/ui/footer/footer'
import { useQuery } from '@tanstack/react-query'
import Sale from '@/app/components/shared/home/sale/sale'
import Menswear from '@/app/components/shared/home/menswear/menswear'
import Footwear from '@/app/components/shared/home/footwear/footwear'
import Wardrobe from '@/app/components/shared/home/wardrobe/wardrobe'
import Icons from '@/app/components/shared/home/icons/icons'
import Comfort from '@/app/components/shared/home/comfort/comfort'
import Made from '@/app/components/shared/home/how-its-made/made'
import LowerBanner from '@/app/components/ui/lowerBanner/lowerbanner'
type Props = {}

const Home = (props: Props) => {

  return (
    <div className='bg-white text-black' >
        <NavBar/>
        <Sale/>
        <Menswear/>
        <Footwear/>
        <Wardrobe/>
        <motion.div 
  className="flex overflow-x-auto gap-4 p-2 md:justify-around"
>
  <div className="shrink-0">
    <Icons />
  </div>
  <div className="shrink-0">
    <Made />
  </div>
  <div className="shrink-0">
    <Comfort />
  </div>
</motion.div>

        <LowerBanner/>
        <Footer/>
        </div>
  )
}

export default Home