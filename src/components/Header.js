import React from 'react';
import Image from 'next/image';
import { MenuIcon, SearchIcon, ShoppingCartIcon} from "@heroicons/react/outline";
import {useRouter} from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { SearchItem, selectItems, selectQuantity}  from '../slices/basketSlice';
import { useState } from 'react';
import { openSendMessage , closeSendMessage} from '../slices/menuSlice';
import { selectName } from '../slices/nameSlice';
import { useEffect } from 'react';
import jwtDecode from "jwt-decode";
import { setCurrentEmail } from '../pages/api/fakeshoesdetails';


const Header = () => {

    //const [session] = useSession();
    //const userName = useSelector(selectName);

    // const [ user , setUser ] = useState({});

    const router = useRouter();
    
    //const items = useSelector(selectItems);

    const number = useSelector(selectQuantity);

    const dispatch = useDispatch();

    const [search, setSearch] = useState("");

    const [showsearch ,setShowSearch] = useState(true);

    const [menu, showMenu] = useState(false);
    
     const controlDropdown = (e) => {
         e.preventDefault();
         showMenu(!menu);
         menu ? dispatch(openSendMessage()) : dispatch(closeSendMessage());
     };
  
     // pass the current state of search to be dispatch
        useEffect(() => {

           //console.log(search);
          dispatch(SearchItem({ search :search }));

         },[search]);

         //decode the jwt and get the current user.
        //  let jwt = "";
        
        // const getToken = () => {
            
        //      jwt = localStorage.getItem("token");

        //      if(!jwt){
        //         router.push("/loginScreen");
        //      }
        // }


        //  useEffect(() => {
        //   try {
            
        //     // const jwt = localStorage.getItem("token");
        //     getToken();

        //     const user = jwtDecode(jwt);

        //     //console.log( user.email);
        //     setCurrentEmail(user.email);
        //     setUser(user);
             
        //      //console.log(user);
        //   } catch (error) {}

        //  },[jwt]);

      return ( 
           <header>
            {/* top nav */}
           <div className = "flex px-4 sm:justify-between bg-amazon_blue md:p-1 flex-grow py-2 space-x-3">

                  {/* Left */}
                <div  className = "mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image
                    onClick = { (e) => {
                        e.preventDefault();
                         router.push('/');
                    }}
                    src = "/products/Seconds logo.png"
                    width = { 70 }
                    height = { 60 }
                    objectFit = "contain"
                    className = "cursor-pointer "
                    />

                    <h3 className='text-gray-100 font-medium hidden md:inline-flex'> Seconds</h3>

                </div>

                {/* middle  */}

                 <div className = 'hidden  sm:inline-flex  items-center w-[600px] mt-4 h-10 rounded-md bg-green-400   hover:bg-green-500  cursor-pointer'>
                     
                     <input 
                        placeholder = "Search....."  
                        className = "p-2 h-full w-full flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text"
                        onChange = { e => { setSearch(e.target.value);}}
                     />

                      <SearchIcon className = "h-12 p-4" />
                      
                 </div>

                 {/* Right */}
                 <div className = "text-white flex items-center text-xs space-x-6 mx-6 whitespacenowrap pr-4">

                     <div  className = "link " >
                         <p className = "flex flex-col text-sm text-center "> Hello , </p>
                         <p className = "flex flex-col text-sm text-center"> clients name </p>
                         {/* <p onClick = { e => {
                              e.preventDefault();
                              router.push('/loginForm');
                            }} 
                         className = "font-extrabold md:text-sm">Edit products </p> */}
                     </div>

                     <div className = "" >

                         <p className = "cursor-pointer link font-extrabold md:text-sm"
                         >Orders </p>

                         <p className = "cursor-pointer link font-extrabold md:text-sm">Edit products </p>
        
                     </div>

                     <div onClick = { e => {
                          e.preventDefault();
                          router.push('/checkout');
                          } } 
                        className = " relative link flex items-center" >
                            
                         <span className = "absolute top-0 right-0 md:right-6 h-4 w-4 bg-green-400 text-center rounded-full text-black font-bold" >
                             { number }
                         </span>

                         <ShoppingCartIcon className = "h-10"/>

                         <p className = "hidden md:inline font-extrabold md:text-sm mt-2">Cart</p>

                     </div>

                      <div 
                       onClick = { e => {
                            e.preventDefault();
                            setShowSearch(false);
                       }}
                      className = "flex bg-gray-300 rounded-sm md:hidden">
                        <SearchIcon className = "h-12 p-4" />
                      </div>
                 </div>
        

           </div>

           {/* SearchBar on Mobile Device */}

           <div className = {`flex items-center bg-amazon_blue   flex-grow p-4 md:hidden ${ showsearch && "hidden"}`}>

                <div className = {`flex items-center h-10  rounded-md bg-green-400   hover:bg-green-500 flex-grow cursor-pointer ${showsearch && "hidden"}`}>
                        <input 
                            placeholder = "Search....." 
                            className = "p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text"
                            onChange = { e => { setSearch(e.target.value); } }
                        />
                    <svg xmlns="http://www.w3.org/2000/svg"
                        onClick = { e => {
                            e.preventDefault();
                            setShowSearch(true);
                        }}
                        className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
            </div>

           </div>


           {/* bottom nav */}

           <div className = {`flex items-center p-2 pl-6 space-x-3 bg-amazon_blue-light text-white text-sm `}>
            <p className = "link flex items-center ">
                <MenuIcon  onClick = { controlDropdown }  className = "h-6 mr-1" />
            </p>

            <p className = "link "  onClick = { e => {
                 e.preventDefault();
                 router.push('/');
            }} > Home </p>
             <marquee width="100%" direction="left" height="20px">
              <p className = "text-bold h-5 ">Explore our services and Products available At seconds we respect execution and we deliver services in seconds.</p>
            </marquee>
           </div>
           </header>
     );
}
 
export default Header;