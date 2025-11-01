'use client'
import React from 'react'
import * as motion from 'motion/react-client'
import NavBar from '@/app/components/ui/navRedux/navbar'
import GetPrice from '@/app/components/hooks/getPrice'
import { useQuery } from '@tanstack/react-query'
import { getProducts } from '@/app/lib/actions/getData'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/app/components/ui/footer/footer'
import LowerBanner from '@/app/components/ui/lowerBanner/lowerbanner'
type Props = {}


const About = (props: Props) => {
   const {data}=useQuery({
          queryKey:['allItems'],
          queryFn:()=>getProducts(),
          staleTime:1000*60*5
      })
      if(data!=undefined) console.log(data)
  return (
    <div className='bg-white text-black min-h-screen' >
       <motion.div className='w-full' >
            <NavBar/>
        </motion.div>
        <div className='w-full border-2 border-black md:min-h-[70vh] max-sm:min-h-[25vh] ' >
             <Image className='absolute w-full h-full ' src='' alt='About Banner' />
             <h1 className='relative md:top-[50vw] md:left-[45vw] ' >It&apos;s our code.</h1>
        </div>
        <div className='w-full flex flex-col space-y-2 px-8 ' >
          <Image className='' width={100} height={100} src='' alt='Black Square' />
           <h1 className='font-semibold text-sm ' >Our story, our code.</h1>
           <p className='text-md   w-1/3' >Pleased to meet you, we are ETQ. We design quality wardrobe essentials, by evolution of the classics. 
            Clean and mature, that&apos;s our way of life. It&apos;s our code.</p>
        </div>
        <div className='flex w-full space-x-4 border-2 border-black' >
          <Image className='' src='' alt='Product Example 1' />
          <Image className=''  src='' alt='Product Example 2' />

        </div>
        <div className='flex w-full md:justify-end 
        max-sm:justify-around border-2 border-black' > 
          <div className=' flex flex-col border-2 border-black justify-self-center self-end w-1/3 max-sm:w-2/3 p-4 ' >
            <h1 className='font-bold text-xl' >Our story began in 2010.</h1>
            <p className='' >
              We lived the flashy fashion lifestyle, always chasing the latest. 
              But we discovered the power of a strong base. 
              Slowly, we left the fluff out of our wardrobes and out of our lives, completely. 
              Our core became our everything. Our style matured and we desired to share our quiet luxury with the world.
               So we created ETQ. As the new essence.


            </p>
          </div>

        </div>
        <div className='w-full' >
          <Image className='' src='' alt='Product Example 3' />

        </div>
        <div className='flex w-full justify-start max-sm:justify-around border-2 border-black' > 
          <div className=' flex flex-col border-2 border-black w-1/3 max-sm:w-2/3 p-4 ' >
            <h1 className='font-bold text-xl' >More quality, less fuzz.</h1>
            <p className='' >
              Strong silhouettes. Nuanced colors. Thick layers of quality and a thin layer of logos. 
              That&apos;s ETQ. We master precision engineering and tinker with our products as if they were racecars.
               Every collection is the same but evolved. Icons only. And yet, still today we find ways to improve.
                Obsessive, yes. It&apos;s our art.
            </p>
          </div>

        </div>
        <div className='flex w-full space-x-4 border-2 border-black' >
          <Image className='w-1/3' src='' alt='Product Example 4' />
          <Image  className='w-1/3' src='' alt='Product Example 5' />
        </div>
        <div className='flex w-full justify-end max-sm:justify-around border-2 border-black' >
           <div className=' flex flex-col border-2 border-black w-1/3 max-sm:w-2/3 p-4 ' >
            
            {/* <h1 className='font-bold text-xl' >More quality, less fuzz.</h1>*/}
            <p className='' >
              And so our story goes on. Evolving classic etiquette to match the pace of today. 
              We don&apos;t just do it. We do it with grace.
            </p>
          </div>

        </div>
        <div className='flex flex-col px-4' >
          <h1 className='' >Our favorites</h1>
          {/* Favorites */}

        </div>

         <LowerBanner/>
         <Footer/>
      </div>
  )
}

export default About