import React from 'react';
import Image from 'next/image';
import { MenuIcon, SearchIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/outline";
import {useRouter} from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { SearchItem, selectQuantity, selectTotal }  from '../slices/basketSlice';
import { useState } from 'react';
import { openSendMessage , closeSendMessage} from '../slices/menuSlice';
import { useEffect } from 'react';

function Header1() {

     //const [session] = useSession();
    //const userName = useSelector(selectName);
    const router = useRouter();
    
    //const items = useSelector(selectItems);

    const number = useSelector(selectQuantity);

    // checking the total
    const total = useSelector(selectTotal);

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

  return (
   <header>
          {/* top nav */}
          <div className = "flex px-4 sm:justify-between bg-white md:p-1 flex-grow py-2 space-x-3">

         {/* Left */}
        <div  className = "mt-2 flex items-center flex-grow sm:flex-grow-0">
                <Image
                onClick = { (e) => {
                    e.preventDefault();
                    router.push('/');
                }}
                src = "/scales/logo.jpg"
                width = { 70 }
                height = { 60 }
                objectFit = "contain"
                className = "cursor-pointer "
                />


        </div>

{/* middle  */}

<div className = 'hidden  sm:inline-flex  items-center w-[600px] mt-6 h-10 border-2   cursor-pointer'>
   
  
   <input 
      placeholder = "Search for....."  
      className = "p-2 h-full w-full flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text"
      onChange = { e => { setSearch(e.target.value);} }
   />

    <SearchIcon className = "h-12 p-4 text-blue-500" />
    
</div>

{/* Right */}
<div className = " flex  text-xs  p-4  justify-evenly w-[400px]">

  <div className=' h-10 w-4 my-2'>
      <UserIcon className='h-12 p-4 bg-blue-50 text-blue-600' />
  </div>

   <div 
    //  onClick = { e => {
    //     e.preventDefault();
    //     router.push('/checkout');
    //     } } 
    className='text-white flex items-center h-10 p-6 bg-blue-600 my-2 w-[170px] cursor-pointer'
   >

    <ShoppingCartIcon className = "h-10"/>

    <span className='text-sm text-white'> { total } UGX</span>

   </div>

  
</div>


</div>

{/* SearchBar on Mobile Device */}

{/* <div className = {`flex items-center bg-amazon_blue   flex-grow p-4 md:hidden ${ showsearch && "hidden"}`}>

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

</div> */}


{/* bottom nav */}

{/* <div className = {`flex items-center p-2 pl-6 space-x-3 bg-amazon_blue-light text-white text-sm `}>
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

</div> */}
   </header>
  );
}

export default Header1;