import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function GET(){
  const stripe=await new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET}`)
 
  try {
    
    let data=await stripe?.prices?.list()
    console.log(data)
    return NextResponse.json({data:data})
  } catch (error) {
    return NextResponse.json({error:error})
  }
}