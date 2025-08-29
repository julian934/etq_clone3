'use client'
import React from 'react'
import NavBar from '@/app/components/ui/navRedux/navbar'
import Image from 'next/image'
import Footer from '@/app/components/ui/footer/footer'
import LowerBanner from '@/app/components/ui/lowerBanner/lowerbanner'
import AuxiliaryBanner from '@/app/localImages/banners/auxiliary-banner.jpg'

type Props = {}

const Shipping = (props: Props) => {
  return (
    <div className='bg-white text-black' >
      <NavBar/>
        <Image  className='md:min-w-screen md:max-h-[15vw]' src={AuxiliaryBanner} alt='Banner' />
      
      <div className=' flex flex-col md:max-w-[50vw] py-4 self-center md:relative md:left-[20vw] space-y-6' >
        <h1 className='font-semibold py-6 ' >
        Help - Shipping &amp; Delivery</h1>
        <p className='md:min-w-[40vw]   self-center flex justify-self-center ' >Orders placed before 23:30 will be shipped the same day. Fast like we are furious.
        For the Netherlands, Germany, and Belgium, we also offer easily accessible pick-up points.</p>
        <div className='flex flex-col justify-center ' >
          <div className='flex justify-between p-4  ' >
            <h1 className='font-semibold' >Region</h1>
            <h1 className='font-semibold' >Carrier</h1>
            <h1 className='font-semibold' >Fee</h1>
            <h1 className='font-semibold' >Delivery</h1>
           
          </div>
          <div className='flex flex-col' >
            <hr className='w-full ' />
            <div className='flex justify-between p-4' >
              <h1>Netherlands</h1>
              <h1>PostNL</h1>
              <h1>Fee from &euro;150</h1>
              <h1>1-2 days</h1>
            </div>
            <hr className='w-full' />
            <div className='flex justify-between p-4' >
              <h1>Belgium</h1>
              <h1>Bpost</h1>
              <h1>Fee from &euro;150</h1>
              <h1>1-2 days</h1>
            </div>
            <hr className='w-full ' />
            <div className='flex justify-between p-4' >
              <h1>Germany</h1>
              <h1>DHL</h1>
              <h1>Fee from &euro;150</h1>
              <h1>1-3 days</h1>
            </div>
            <hr className='w-full ' />
            <div className='flex justify-between p-4' >
              <h1>United Kingdom</h1>
              <h1>Royal Mail</h1>
              <h1>Fee from &euro;130</h1>
              <h1>1-2 days</h1>
            </div>
            <hr className='w-full ' />
            <div className='flex justify-between p-4' >
              <h1>France</h1>
              <h1>La Poste</h1>
              <h1>Fee from &euro;150</h1>
              <h1>2-5 days</h1>
            </div>
            <hr className='w-full ' />
            <div className='flex justify-between p-4' >
              <h1>Denmark</h1>
              <h1>PostNord</h1>
              <h1>Free from 1500 DKK</h1>
              <h1>2-5 days</h1>
            </div>
            <hr className='w-full ' />
            <div className='flex justify-between p-4' >
              <h1>Sweden</h1>
              <h1>PostNord</h1>
              <h1>Fee from 2500 SEK</h1>
              <h1>2-5 days</h1>
            </div>
            <hr className='w-full ' />
            <div className='flex justify-between p-4' >
              <h1>Norway</h1>
              <h1>FedEx</h1>
              <h1> &euro;25</h1>
              <h1>2-5 days</h1>
            </div>
            <hr className='w-full ' />
            <div className='flex justify-between p-4' >
              <h1>Austria</h1>
              <h1>DHL</h1>
              <h1> Free from &euro;150</h1>
              <h1>2-5 days</h1>
            </div>
            <hr className='w-full' />
            <div className='flex justify-between p-4' >
              <h1>Switzerland</h1>
              <h1>FedEx</h1>
              <h1> 25 CHF</h1>
              <h1>2-5 days</h1>
            </div>
            <hr className='w-full' />
            <div className='flex justify-between p-4' >
              <h1>Spain</h1>
              <h1>Correos</h1>
              <h1> Free from &euro;150</h1>
              <h1>2-5 days</h1>
            </div>
            <hr className='w-full ' />
            <div className='flex justify-between p-4' >
              <h1>Italy</h1>
              <h1>Poste Italiane</h1>
              <h1> Free from &euro;150</h1>
              <h1>2-5 days</h1>
            </div>
            <hr className='w-full ' />
            <div className='flex justify-between p-4' >
              <h1>Ireland</h1>
              <h1>FedEx</h1>
              <h1> Free from &euro;150</h1>
              <h1>2-5 days</h1>
            </div>
            <hr className='w-full ' />
            <div className='flex justify-between p-4' >
              <h1>Portugal</h1>
              <h1>FedEx</h1>
              <h1> Free from &euro;150</h1>
              <h1>1-2 days</h1>
            </div>
            <hr className='w-full ' />
            <div className='flex justify-between p-4' >
              <h1>Greece</h1>
              <h1>FedEx</h1>
              <h1> Free from &euro;150</h1>
              <h1>2-5 days</h1>
            </div>
            <hr className='w-full ' />
            <div className='flex justify-between p-4' >
              <h1>Poland</h1>
              <h1>GLS</h1>
              <h1> Free from &euro;150</h1>
              <h1>2-5 days</h1>
            </div>
            <hr className='w-full ' />
            <div className='flex justify-between p-4' >
              <h1>UAE</h1>
              <h1>FedEx</h1>
              <h1> 200 AED</h1>
              <h1>2-5 days</h1>
            </div>
            <hr className='w-full ' />
            <div className='flex justify-between p-4' >
              <h1>US/ Canada</h1>
              <h1>FedEx</h1>
              <h1> $29</h1>
              <h1>2-5 days</h1>
            </div>
            <hr className='w-full ' />
            <div className='flex justify-between p-4' >
              <h1>Austria New Zealand</h1>
              <h1>FedEx</h1>
              <h1> 50 AUD 50 NZD</h1>
              <h1>2-5 days</h1>
            </div>

          </div>


        </div>

      </div>
      <LowerBanner/>
      <Footer/>
      </div>  
  )
}

export default Shipping