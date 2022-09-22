import Head from "next/head";
import Header from '../components/Header';
import Banner from '../components/Banner';
import ProductFeed from "../components/productFeed";
import { useSelector, useDispatch } from 'react-redux';
import {useRouter} from 'next/router';
import { selectSendMessageIsOPen } from '../slices/menuSlice';
import { login, logout, selectUser } from '../slices/userSlice';
import Login from "./loginScreen";
import { useEffect } from "react";
import { auth } from "../../firebase";
import { removeName } from "../slices/nameSlice";
import http  from "./api/httpService";
import config from "../../config.json";
import { getData } from "../slices/basketSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loadStripe } from '@stripe/stripe-js';
import Footer2 from "../components/Footer2";

export default function Home( ) {


  const showdropdown = useSelector(selectSendMessageIsOPen);
  
  //const user = useSelector(selectUser);

  const router = useRouter();

  // const dispatch = useDispatch();

  // //const shoeproducts = { shoes };
  // dispatch(getData(shoes));


  // const leaveApp = (e) => {
  //       e.preventDefault();
  //       localStorage.removeItem("token");
  //      router.push("/loginScreen");
  // };

return (
  
     <div className = "bg-gray-100 relative">

      <Head>
        <title>Seconds</title>
      </Head>

      <Header/>

      <ToastContainer/>
      
      { showdropdown && (
          <div className = "bg-white rounded-lg p-4 py-2 w-48 mt-2 shadow-xl mb-2 absolute z-30 ml-2">
              <p  onClick = { e => {
                e.preventDefault();
                router.push('/');}}  className = "block px-4 py-1 text-gray-800 hover:bg-green-100 rounded-sm">products</p>

              <p  className = "block px-4 py-1 text-gray-800 hover:bg-green-100 rounded-sm">SignOut</p>

          </div>)
      }
            
      

      <main className = "max-w-screen-2xl mx-auto ">

        {/* Banner */}
         <Banner />

        {/* ProductFeed */}
        <ProductFeed />
          
      </main>


      <footer className = "max-w-screen-2xl mx-auto">
         
          <Footer2/>
      </footer>

    </div>
    
    
    );
}

// Data from  the api
// export async function getServerSideProps(context){
//   //const session = await getSession(context);
//   const shoes = await fetch ("https://african-craft-shoes.herokuapp.com/api/shoes").then(
//     (res) => res.json()
//   );
//   return { props:{
//     shoes,
//     //session
//   }}
// }
