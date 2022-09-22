import React, { useState } from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket} from '../slices/basketSlice';
import Link from "next/link";
import { selectAdmin } from '../slices/adminSlice';
import { updateRawMaterial } from '../pages/api/rawmaterialService';

const MAX_RATING = 5;
const MIN_RATING = 3;

 const RawMaterial = ({_id,title,price,description,category,image,numberInStock }) => {

      const [rating] = useState(
        Math.floor(Math.random()*(MAX_RATING - MIN_RATING + 1)) + MIN_RATING
        );

        const admin = useSelector(selectAdmin);

        const newMaterial = {  _id ,title,price,description,category,image,numberInStock };

        const dispatch = useDispatch();

        const hideElement = numberInStock === 0 ? "hidden" :"";

        const addItemToCart = async (e) => {
          e.preventDefault();
         const product = {_id,title,price,description,category,image,rating, numberInStock ,quantity: 0 };
         // sending the product as an action to the Redux store.
         dispatch(addToBasket(product));
         // update the database 

         newMaterial.numberInStock--;

         //console.log(newMaterial);

         const { data } =   await updateRawMaterial(newMaterial); 

          //console.log( data );

       };

     return ( 
        <div className = {`relative flex flex-col m-5 bg-white z-30 p-10 rounded-md ${hideElement}`}>
         <p className ="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
        <Image src = {image} height ={200} width = {200} 
        objectFit = "contain"
        className = "transform motion-safe:hover:scale-110 "
        />
         <h4 className = "my-3 ">{title}</h4>

          <div className = "flex">
          { Array(rating).fill().map((_ , i) => (
              <StarIcon 
               key = {i}
              className = "h-5 text-yellow-500"
              />
          ))}
     
         </div>  
         <p className = "text-xs my-2 line-clamp-2">{description}</p>
          <div className = "mb-5 ">
              <Currency  quantity = {price}  currency = "UGX"/>
          </div>
         
         
          
          <p className = "text-sm my-3 ">
            <span className ="text-blue-600"> Available in stock:</span>
            <span className = "pl-2 text-pink-600">{numberInStock}</span>
          </p>

       {admin && (
           <Link href= {`/materialForm/[id]`}  as= {`/materialForm/${_id}`}>
           <a className ="mb-2 text-sm text-gray-600 italic hover:underline " >Edit product</a>
          </Link>
       )}
          


         < button onClick ={ addItemToCart } className = "button mt-auto  rounded-sm">Add to Cart</button>
      
      </div>
      );
 }
  
 export default RawMaterial;
