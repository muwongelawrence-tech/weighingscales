import Head from "next/head";
import Header from '../components/Header';
import Banner from '../components/Banner';
import {useRouter} from 'next/router';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOPen } from '../slices/menuSlice';
import RawMaterialFeed from '../components/rawMaterialFeed';
import { getMaterials } from "../slices/basketSlice";

export default function RawMaterials({ materials }) {
  
  const dispatch  = useDispatch();

  const showdropdown = useSelector(selectSendMessageIsOPen);
  const router = useRouter();

  //const rawMaterials = { materials };
  dispatch(getMaterials(materials));

  return (
    <div className = "bg-gray-100 relative">
      <Head>
        <title>Raw Materials</title>
      </Head>

      <Header/>
   { showdropdown && (
      <div className = "bg-white rounded-lg p-4 py-2 w-48 mt-2 shadow-xl mb-2 absolute z-30 ml-2">
          <p  onClick = { e => {e.preventDefault();
                          router.push('/');}} 
                         className = "block px-4 py-1 text-gray-800 hover:bg-green-100 rounded-sm">products</p>

          <p  onClick = { e => {
              e.preventDefault();
              router.push('/rawmaterials');}}
              className = "block px-4 py-1 text-gray-800 hover:bg-green-100 rounded-sm">rawMaterials</p>
        
     </div>)
     }
            
      

      <main className = "max-w-screen-2xl mx-auto ">
        {/* Banner */}
         <Banner />
    
          <RawMaterialFeed />
          
      </main>
      <footer className = "max-w-screen-2xl mx-auto">
      <Footer />
      </footer>
 
    </div>
  );
}

export async function getServerSideProps(context){
  //const session = await getSession(context);
  const materials = await fetch ("https://african-craft-shoes.herokuapp.com/api/materials").then(
    (res) => res.json()
  );
  return { props:{
    materials,
    //session
  }}
}

