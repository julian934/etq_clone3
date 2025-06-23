'use client'
import React,{useState,useEffect,useContext} from 'react'
import { useQuery } from '@tanstack/react-query'
import { getCartItem, getItem } from '@/app/lib/database/connections'
import Dropdown from '../../ui/dropdown/dropdown'
import Image from 'next/image'
import { getItemPrice } from '@/app/lib/database/connections'
import { StoreStateContext } from '@/app/lib/context/storeContext'
import axios from 'axios'
import { Session } from 'next-auth'
import { useSession } from 'next-auth/react'

type Props = {}

const CartItemData = ({id,quantity}:{id:any, quantity?:number | any}) => {
  const [priceData,setPriceData]=useState<any>()
  const [moddedCart,setModdedCart]=useState<any>(null);
  const ctx=useContext(StoreStateContext);
  const session=useSession();
  const currData:any=ctx.userState;
    const {data}=useQuery({
        queryKey:['Cart Item',id],
        queryFn:()=>getCartItem(id),
        staleTime:1000 * 60 * 5
    });
    const handleRemove=async(id:any)=>{
    //const filteredID=currData?.userCart?.filter((val:any)=>val.product!=id);
    const newCart=quantity>1?currData?.userCart?.map((val:any)=>{
        return {
          product:val?.product,
          price:val?.price,
          quantity:quantity-1
        }

    }):currData?.userCart?.filter((val:any)=>val.product!=id);
    
    setModdedCart(newCart);
    await axios.post(`/api/auth/updateUserCart?username=${session?.data?.user?.name}`,{newCart})
    }
    const shippingCost=0
    const totalCost=0 
    useEffect(()=>{
      const fetchPrice=async()=>{
        if(data && !priceData){
          try {
            let price=await getItemPrice(`${data?.default_price}`);
          if(price!=undefined){
            let currPrice=Intl.NumberFormat("en-US",{
              style:"currency",
              currency:"USD",
              maximumFractionDigits:2
            }).format(price.unit_amount/100 * quantity)
            setPriceData(currPrice)
          }
          } catch (error) {
            console.error("Error fetching price:", error);
          }
          
        }
      }
    priceData==undefined && fetchPrice() 
    
    },[data,priceData]);
    if(data!=undefined) console.log(data)
      console.log(" Item Data: ", data)
      console.log("ID: ", id)
      console.log("quantity: ", quantity)
      if(priceData!=undefined) console.log("Price Data: ", priceData)
        if(moddedCart!=undefined && moddedCart!=null) console.log('removed Item: ',moddedCart)
  return (
    <div className=' flex  text-black space-x-4 justify-around  text-black bg-white' >
      <div className='flex max-sm:flex-col justify-around md:justify-between p-4 space-x-2 ' >
        {data?.images!=undefined && <Image className=" h-28 w-28" width={100} height={100} src={data?.images[0]} alt={data?.name} />}
       <h1 className="flex justify-around w-full text-sm  " >{data?.name}</h1>
     
      </div>

        <div className='flex justify-between w-full bg-white mt-8 ' >
           <h1 className="flex text-sm mt-8" >Default </h1>
           <h1 className='flex text-sm  mt-8' >Quantity: {quantity}</h1>
           <h1 className="flex text-sm  mt-8 " >{priceData}</h1>
           </div>
            
             {/*  <div className="flex justify-between w-full bg-white " >
                 <div className='' >
                <Dropdown/>
                </div>
               
                 
                  <h1 className='flex text-sm  mt-8' >Quantity: {quantity}</h1>
              <h1 className="flex text-sm  mt-8 " >{priceData}</h1>
              </div>*/}
             

              <div>

              </div>
              <div></div>
              <div className='flex text-sm self-start px-2 justify-self-center mt-8 ' >
                     
                     <button className='' onClick={()=>handleRemove(data?.id)} >Remove</button>
              </div> 
            
      </div>
  )
}

export default CartItemData