import { NextRequest } from "next/server";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import Stripe from "stripe";
export async function GET(){
    
        const stripe =await new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET}`)
        if(stripe){
            const newData=await stripe.products.list({
                limit:100
              })
            return NextResponse.json({data:newData});
        }else{
            return NextResponse.json({data:'Incorrect Key!'})
        }
    
  
    return NextResponse.json({message:'Endpoint successfully connected.'})
}

