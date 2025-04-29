import { NextResponse } from "next/server";
import Stripe from "stripe";
export async function GET(){
 
  try {
    const stripe=await new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET}`)
    let products=await stripe?.products?.list({
      limit:100
    })
    console.log(products.data)
    return NextResponse.json({data:products.data})
  } catch (error) {
    return NextResponse.json({error:error})
  }
}