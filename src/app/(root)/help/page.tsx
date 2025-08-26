'use client'
import React from 'react'
import NavBar from '@/app/components/ui/navRedux/navbar'
import Image from 'next/image'
import Footer from '@/app/components/ui/footer/footer'
import Link from 'next/link'
import AuxiliaryBanner from '@/app/localImages/banners/auxiliary-banner.jpg'
import LowerBanner from '@/app/components/ui/lowerBanner/lowerbanner'

type Props = {}

const CustomerService = (props: Props) => {
  return (
    <div className=' bg-white min-h-screen text-black' >
      <NavBar/>
      <div className='max-w-full  md:max-h-[50vh]  z-10  max-sm:max-h-[30vh] ' >
        <Image  className='max-sm:min-h-[30vh] z-10 md:max-h-[45vh] ' src={AuxiliaryBanner} alt='Background Banner' />

      </div>
      <div className='flex md:justify-self-center max-sm:flex-col z-[9999] text-black py-20  bg-white' >
        <div className='md:max-w-[20vw] space-y-[2vh] ' >
          <h1 className='font-semibold' >Help Topics</h1>
          <a href="mailto:jborner111@gmail.com?subject=Hello" className='' > 
            Can&apos;t find the answer you are looking for? 
            You can send an email to service&#64;etq-amsterdam.com </a>

        </div>
        <div className='md:max-w-[20vw] space-y-[5vh] ' >
        <div className=' space-y-[2vh] ' >
          <h1 className='font-semibold' >Size Guide</h1>
          <p className='' > 
           find out how to find your ETQ size.
            </p>
            <Link className='underline' href='/size-guide' >Read more</Link>

        </div>
        <div className=' space-y-[2vh]  ' >
          <h1 className='font-semibold' >Exchanges &amp; Returns</h1>
          <p className='' > 
           Read how to exchange or return your item&#40;s&#41; and which rules apply.
            </p>

            <Link  className='underline' href='/help-returns-exchanges' >Read more</Link>

        </div>

        </div>
        <div className='md:max-w-[20vw] space-y-[1.5vh] ' >
        <div className=' space-y-[2vh] ' >
          <h1 className='font-semibold' >Shipping &amp; Delivery</h1>
          <p className='' > 
           Shipping options &amp; rates, estimated delivery times and information about duties &amp; taxes.
            </p>
            <Link className='underline' href='/shipping-delivery' >Read more</Link>

        </div>
        <div className=' space-y-[2vh] ' >
          <h1 className='font-semibold' >Frequently Asked Questions</h1>
          <p className='' > 
          Find your answer in your frequently asked questions section. 
            </p>

            <Link className='underline'  href='/frequently-asked-questions' >Read more</Link>

        </div>

        </div>
        <div className='md:max-w-[20vw] space-y-[2vh] ' >
          <h1 className='font-semibold' > Payment </h1>
          <p className='' >Available payment options and other frequently asked payment questions.</p>
          <Link className='underline' href='/frequently-asked-questions' >Read more</Link>

        </div>
       

      </div>
        <LowerBanner/>
       <Footer/>
      </div>
  )
}

export default CustomerService