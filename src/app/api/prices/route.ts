import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function GET(){
    const stripe=new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET}`)
  let data=await stripe?.prices?.list()
  console.log(data)
  return NextResponse.json(data.data)
}