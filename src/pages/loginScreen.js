import React,{ useState } from 'react';
import Image from 'next/image';
import SignInScreen from '../components/SignInScreen';
import Login_Product from '../components/Login_Product';
import { getShoes } from './api/fakeshoesdetails';
import Footer2 from '../components/Footer2';




export default function Login () {

    const Sample_crafts = getShoes();

    const [signIn, setSignIn] = useState(false);
    const [trending, setTrending] = useState(false);
    const [ showfooter , setShowFooter] = useState(true);

    return (  
        <>
        <div className = {`relative h-screen pl-5 bg-craft_background text-white 
        bg-cover bg-no-repeat bg-center bg-opacity-50  `}>
        
           <Image 
            src = "/shoes/logo2.jpg"
            height ={70} 
            width = {70} 
            objectFit = "contain"
            className = " fixed left-0  "
            /> 
             
            <button 
            className =" absolute top-5 md:top-10 right-5 md:right-10 py-2 px-4 font-semibold text-lg bg-blue-600 rounded-sm border-0 focus:outline-none"
            onClick = {(e) => {
                e.preventDefault();
                setSignIn(true);
                setTrending(true);
                setShowFooter(false);

            }}
            >Sign In</button>

        

        <div className="absolute top-20 ml-auto mr-auto left-0 right-0 text-center p-10 z-30">
            { signIn ? (
                <SignInScreen/>
            ) : (
              <>
              <h1 className =" mb-4 text-2xl ">
                  Unlimited Craft Shoes , Raw Materials and more.
              </h1>
              <h2 className = "mb-3 font-normal text-lg ">Purchase anywhere cancel any time.</h2>

              <h3 className = "text-sm font-normal ">
                  Ready to purchase ? Enter your email to  create or 
                  restart your membership.
              </h3>

              <div className="m-2">
                  <form action="" className = "grid grid-cols-2 max-w-md ml-auto mr-auto">
                      <input type="email"
                       className = "p-5 focus:outline-none h-4 w-auto border-0 rounded-l-lg  cursor-text text-black"
                      placeholder = "Email Address"
                      />
                      <button 
                      onClick = {(e) => {
                        e.preventDefault();
                        setSignIn(true);
                        setTrending(true);
                        setShowFooter(false);
                      }}
                       className = "cursor-pointer py-2 px-3 bg-red-500 font-semibold focus:outline-none border-0 rounded-r-lg">
                          GET STARTED
                      </button>
                  </form>
                     
                    
                </div>

                 
              </>
            )}
            
        </div>
      </div>
         
         <p className = {`m-3 p-2   text-black font-normal text-lg text-center font-serif ${ trending && "hidden"}`}>
              Here are some of the best trending craft shoes
         </p>

         <div className = {`bg-gray-100 relative p-2 ${ trending && "hidden"}`}>
             <div
             className = "grid grid-flow-row-dense  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mx-auto"
             >
             { Sample_crafts.slice(0,4).map(({ _id,title,price,description,category,image }) => (
              <Login_Product
               key ={_id}
               _id = {_id}
               title = {title}
               price = {price}
               description = {description}
               category = {category}
               image = {image}
              />
            ))}

             </div>
         </div>

         { showfooter && <Footer2/> }

      </>
    );
}
 

