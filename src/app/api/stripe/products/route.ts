import { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import Stripe from "stripe"

export async function GET(request:NextRequest){
      const stripe= await new Stripe(`${process.env.STRIPE_SECRET}`);

   try {
      
       const products=await stripe.products.list({
        limit:100
    })
    console.log('Current products: ', products)
    return NextResponse.json({data:products})
      
   } catch (error) {
    console.log(error)
    return NextResponse.json({message:error},{status:500})
   }
}

//export {GetProducts as GET}