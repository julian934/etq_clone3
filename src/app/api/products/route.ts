import { NextResponse } from "next/server";
import Stripe from "stripe";
export async function GET(){
  const stripe=new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET}`)
  let products=await stripe?.products?.list({
    limit:100
  })
  console.log(products.data)
  return NextResponse.json(products.data)
}