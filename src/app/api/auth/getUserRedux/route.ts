import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import { error } from "console";

export async function GET(request:NextRequest){
    const body=await request.nextUrl.searchParams;
    const username=await body.get('username');
    console.log(username)
     try {
        const mongo=await new MongoClient(`${process.env.MONGO_DB!}`);
        await mongo.connect();
                    //const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
                    
                     //  console.log(currDB)
                       //const coll=await currDB?.db('users')?.collection('the_magisters_corner_users');
                       const user=await mongo.db('users')?.collection('the_magisters_corner_users')?.findOne({"username": username});
                       
                     console.log('Found User Data: ', user)
                     // console.log("REquest Data: ", req?.query?.user)
                      if(!user){
                        return NextResponse.json({error:'User not found'},{status:404})
                      }else{
                        return NextResponse.json(user)
                      }
         
                        // Any object returned will be saved in `user` property of the JWT
                       // let user=userData;
                       
                      
                    
                  } catch (error) {
                    
                      // If you return null then an error will be displayed advising the user to check their details.
                      console.error("AUTH ERROR:", error);
                      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
              
                      // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                    
                  }
}