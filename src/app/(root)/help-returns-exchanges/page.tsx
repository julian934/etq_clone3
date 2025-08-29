'use client'
import React from 'react'
import NavBar from '@/app/components/ui/navRedux/navbar'
import LowerBanner from '@/app/components/ui/lowerBanner/lowerbanner'
import Footer from '@/app/components/ui/footer/footer'
import Image from 'next/image'
import Link from 'next/link'
import AuxiliaryBanner from '@/app/localImages/banners/auxiliary-banner.jpg'


type Props = {}

const Help = (props: Props) => {
  return (
    <div className='bg-white min-h-screen text-black' >
      <NavBar/>
      <Image  className='md:max-h-[20vh] max-sm:min-h-[25vh] '  src={AuxiliaryBanner} alt='Banner' />
      
      <div className='flex flex-col  md:max-w-[50vw] justify-self-center md:min-w-[50vw] md:space-y-4 p-2 ' >
       
        <div className='flex flex-col' >
        <h1 className='font-semibold' >
           Help - returns &amp; Exchanges
        </h1>
        <p className='' >Returning a product is possible by pushing the button below. 
          Here you can submit the product(s) you wish to return, through our onlinereturn portal.
           When requesting a return or exchange, please make sure to mind the following information.</p>
           <div className='bg-black text-white  max-h-[5vh]  min-w-[5vw] max-w-[20vw] rounded-md ' >
            <Link href='/returns' >
             <h1 className='flex  justify-self-center self-center p-4 ' >Return portal</h1> 
             </Link>
             </div>

        </div>
        <div className='flex flex-col' >
          <h1 className='font-semibold' >Our return &amp; exchange policy</h1>
          <ul className='space-y-2' >
            <li><Image className='' src='' alt='black square' /><p>Upon arrival of your order, you have 14 days to submit a return or exchange through our <span className='underline' ><Link href='/return' >return portal</Link></span>.</p></li>
            <li><Image className='' src='' alt='black square' /><p>Doesn't fit? Exchange your product for the right size via our return portal.</p></li>
            <li><Image className='' src='' alt='black square' /><p>Item(s) should be clean and unworn, all tags and packaging material must still be present and in good condition.</p></li>
            <li><Image className='' src='' alt='black square' /><p>For hygiene reasons, underwear is sealed upon delivery and can only be returned or exchanged if the seal is still intact. If the seal has been broken or removed, the return cannot be accepted.</p></li>
            <li><Image className='' src='' alt='black square' /><p>By returning a product, you acknowledge that refunds (either partial or complete) may be refused if the returned item does not meet our specified terms and conditions.</p></li>
            <li><Image className='' src='' alt='black square' /><p>Items purchased as part of a set can only be returned or exchanged together as a complete set.</p></li>
            <li><Image className='' src='' alt='black square' /><p>We strongly recommend using our returns portal to return products. If you choose not to use it, we are not liable for any potential loss of the return and processing may take longer.</p></li>
            <li><Image className='' src='' alt='black square' /><p>Price difference due to ongoing promotions can be compensated with a voucher.</p></li>
            <li><Image className='' src='' alt='black square' /><p>The cost of a return or exchange is shown in the table below.</p></li>
            <li><Image className='' src='' alt='black square' /><p>Costs incurred for returns using a carrier of choice cannot be reimbursed.</p></li>
            <li><Image className='' src='' alt='black square' /><p>When returning multiple items, we charge a €1 handling fee for each additional item.</p></li>
          </ul>

        </div>
        <div className='' >
          {/* Graph Implementation */}

        </div>
        <div className='' >
          <h1 className='font-semibold' >How to return or exchange</h1>
          <ul className='space-y-2' >
            <li><Image className='' src='' alt='black square' /><p>Head to our online <span className='underline' ><Link href='/return' >return portal</Link></span>.</p></li>
            <li><Image className='' src='' alt='black square' /><p>Fill in your order number and the email address you used when placing your order.</p></li>
            <li><Image className='' src='' alt='black square' /><p>Select the item(s) you want to exchange and/or return along with the reason(s) and tell us if you wish to receive a refund or an exchange.</p></li>
            <li><Image className='' src='' alt='black square' /><p>Follow the steps in the portal.</p></li>
            <li><Image className='' src='' alt='black square' /><p>After your return is submitted you will receive a return label which you can use to send it back to us.</p></li>
            <li><Image className='' src='' alt='black square' /><p>FOR ALL NON-EU RETURNS except UK: Please add 3 times the invoice on the parcel in a document slide. Please ask service@etq-amsterdam.com to provide you with these documents.</p></li>
            <li><Image className='' src='' alt='black square' /><p>All returns within the UK can be sent to our UK warehouse. Through the return portal, you will receive a return label directed to that warehouse.</p></li>
            <li><Image className='' src='' alt='black square' /><p>Drop off your return at the nearest parcel shop.</p></li>
          </ul>

        </div>
        <div className='space-y-4' >
          <h1 className='font-semibold' >Customs, duties and taxes</h1>
          <p>All returns and exchanges sent from countries outside the European Union (with the exception of the United Kingdom) are shipped under the terms of Delivery Duties Unpaid (DDU). 
            This means that customs duties, import taxes, and other applicable charges are not covered or deducted by us.</p>
            <p>If you return an item from a country outside the EU, you agree to pay any applicable customs duties, fees, or taxes imposed by the country of origin or transit.</p>
            <p>Unfortunately, we are unable to estimate these costs in advance and cannot reimburse them.
               In many cases, such charges are collected by the carrier or customs authorities when the return is processed. 
               For detailed information about potential additional costs, we recommend contacting your local customs office before sending your return.</p>
        </div>
        <div className='space-y-4' >
          <h1 className='font-semibold' >WHat&apos;s next?</h1>
          <p className='' >We aim to process all returns within 10 business days of receiving them. 
            You will receive a final confirmation when your refund has been issued or when your exchange has been shipped.
             Please allow a couple of days for the refund to be visible in your original payment method.</p>
             <p>
             If you have any questions, please contact us at +31 (0) 85 401 35 53 or email <a className=''  href='mailto:julianborner@gmail.com?Subject=Hello' ><span className='underline' >service@etq-amsterdam.com.</span></a>
              Our Customer Service is open from 9 AM to 5 PM on weekdays.
             </p>
             {/* Italicized & slanted */}
             <p>*European Returns: The Netherlands, Belgium, Luxembourg, Germany, France, Ireland, Spain, Italy, Portugal, Denmark, Sweden, Austria, Czech Republic, Bulgaria, Hungary, Estonia, Croatia, Lithuania, Latvia, Poland, Romania, Slovenia, and Slovakia.</p>

        </div>

      </div>
      <LowerBanner/>
      <Footer/>
      </div>
  )
}

export default Help