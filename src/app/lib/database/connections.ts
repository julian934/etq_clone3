"use server"
import axios from "axios"
import { error } from "node:console"
const baseURL =
  (process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://etq-clone3-4qqo.vercel.app');
    

export const connectToStripe=()=>{

}

export const connectToContentful=()=>{

}

export const connectToCloudinary=()=>{

}

export const connectToMongodb=async()=>{
  const getData= await fetch('/api/mongodb').then((vals)=>{
    return vals.json()
  })
  return getData
}
export const checkUser=async(userName:string | null | undefined)=>{
  try {
    const {data}= await axios.get(`${baseURL}/api/auth/getUserRedux?username=${userName}`);

    return data;
  } catch (error) {
    console.log("Error fetching data: ", error);
    return { error: "Data not found", status: 500 };
  }
  
}
export const getPrice=async(price:string)=>{
  const getData= await fetch(`/api/getprice?price=${price}`).then((vals)=>{
    return vals.json()
  })
  return getData
}

export const getUser=async(username:string | null | undefined)=>{
  //if(username==undefined) return;
  try {
  
    const {data}=await axios.get(`${baseURL}/api/auth/getUser?username=${username}`);
   
  
    return data?.data
  } catch (error) {
    console.log("Error fetching data: ", error);
    return { error: "Data not found", status: 500 };
  }
}

export const updateUser=async(user:any,userObj:any)=>{
  //const userObj=await user
  try {
    const data=await axios.post(`${baseURL}/api/auth/updateUser?username=${user}`, {data:userObj})
    return data.data
  } catch (error) {
    console.log("Error fetching data: ", error);
    return { error: "Data not found", status: 500 };
  }
}
export const getCartData=async()=>{
 
}

export const getProducts=async()=>{
  try {
    const { data } = await axios.get(`${baseURL}/api/stripe/products`);
    return data; // ✅ Direct return
  } catch (error) {
    console.error("Error fetching products:", error);
    
  }
}
export const getCartItem=async(id:string | null | undefined)=>{
  console.log('PAssed ID: ', id)
  try {
    console.log('PAssed ID: ', id)
    const { data } = await axios.get(`${baseURL}/api/product?id=${id}`);
    console.log('Current returned cartID  Data: ', data)
    return data?.data; // ✅ Direct return
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
export const getItemPrice=async(id:string | null | undefined)=>{
  try {
    const { data } = await axios.get(`${baseURL}/api/getprice?id=${id}`);
    console.log('Current returned Data: ', data)
    return data?.data; // ✅ Direct return
  } catch (error) {
    console.error("Error fetching price:", error);
  }

}
export const getCheckOut=async(cart:any)=>{
  try {

    const data=await axios.post(`${baseURL}/api/checkout`,{cart:cart});
   /* if (data.request.responseURL) {
      window.location.href = data.request.responseURL;
    }*/
    return data;
  } catch (error) {
    console.error("Error connecting to checkout: ", error)
  }
}

export const getHomeSaleCover = async () => {
  try {
    const test = await axios.get(`${baseURL}/api/homeSales`).then((vals)=>{
      return vals
    });
    console.log('Current Data: ', test);
    
    return test.data; // Make sure to return only test.data
  } catch (error) {
    console.log("Error fetching data: ", error);
    return { error: "Data not found", status: 500 };
  }
};


export const getHomeMensWearCover=async()=>{
  try {
    const data=await axios.get(`${baseURL}/api/homeMensWear`).then((vals)=>{
      return vals
    });
    console.log('Current Data: ', data);
    
    return data.data; // Make sure to return only test.data
  } catch (error) {
    console.log("Error fetching data: ", error);
    return { error: "Data not found", status: 500 };
  }
  
}

export const getHomeFootWearCover=async()=>{
 
}

export const getHomeWardrobeCover=async()=>{
  try {
    const {data}=await axios.get(`${baseURL}/api/homeWardrobe`);
    console.log('Current Data: ', data);
    
    const productData:any=data? data.data : null;
    console.log('Current Data: ', data);
    const list=[];
    //const tshirts=productData!= undefined?productData.search()
    //const coverShirt=tshirts[0];
    /*
    const pants=productData!= null?productData.find((item:any)=>item.metadata.includes({category:'trousers'})) : null;
    const coverPants=pants[0];
    const sneakers=productData!= null? productData.find((item:any)=>item.metadata.includes({category:'sneakers'})) : null;
    const coverSneaker=sneakers[0];
    const poloShirts=productData!= null? productData.find((item:any)=>item.metadata.includes({category:'polo-shirt'})) : null;
    */
    //list.push(coverShirt);
    //list.push(coverPants);
    //list.push(coverSneaker);
    //list.push(poloShirts);
    //console.log('List Check: ', list)
    return data?.data; // Make sure to return only test.data
  } catch (error) {
    console.log("Error fetching data: ", error);
    return { error: "Data not found", status: 500 };
  }
}

export const getIconCover=async()=>{
 try {
  const {data}=await axios.get(`${baseURL}/api/homeIcon`).then((vals)=>{
    return vals
  });
  console.log('Current Data: ', data);
  return data
 } catch (error) {
   console.log('error: ', error);
   return {error:'Data not found',status:500}
 }
}

export const getMadeCover=async()=>{
  try {
    const data=await axios.get(`${baseURL}/api/homeMade`).then((vals)=>{
      return vals
    });
    console.log('Current Data: ', data);
    return data.data
  } catch (error) {
    console.log('error: ', error);
    return {error:'Data not found',status:500}
  }
}

export const getComfortCover=async()=>{
   try {
    const data=await axios.get(`${baseURL}/api/homeComfort`);
    console.log('Current Data: ', data);
    return data.data
   } catch (error) {
    console.log('error: ', error);
    return {error:'Data not found',status:500}
   }
}



export const getItem=async(id:string | undefined)=>{
  try {
    const data=await axios.get(`${baseURL}/api/collections/item?id=${id}`);
    console.log('Current Data: ', data);
    return data.data
  } catch (error) {
    console.log('error: ', error);
    return {error:'Data not found',status:500}
  }
}

export const getDesertBoots=async()=>{
  try {
    const data=await axios.get(`${baseURL}/api/collections/desert-boots`);
    console.log('Current Data: ', data);
    return data.data
  } catch (error) {
    console.log('error: ', error);
    return {error:'Data not found',status:500}
  }
}

export const getFootWear=async()=>{
  try {
    const data=await axios.get(`${baseURL}/api/collections/footwear`);
    console.log('Current Data: ', data);
    return data.data
  } catch (error) {
    console.log('error: ', error);
    return {error: 'Data not found', status:500}
  }
}
export const getMensWear=async()=>{
  try {
    const data=await axios.get(`${baseURL}/api/collections/menswear`);
    console.log('Current Data: ', data);
    return data.data
  } catch (error) {
    console.log('error: ', error);
    return {error: 'Data not found', status:500}
  }
}

export const getDressedFootwear=async()=>{
  try {
    const data=await axios.get(`${baseURL}/api/collections/dressed-footwear`);
    console.log('Current Data: ', data);
    return data.data
  } catch (error) {
    console.log('error: ', error);
    return {error:'Data not found',status:500}
  }
}

export const getLoafers=async()=>{
  try {
    const data=await axios.get(`${baseURL}/api/collections/loafers`);
    console.log('Current Data: ', data);
    return data.data
  } catch (error) {
    console.log('error: ', error);
    return {error:'Data not found',status:500}
  }
}

export const getPoloShirts=async()=>{
  try {
    const data=await axios.get(`${baseURL}/api/collections/polo-shirts`);
    console.log('Current Data: ', data);
    return data.data
  } catch (error) {
    console.log('error: ', error);
    return {error:'Data not found',status:500}
  }
}

export const getShirts=async()=>{
  try {
    const data=await axios.get(`${baseURL}/api/collections/shirts`);
    console.log('Current Data: ', data);
    return data.data
  } catch (error) {
    console.log('error: ', error);
    return {error:'Data not found',status:500}
  }
}

export const getSneakers=async()=>{
  try {
    const data=await axios.get(`${baseURL}/api/collections/sneakers`);
    console.log('Current Data: ', data);
    return data.data
  } catch (error) {
    console.log('error: ', error);
    return {error:'Data not found',status:500}
  }
}

export const getTshirts=async()=>{
  try {
    const data=await axios.get(`${baseURL}/api/collections/t-shirts`);
    console.log('Current Data: ', data);
    return data.data
  } catch (error) {
    console.log('error: ', error);
    return {error:'Data not found',status:500}
  }
}

export const getTrousers=async()=>{
  try {
    const data=await axios.get(`${baseURL}/api/collections/trousers`);
    console.log('Current Data: ', data);
    return data.data
  } catch (error) {
    console.log('error: ', error);
    return {error:'Data not found',status:500}
  }
}

