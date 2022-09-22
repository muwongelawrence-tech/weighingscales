import React, { useState } from 'react';
import Header from '../components/Header';
import Image from 'next/image';
import { useSelector} from 'react-redux';
import { selectItemAdded, selectItems, selectQuantity }  from '../slices/basketSlice';
import { selectTotal }  from '../slices/basketSlice';
import CheckOutProducts from '../components/CheckOutProducts';
import Currency from 'react-currency-formatter';
import { loadStripe } from '@stripe/stripe-js';
import http from "./api/httpService";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/router';
import { selectSendMessageIsOPen } from '../slices/menuSlice';
import { useEffect } from 'react';
import jwtDecode from "jwt-decode";
import UseflutterHooks from "../components/useFlutterwaveHooks";
import Footer2 from '../components/Footer2';
import { toast } from "react-toastify";

const stripePromise = loadStripe(process.env.stripe_public_key);


const CheckOut = () => {

    const items = useSelector(selectItems);
    //   const items = useSelector(selectItemAdded);
    
      // console.log(items);
    const number = useSelector(selectQuantity);
  
    const total = useSelector(selectTotal);

    const showdropdown = useSelector(selectSendMessageIsOPen);

    //const session = useSelector(selectUser);

    //const [session] = useSession();

    const router = useRouter();

    // const [ user , setUser ] = useState({});

     //decode the jwt and get the current user.
    //  let jwt = "";
        
    //  const getToken = () => {
    //       jwt = localStorage.getItem("token");
    //  }

    //   useEffect(() => {
    //    // const jwt = localStorage.getItem("token");
    //      getToken();
    //     const user = jwtDecode(jwt);
    //      setUser(user);

    //      //console.log(user);
    //   },[jwt]);

  const createCheckoutSession = async (e) => {
          e.preventDefault();
          const stripe = await stripePromise;
         // call a backend to create a checkout session.
        const checkoutSession = await http.post('/api/check-out-session', {
            items : items,
            email : user.email
        });
        // font-end receives   back the id then we redirect the user to the checkout page.
        const result = await stripe.redirectToCheckout({
          sessionId : checkoutSession.data.id
        });

        if(result.error) alert(result.error.messgae);
        
};

    return ( 
        <div className = "bg-gray-100 relative">

           <Header/>

           { showdropdown && (
            <div className = "bg-white rounded-lg p-4 py-2 w-48 mt-2 shadow-xl mb-2 absolute z-30 ml-2">
                <p  onClick = { e => {
                    e.preventDefault();
                    router.push('/');
                }} className = "block px-4 py-1 text-gray-800 hover:bg-green-100 rounded-md">products</p>
                <p className = "block px-4 py-1 text-gray-800 hover:bg-green-100 rounded-md"> Signout</p>
            
            </div>)
         }

         <ToastContainer/>

           <main className ="lg:flex max-w-screen-2xl mx-auto">

                {/* left */}
                <div className = "flex-grow m-5 shadow-sm">
                    <Image
                    src = "/background/ck.jpg"
                    width = { 1020 }
                    height = { 250 }
                    objectFit = "contain"
                    className=''
                    />
                    <div className = "flex flex-col p-5 space-y-10 bg-white">

                        <h1 className = "text-3xl border-b pb-4 ">
                            { items.length === 0 ? "Your Cart is empty" : " Your Shopping Cart" }
                        </h1>

                        {/* list of checkout products */}

                        { items.map((item, i) => (

                            <CheckOutProducts
                            key = {i}
                            _id = {item._id}
                            title = {item.title}
                            rating = {item.rating}
                            price = {item.price}
                            description = {item.description}
                            category = {item.category}
                            image = {item.image}
                            hasPrime = {item.hasPrime}
                            numberInStock = {item.numberInStock}
                            quantity = {item.quantity}
                                /> 
                        ))}

                    </div>
                </div>


               {/* Right */}
                <div className = "flex flex-col bg-white p-10 shadow-md">
                    { items.length > 0 && (
                        <>
                        <h2 className = {`whitespace-nowrap ${ number === 0 && "hidden"}`}>

                            Subtotal ({number > 1 ? `${ number } products` :`${ number } product`} ):
                            <span className = "font-bold">
                            <Currency  quantity = { total }  currency = "UGX"/> 
                            </span>
                        </h2>

                        <p className='text-lg m-3 font-sans'> Payment Methods  </p>

                        {/* <button role = "link" 
                        onClick = { createCheckoutSession }
                        className = "button"
                        >
                        Stripe checkout
                        </button> */}

                        <button role = "link" 
                        className = "button"
                        onClick = { e => {
                            toast("This is for collection of payments via stripe");
                        }}
                        >
                        Stripe checkout
                        </button>

                        <button role = "link" 
                        className = "button mt-4"
                        onClick = {
                            e => {
                                toast("This is for collection of payments via flutter wave.");
                            }
                        }
                        >
                        Flutter wave
                        </button>

                       

                       {/* using flutter wave payment */}
                        {/* <UseflutterHooks total = { total } email = { user.email } /> */}
                        
                        </>
                    )}
                </div>

           </main>

           <Footer2/>

        </div>
     );
}
 
export default CheckOut;