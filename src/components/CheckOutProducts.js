import React from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';
import { MinusSmIcon, PlusIcon } from "@heroicons/react/solid";
import Currency from 'react-currency-formatter';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, decreaseItem, selectItemAdded } from '../slices/basketSlice';
import { removeFromBasket} from '../slices/basketSlice';
import { updateShoe } from '../pages/api/shoesService';
// import { updateRawMaterial } from '../pages/api/rawmaterialService';

const CheckOutProducts = ({ _id, title, price, description, category, image, rating, numberInStock, quantity }) => {
      
      const dispatch = useDispatch();

      const newProduct = {  _id ,title, price, description, category, image, numberInStock };

      const addItemToCart = async () => {
       
      const product = { _id, title, price, description, category, image, rating, numberInStock, quantity };

        // sending the product as an action to the Redux store.
        dispatch(addToBasket(product));

        // update the database for the changes to the product.
        // newProduct.numberInStock--;

          //  if(newProduct.price >=30000){
          //   const { data } =   await updateRawMaterial(newProduct); 

          //   //console.log( data );
          //  }
          //  else{

          //   const { data } =   await updateShoe(newProduct); 

          //   //console.log( data );
          //  }

      };

       const removeItemFromCart = async () => {
   
         const product = {...newProduct };

         const original = numberInStock + quantity;
        // console.log(original);
         product.numberInStock = original;

          // console.log(product);
        // sending the product as an action to the Redux store.to be removed.
         dispatch(removeFromBasket(product));

         // updtate the database to increase stock back to original.
          
        //  if(product.price >=30000){
        //     const { data } =   await updateRawMaterial(product); 

        //     //console.log( data );
        //    }
        //    else {

        //     const { data } =   await updateShoe(product); 

        //     //console.log( data );
        //    }

       };

       const DecreaseItem = async () => {

       const product = { _id, title, price, description, category, image, rating, numberInStock, quantity};

        // sending the product as an action to the Redux store.
        dispatch(decreaseItem(product));
        // update the database while product is decreased.

       // newProduct.numberInStock++;

      //  if(newProduct.price >=30000){
      //    const { data } =   await updateRawMaterial(newProduct); 

      //     //console.log( data );
      //   }
      //   else{

      //    const { data } =   await updateShoe(newProduct); 

      //     //console.log( data );
      //   }

      };
       

    return ( 
        <div className = "grid grid-cols-4 md:grid-cols-5">

             <Image src = {image} height ={ 200 } width = { 200 } objectFit = "contain"/>

             {/* Middle */}
             <div className = "col-span-3 mx-5">
                 <p>{category}</p>
                 <p>{title}</p>

                 <div className = "flex">
                     { Array(rating).fill().map((_ , i) => (
                       <StarIcon key = {i} className = "h-5 text-yellow-500"/>
                    ))}
                 </div>  
                <p className = "text-xs my-2 line-clamp-3">{description}</p>

                <Currency  quantity = {price}  currency = "UGX"/>

                <p className = "text-sm my-3 ">
               
               <span className ="text-blue-600"> Available products:</span>
               <span className = "pl-2 text-pink-600">{ numberInStock }</span>
                </p>

                {/* <p className = "text-sm my-3 ">
               
               <span className ="text-blue-600"> Qauntity Added:</span>
               <span className = "pl-2 text-pink-600">{quantity}</span>
                </p> */}
              </div>

           {/* right add and delete buttons */}
           <div className = {`flex flex-col space-y-2 my-auto col-start-2 col-span-1 md:col-start-5 
                             columns-3xs md:justify-self-end`}>

               <div className = "flex justify-between xs:justify-start">

                  < button onClick = { addItemToCart } className = "button rounded-sm p-1">
                      <PlusIcon className="h-5 text-black" />
                  </button>

                  <div className="p-2 text-blue-600  sm:p-1 whitespace-nowrap">
                      Quantity: <span className="font-bold text-pink-600">{ quantity }</span>
                  </div>

                  < button onClick = { DecreaseItem } className = "button rounded-sm p-1">
                      <MinusSmIcon className="h-5 text-black" />
                  </button>

                </div>

                  <button  onClick = { removeItemFromCart } className = "button rounded-sm">
                      Delete
                  </button>
               
              
           </div>

   

        </div>
     );
}
 
export default CheckOutProducts;