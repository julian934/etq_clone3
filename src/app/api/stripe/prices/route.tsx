import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function GET(request:NextRequest){
    try {
        NextResponse.json({data:'testing'})
    } catch (error) {
        NextResponse.json({error:error})
    }
}

//export {getPrices as GET}