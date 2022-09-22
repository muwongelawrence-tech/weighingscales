import { CheckCircleIcon } from '@heroicons/react/outline';
import React from 'react';
import Header from '../components/Header';
import { useRouter } from 'next/router';
import SuccessHeader from '../components/SuccessHeader';

const Success = () => {
    const router = useRouter();
    return (  
        <div className = 'bg-gray-100 h-screen '>
            {/* <Header/> */}
            <SuccessHeader/>
            <main className = " max-w-screen-lg mx-auto ">
                <div className = "flex flex-col p-10 bg-white">
                   <div className = "flex items-center space-x-2 mb-5" >
                     <CheckCircleIcon className = "text-green-500 h-10"/>
                     <h1 className = "text-3xl">Thank you ,your order has been confirmed!</h1>
                   </div>

                   <p>
                    Thank you for shopping with us , we will send a confirmation once your item
                    has been transported , if you would like to check the status of your order(s)
                    please press the link below.
                </p>
                <button 
                onClick = {(e) => {
                    e.preventDefault();
                    router.push('/orders');
                } }
                className = "button rounded-md mt-8" 
                > Go to my orders</button>
                
                </div>
            </main>
        
        </div>
    );
}
 
export default Success;