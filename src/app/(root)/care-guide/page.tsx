'use client'
import React from 'react'
import Image from 'next/image'
import NavBar from '@/app/components/ui/navRedux/navbar'
import LowerBanner from '@/app/components/ui/lowerBanner/lowerbanner'
import Footer from '@/app/components/ui/footer/footer'
import AuxiliaryBanner from '@/app/localImages/banners/auxiliary-banner.jpg'
type Props = {}

const CareGuide = (props: Props) => {
  return (
    <div className='bg-white text-black min-h-screen ' >
      <NavBar/>
      <Image  className=' max-sm:min-h-[25vh] md:max-h-[20vh] w-full '  src={AuxiliaryBanner} alt='Banner' />
      <div className='relative' >
          <Image className='' src='' alt='left arrow' />
         <h3>Return</h3>
      </div>
      <div className='flex self-center justify-self-center flex-col max-sm:w-[80vw] space-y-4 py-4  md:w-[50vw] ' >
        <h1 className='font-semibold text-2xl ' >Care Guide</h1>
        <div className='' >
          <h1 className='font-semibold' >Stay box fresh</h1>
           <p className='' >Dirt won&apos;t impact your style statement. Just keep things clean and give your gear a fresh scrub now and then. Here is how.    </p>
        </div>
            <div>
              <h1 className='font-semibold'>The ETQ wardrobe routine</h1>
              <p className='' >Most of our products are machine washable and stay in shape or are easy to iron.
                 Please read the label on your ETQ garment to find the care instructions.  </p>

            </div>
            <div className='' >
              <h1 className='font-semibold' >The ETQ shoe routine</h1>
              <p className='' >Our leather shoe collection is not machine washable. 
              Read below and you are 5 steps closer to perfection. </p>
              <ul className='flex flex-col' >
                <li>Start by getting yourself <span className='underline' >some proper tools</span>.</li>
                <li>Prepare well, take out the laces, remove any loose dirt.</li>
                <li>Clean it, like you mean it.</li>
                <li>Upgrade&apos;em with fresh <span className='underline' >odor-free insoles</span>.</li>
                <li>Top it off with crispy new <span>laces</span>.</li>
              </ul>
              
            </div>
            <div>
              <h1 className='font-semibold' >Cleaning any ETQ suedes or nubuck:</h1>
              <ul className='flex flex-col' >
                <li><span className='font-semibold' >  To clean the upper</span>, stay away from water. Cleaning suede or requires extra care to avoid damage. 
                Nubuck or suedes do not respond well to moisture, so we recommend spot-cleaning these materials with <span className='underline' >our brush</span> only. 
                Suede is delicate so gently brush the suede in one direction. Revive that nap.</li>
                <li><span className='font-semibold' >Stubborn stains?</span>
                Apply the SneakerLAB®x ETQ sneaker cleaner locally. Use it lightly.
                 Now get the brush to work the cleaner into the suede. Blot it all with a microfiber cloth to absorb moisture.
                </li>
                <li className='' ><span className='font-semibold' >To clean the outsole,</span> use our SneakerLAB® X ETQ sneaker cleaner. 
                Using circular motions, gently scrub the outsole clean. Make sure you don't touch the upper leather. </li>
                <li className='' ><span className='font-semibold' >Minimize unwanted odors</span> with our odor protector inside the shoes. 
                Allow shoes to air dry completely for at least 2 hours. </li>

              </ul>
            </div>
            <div className='' >
              <h1 className='font-semibold' >Cleaning full-grain leather and premium Nappa:</h1>
              <ul>
                <li>
                  <span className='font-semibold' >Upon receiving your ETQs</span> lightly coat them with the SneakerLAB® x ETQ leather care. 
                  Be sure to test it on a small section before spraying your entire shoe. Pamper them frequently.
                   Every four to six months, apply a generous amount of our leather care to your shoes, to maintain their natural sheen and prevent cracking. 
                   Allow drying. Fully. 
                </li>
                <li><span className='font-semibold' >To clean</span>apply SneakerLAB® X ETQ sneaker cleaner: dampen the brush with water and apply it to your sneakers and the outsole. 
                Using circular motions, gently scrub them clean. Wipe away the excesses by using a microfiber cloth.</li>
                <li>
                  <span className='font-semibold' >Minimize unwanted odors</span>
                  with our odor protector, inside the shoes. Allow shoes to air dry completely for at least 2 hours.
                </li>
              </ul>

            </div>

      </div>
    
      <LowerBanner/>
     
      
      <div className='flex justify-center' >
      <Footer/>
      </div>
      
      </div>
  )
}

export default CareGuide