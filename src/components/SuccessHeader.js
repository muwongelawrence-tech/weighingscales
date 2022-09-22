import React, { Component } from 'react';
import Image from 'next/image';
import { MenuIcon, SearchIcon,ShoppingCartIcon } from "@heroicons/react/outline";
import {useRouter} from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { selectItems, selectQuantity}  from '../slices/basketSlice';
import { setCurrentEmail } from '../pages/api/fakeshoesdetails';
import { useEffect } from 'react';
import jwtDecode from "jwt-decode";
import { useState } from 'react';


function SuccessHeader() {
  
     const number = useSelector(selectQuantity);

    const [ user ,setUser ] = useState({});

    const router = useRouter();
    
  
  // const dispatch = useDispatch();

   

  
    //decode the jwt and get the current user.
         let jwt = "";
        
        const getToken = () => {
            
             jwt = localStorage.getItem("token");

        }


         useEffect(() => {
          try {
              // const jwt = localStorage.getItem("token");
            getToken();
            const user = jwtDecode(jwt);
            //console.log( user.email);
            setCurrentEmail(user.email);
            setUser(user);
             
             //console.log(user);
          } catch (error) {}

         },[jwt]);


    return (
          <header>
            {/* top nav */}
           <div className = "flex items-center bg-amazon_blue p-1 flex-grow py-2 space-x-3">
                <div  className = "mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image
                    onClick = { (e) => {
                        e.preventDefault();
                         router.push('/');
                    }}
                    src = "/shoes/logo2.jpg"
                    width = { 70 }
                    height = { 60 }
                    objectFit = "contain"
                    className = "cursor-pointer "
                    />
                </div>
                {/* search */}
                 <div className = 'hidden  sm:flex items-center h-10 rounded-md bg-yellow-400   hover:bg-yellow-500 flex-grow cursor-pointer'>
                     <input 
                        placeholder = "Search....."  
                        className = "p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text"
                        onChange = { e => { setSearch(e.target.value);}}
                     />
                      <SearchIcon className = "h-12 p-4" />
                 </div>

                 {/* Right */}
                 <div className = "text-white flex items-center text-xs space-x-6 mx-6 whitespacenowrap">
                     <div  className = "link " >
                         <p className = "flex flex-col text-sm text-center ">Hello , </p>
                         <p className = "flex flex-col text-sm text-center">{ user.name }</p>
                         {/* <p onClick = { e => {
                              e.preventDefault();
                              router.push('/loginForm');
                            }} 
                         className = "font-extrabold md:text-sm">Edit products </p> */}
                     </div>

                     <div className = "" >
                         <p onClick = { e => {
                          e.preventDefault();
                          router.push('/orders');
                         }} 
                         className = "cursor-pointer link font-extrabold md:text-sm"
                         >Orders </p>

                           <p onClick = {e => {
                              e.preventDefault();
                              router.push('/loginForm');
                            }} 
                         className = "cursor-pointer link font-extrabold md:text-sm">Edit products </p>
        
                     </div>

                     <div onClick = { e => {
                           e.preventDefault();
                          router.push('/checkout');
                          } } 
                        className = " relative link flex items-center" >
                         <span className = "absolute top-0 right-0 md:right-6 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold" >
                             { number }
                         </span>
                         <ShoppingCartIcon className = "h-10"/>
                         <p className = "hidden md:inline font-extrabold md:text-sm mt-2">Cart</p>
                     </div>

                     
                 </div>
        

           </div>

           

           {/* bottom nav */}

           <div className = {`flex items-center p-2 pl-6 space-x-3 bg-amazon_blue-light text-white text-sm `}>
            <p className = "link flex items-center ">
                <MenuIcon    className = "h-6 mr-1" />
            </p>

            <p className = "link "  onClick = { e => {
                 e.preventDefault();
                 router.push('/');
            }} > Home </p>
             <marquee width="100%" direction="left" height="20px">
              <p className = "text-bold h-5 ">Explore our services and Craft shoes Products available.</p>
            </marquee>
           </div>
           </header>
        
    );
}

export default SuccessHeader;

