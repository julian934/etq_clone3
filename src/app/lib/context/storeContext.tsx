"use client";
import React, { createContext, useState, useEffect, ReactNode, FC } from "react";

interface User {
  _id: string;
  username: string;
  password: string;
  email?: string;
  userCart: any[];
  wishList: any[];
  address?: string;
  [key: string]: any; // Future flexibility
}

interface StoreContextType {
  testData: any;
  state: any;
  dataCheck: (backendData: any) => void;
  bannerImgs: (banner1: string, banner2: string) => void;
  pageState: any;
  pagination: (data: any, signal: string) => void;
  addToCart: (product: any, price: any) => void;
  currCart: any;
  userData: (user: User) => void;
  userState: User | null;
  setUserState: React.Dispatch<React.SetStateAction<User | null>>;
  cartData: () => any;
  cartItems: any;
  filterStr: (str: string) => void;
  filterString: string | null;
  sortStr: (str: string) => void;
  sortString: string | null;
  modal:string | null,
  square:string | null,
  activeSquare:(str:string)=>void,
  activeModal:(str:string)=>void
}

const initialContext: StoreContextType = {
  testData: null,
  state: null,
  dataCheck: () => {},
  bannerImgs: () => {},
  pageState: null,
  pagination: () => {},
  addToCart: () => {},
  currCart: null,
  userData: () => {},
  userState: null,
  setUserState: () => {},
  cartData: () => null,
  cartItems: null,
  filterStr: () => {},
  filterString: null,
  sortStr: () => {},
  sortString: null,
  modal:null,
  square:null,
  activeSquare:()=>{},
  activeModal:()=>{}
};

export const StoreStateContext = createContext<StoreContextType>(initialContext);

interface StoreStateContextProviderProps {
  children: ReactNode;
}

export const StoreStateContextProvider: FC<StoreStateContextProviderProps> = ({ children }) => {
  const [state, setState] = useState<any>(initialContext);
  const [testData, setTestData] = useState<any>([]);
  const [bannerState, setBannerState] = useState<any>([]);
  const [pageState, setPageState] = useState<any>([]);
  const [currCart, setCart] = useState<any>([]);
  const [userState, setUserState] = useState<User | null>(null);
  const [cartItems, setCartItems] = useState<any>(null);
  const [filterString, setFilterString] = useState<string | null>(null);
  const [sortString, setSortString] = useState<string | null>("");
  const [square,setSquare]=useState<any>(null);
  const [modal,setModal]=useState<any>(null);

  // Load user from local storage on page load
  useEffect(() => {
    const storedUser = localStorage.getItem("userState");
    if (storedUser) {
      setUserState(JSON.parse(storedUser));
    }
  }, []);

  const cartData = () => {
    const currentUser = localStorage.getItem("userState");
    if (currentUser) {
      const currData = JSON.parse(currentUser);
      return currData.data?.userCart || [];
    }
    return [];
  };

  const userData = (user: User) => {
    if (user) {
      setUserState(user);
      localStorage.setItem("userState", JSON.stringify(user));
    }
  };

  const dataCheck = (backendData: any) => {
    setTestData(backendData);
  };

  const bannerImgs = (banner1: string, banner2: string) => {
    setBannerState([banner1, banner2]);
  };

  const addToCart = (product: any, price: any) => {
    if (!userState) return;

    const existingItemIndex = userState.userCart.findIndex(
      (item: any) => item.product === product
    );

    let updatedCart;

    if (existingItemIndex !== -1) {
      updatedCart = [...userState.userCart];
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      updatedCart = [...userState.userCart, { product, price, quantity: 1 }];
    }

    const updatedUser = {
      ...userState,
      userCart: updatedCart,
    };

    setUserState(updatedUser);
    localStorage.setItem("userState", JSON.stringify(updatedUser));
  };

  const pagination = (data: any, signal: string) => {
    // Setup pagination logic here
  };

  const filterStr = (str: string) => {
    setFilterString(str);
  };

  const sortStr = (str: string) => {
    setSortString(str);
  };
  const activeSquare=(str:string)=>{
    console.log('Current Data: ', str)
    let currData=str
    currData=='active'?setSquare(currData):setSquare(null);
  }
  const activeModal=(str:string)=>{
    
      console.log('Current Data: ', str)
      let currData=str
      currData=='active'?setModal(currData):setModal(null);
      
  }

  return (
    <StoreStateContext.Provider
      value={{
        activeSquare,
        activeModal,
        modal,
        
        square,
        
        state,
        testData,
        dataCheck,
        bannerImgs,
        pageState,
        pagination,
        addToCart,
        currCart,
        userData,
        userState,
        setUserState,
        cartData,
        cartItems,
        filterStr,
        filterString,
        sortStr,
        sortString,
      }}
    >
      {children}
    </StoreStateContext.Provider>
  );
};

export default StoreStateContextProvider;
