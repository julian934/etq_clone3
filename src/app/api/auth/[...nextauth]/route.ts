//import type { NextApiRequest, NextApiResponse } from "next"
import NextAuth,{AuthOptions} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import { MongoClient } from "mongodb"
import type { User } from "next-auth"

//This is a catch-all route, so it will receive any data passed to the auth folder at all. 
//Access database for authorized users and passs the information here. If valid, session will be created and token will be given.
//const db=new MongoClient(`mongodb+srv://julian:Kratos155@m0db.rkibr.mongodb.net/`); //MongoDB Integration
const db=new MongoClient(`${process.env.MONGO_BASE}`);
const clientPromise = db.connect();
const handler = NextAuth({
    
    providers:[
        CredentialsProvider({ // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
              username: { label: "Username", type: "text", placeholder: "jsmith" },
              password: { label: "Password", type: "password" ,placeholder:'pass101'}
            },
             authorize: async (credentials)=> {
              // Add logic here to look up the user from the credentials supplied
              try {
                //const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
                console.log("User Credentials: ", credentials?.username, credentials?.password);
                   const currDB=await clientPromise;
                   console.log(currDB)
                   //const coll=await currDB?.db('users')?.collection('the_magisters_corner_users');
                   const user=await currDB?.db('users')?.collection('the_magisters_corner_users')?.findOne({"username": credentials?.username,"password": credentials?.password});
                   
                
                 // console.log("REquest Data: ", req?.query?.user)
                  if(!user) return null
     
                    // Any object returned will be saved in `user` property of the JWT
                   // let user=userData;
                    return {
                      id:user?._id.toString(),
                      name:user?.username,
                      email:user?.email ?? null,
                      image: null
                    } satisfies User
                  
                
              } catch (error) {
                
                  // If you return null then an error will be displayed advising the user to check their details.
                  console.error("AUTH ERROR:", error);
                  return null
          
                  // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                
              }
             
             
            }
          }),
            /*
        GoogleProvider({
            clientId:'clientID data',
            clientSecret:'client secret data',
        })*/
    ],
    secret:process.env.NEXTAUTH_SECRET,
    callbacks:{
        session({session,token,user}){
          if (session.user && token?.sub ) {
            session.user.name = token.sub
          }
            return session
        }
    },
   
})

export {handler as GET, handler as POST}